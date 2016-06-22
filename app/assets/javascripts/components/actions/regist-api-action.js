import { CALL_API } from 'redux-api-middleware'
import { history } from '../store/store'
import { loadMe } from './core-api-action'

// TODO: 設定値
const REGIST_API = 'https://api-jp.kii.com/api/apps/7fc25148/users'
const APP_ID = '7fc25148'
const APP_KEY = 'd05e3c325e951267944e740d29a9e3a0'

export const DBAAS_REGIST_REQUEST = 'DBAAS_REGIST_REQUEST'
export const DBAAS_REGIST_SUCCESS = 'DBAAS_REGIST_SUCCESS'
export const DBAAS_REGIST_FAILURE = 'DBAAS_REGIST_FAILURE'
export function regist(nickname, password, email) {
  console.log("regist-api-start")
  const actionName = 'DBAAS_REGIST'
  const body = {
    loginName: nickname,
    displayName: nickname,
    password: password,
    emailAddress: email
  }

  return (dispatch, nextState) => {
    console.log("loginName=%o, password=%o, emailAddress=%o", body.loginName, body.password, body.emailAdress)
    dispatch({
      [CALL_API]: {
        endpoint: `${REGIST_API}`,
        method: 'POST',
        headers: {
          'X-Kii-AppID': APP_ID,
          'X-Kii-AppKey': APP_KEY,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body),
        types: [
          actionName + '_REQUEST',
          {
            type: actionName + '_SUCCESS',
            payload: (action, state, res) => { return res.json().then(
              json => {
                localStorage.access_token = json.access_token
                return json
              }).then(
                dispatch(loadMe())
              ).then(
                history.push('/')
              )
            }
          },
          {
            type: actionName + '_FAILURE',
            meta: (action, state, res) => { return dispatch(error(action, state, res))
            }
          }
        ] // types
      } // [CALL_API]
    })
  }
}
