import { CALL_API } from 'redux-api-middleware'
import { history } from '../store/store'
import { loadMe } from './core-api-action'

// TODO: 設定値
const LOGIN_API = 'https://api.stg.dbackend.jp/api/oauth2/token'
const APP_ID = '7fc25148'
const APP_KEY = 'd05e3c325e951267944e740d29a9e3a0'

export const DBAAS_LOGIN_REQUEST = 'DBAAS_LOGIN_REQUEST'
export const DBAAS_LOGIN_SUCCESS = 'DBAAS_LOGIN_SUCCESS'
export const DBAAS_LOGIN_FAILURE = 'DBAAS_LOGIN_FAILURE'
export function login(username, password) {
  const actionName = 'DBAAS_LOGIN'
  const body = {
    username: username,
    password: password,
    expiresAt: Date.now() + 7 * 24 * 60 * 60 * 100 // expires at just a week later
  }

  return (dispatch, nextState) => {
    //console.log("login username=%o, passwortd=%o, expiresAt=%o", body.username, body.password, body.expiresAt)
    dispatch({
      [CALL_API]: {
        endpoint: `${LOGIN_API}`,
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
