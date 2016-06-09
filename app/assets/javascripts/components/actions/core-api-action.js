import { CALL_API } from 'redux-api-middleware' 

const api_base = '/api'

export const REQUEST_LOAD_CREATION = 'REQUEST_LOAD_CREATION'
export const SUCCESS_LOAD_CREATION = 'SUCCESS_LOAD_CREATION'
export const FAILURE_LOAD_CREATION = 'FAILURE_LOAD_CREATION'

export function loadCreation(id) {
  return {
    [CALL_API]: {
      endpoint: `${api_base}/creations/${id}`,
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'access_token': 'ZGlvbC3EmXps7OsgAdq17Tsp6opGZ3-Xn5jUDgjdM_Q'
      },
      types: [
        REQUEST_LOAD_CREATION,
        {
          type: SUCCESS_LOAD_CREATION,
          payload: (action, state, res) => {
            return res.json().then(payload => payload)
          }
        },
        FAILURE_LOAD_CREATION
      ]
    }
  }
}
