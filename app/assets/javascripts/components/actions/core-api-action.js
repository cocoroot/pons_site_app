import { CALL_API } from 'redux-api-middleware'
import { history } from '../store/store'

const api_base = '/api'


//----------------------------------------
// TOP
//----------------------------------------
export const LOAD_TOP_BANNERS_REQUEST = 'LOAD_TOP_BANNERS_REQUEST'
export const LOAD_TOP_BANNERS_SUCCESS = 'LOAD_TOP_BANNERS_SUCCESS'
export const LOAD_TOP_BANNERS_FAILURE = 'LOAD_TOP_BANNERS_FAILURE'
function fetchTopBanners() {
  return (dispatch, nextState) => {
  }
}

export function loadTopBanners() {
  return (dispatch, getstate) => {
    return dispatch(fetchTopBanners())
  }
}

export const LOAD_PICKUP_WORK_LIST_REQUEST = 'LOAD_PICKUP_WORK_LIST_REQUEST'
export const LOAD_PICKUP_WORK_LIST_SUCCESS = 'LOAD_PICKUP_WORK_LIST_SUCCESS'
export const LOAD_PICKUP_WORK_LIST_FAILURE = 'LOAD_PICKUP_WORK_LIST_FAILURE'
function fetchPickupWorkList() {
  return (dispatch, nextState) => {
  }
}

export function loadPickupWorkList() {
  return (dispatch, getstate) => {
    return dispatch(fetchPickupWorkList())
  }
}

export const LOAD_PICKUP_TAGS_REQUEST = 'LOAD_PICKUP_TAGS_REQUEST'
export const LOAD_PICKUP_TAGS_SUCCESS = 'LOAD_PICKUP_TAGS_SUCCESS'
export const LOAD_PICKUP_TAGS_FAILURE = 'LOAD_PICKUP_TAGS_FAILURE'
function fetchPickupTags() {
  return (dispatch, nextState) => {
  }
}

export function loadPickupTags() {
  return (dispatch, getstate) => {
    return dispatch(fetchPickupTags())
  }
}

export const LOAD_PICKUP_NEW_WORK_LIST_REQUEST = 'LOAD_PICKUP_NEW_WORK_LIST_REQUEST'
export const LOAD_PICKUP_NEW_WORK_LIST_SUCCESS = 'LOAD_PICKUP_NEW_WORK_LIST_SUCCESS'
export const LOAD_PICKUP_NEW_WORK_LIST_FAILURE = 'LOAD_PICKUP_NEW_WORK_LIST_FAILURE'
function fetchPickupNewWorkList() {
  return (dispatch, nextState) => {
  }
}

export function loadPickupNewWorkList() {
  return (dispatch, getstate) => {
    return dispatch(fetchPickupWorkList())
  }
}

//----------------------------------------
// TAG_CREATION_LIST
//----------------------------------------
export const LOAD_TAG_WORK_LIST_REQUEST = 'LOAD_TAG_WORK_LIST_REQUEST'
export const LOAD_TAG_WORK_LIST_SUCCESS = 'LOAD_TAG_WORK_LIST_SUCCESS'
export const LOAD_TAG_WORK_LIST_FAILURE = 'LOAD_TAG_WORK_LIST_FAILURE'
function fetchTagWorkList() {
  return (dispatch, nextState) => {
  }
}

export function loadTagWorkList() {
  return (dispatch, getstate) => {
    return dispatch(fetchTagWorkList())
  }
}

//----------------------------------------
// NEW_CREATION_LIST
//----------------------------------------
export const LOAD_NEW_WORK_LIST_REQUEST = 'LOAD_NEW_WORK_LIST_REQUEST'
export const LOAD_NEW_WORK_LIST_SUCCESS = 'LOAD_NEW_WORK_LIST_SUCCESS'
export const LOAD_NEW_WORK_LIST_FAILURE = 'LOAD_NEW_WORK_LIST_FAILURE'
function fetchNewWorkList() {
  return (dispatch, nextState) => {
  }
}

export function loadNewWorkList() {
  return (dispatch, getstate) => {
    return dispatch(fetchNewWorkList())
  }
}

//----------------------------------------
// CREATION
//----------------------------------------
export const LOAD_CREATION_REQUEST = 'LOAD_CREATION_REQUEST'
export const LOAD_CREATION_SUCCESS = 'LOAD_CREATION_SUCCESS'
export const LOAD_CREATION_FAILURE = 'LOAD_CREATION_FAILURE'
function fetchCreation(id) {
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

