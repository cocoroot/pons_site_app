import { CALL_API } from 'redux-api-middleware'
import { history } from '../store/store'

const api_base = '/api'

export const LOAD_CREATION_REQUEST = 'LOAD_CREATION_REQUEST'
export const LOAD_CREATION_SUCCESS = 'LOAD_CREATION_SUCCESS'
export const LOAD_CREATION_FAILURE = 'LOAD_CREATION_FAILURE'
export function fetchCreation(id) {
  return (dispatch, nextState) => {
    dispatch(
      {
        [CALL_API]: {
          endpoint: `${api_base}/creations/${id}`,
          method: 'GET',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'access_token': localStorage.access_token
          },
          types: [
            LOAD_CREATION_REQUEST,
            {
              type: LOAD_CREATION_SUCCESS,
              payload: (action, state, res) => {
                return res.json().then(payload => payload)
              }
            },
            {
              type: LOAD_CREATION_FAILURE,
              meta: (action, state, res) => {
                // console.log("LOAD_CREATION_FAILURE action=%o, state=%o, res=%o", action, state, res)
		return dispatch(error(action, state, res))
              }
            }
          ]
        }
      })
  }
}

export function loadCreation(id) {
  return (dispatch, getState) => {
    return dispatch(fetchCreation(id))
  }
}

export function error(action, state, res) {
  return (dispatch, nextState) => {
    if (400 == res.status) {
      return history.push('login')
    } else if (400 <= res.status && res.status < 500) {
      return {
        type: 'ERROR',
        message: `Client Error (status=${res.status})`
      }
    } else if (500 <= res.status && res.status < 600) {
      return history.push('/sorry')
    }
    
  }
}

