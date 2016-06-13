import { CALL_API } from 'redux-api-middleware'
import { history } from '../store/store'

const api_base = '/api'

//----------------------------------------
// Top Banners
//----------------------------------------
export const LOAD_TOP_BANNERS_REQUEST = 'LOAD_TOP_BANNERS_REQUEST'
export const LOAD_TOP_BANNERS_SUCCESS = 'LOAD_TOP_BANNERS_SUCCESS'
export const LOAD_TOP_BANNERS_FAILURE = 'LOAD_TOP_BANNERS_FAILURE'
function fetchTopBanners() {
  return { type: LOAD_TOP_BANNERS_SUCCESS }
}

export function loadTopBanners() {
  return (dispatch, getstate) => {
    return dispatch(fetchTopBanners())
  }
}

//----------------------------------------
// Pickup Work List
//----------------------------------------
export const LOAD_PICKUP_WORK_LIST_REQUEST = 'LOAD_PICKUP_WORK_LIST_REQUEST'
export const LOAD_PICKUP_WORK_LIST_SUCCESS = 'LOAD_PICKUP_WORK_LIST_SUCCESS'
export const LOAD_PICKUP_WORK_LIST_FAILURE = 'LOAD_PICKUP_WORK_LIST_FAILURE'
function fetchPickupWorkList() {
  return { type: LOAD_PICKUP_WORK_LIST_SUCCESS }
}

export function loadPickupWorkList() {
  return (dispatch, getstate) => {
    return dispatch(fetchPickupWorkList())
  }
}

//----------------------------------------
// Pickup Tags
//----------------------------------------
export const LOAD_PICKUP_TAGS_REQUEST = 'LOAD_PICKUP_TAGS_REQUEST'
export const LOAD_PICKUP_TAGS_SUCCESS = 'LOAD_PICKUP_TAGS_SUCCESS'
export const LOAD_PICKUP_TAGS_FAILURE = 'LOAD_PICKUP_TAGS_FAILURE'
function fetchPickupTags() {
  return { type: LOAD_PICKUP_TAGS_SUCCESS }
}

export function loadPickupTags() {
  return (dispatch, getstate) => {
    return dispatch(fetchPickupTags())
  }
}

//----------------------------------------
// Pickup New Work List
//----------------------------------------
export const LOAD_PICKUP_NEW_WORK_LIST_REQUEST = 'LOAD_PICKUP_NEW_WORK_LIST_REQUEST'
export const LOAD_PICKUP_NEW_WORK_LIST_SUCCESS = 'LOAD_PICKUP_NEW_WORK_LIST_SUCCESS'
export const LOAD_PICKUP_NEW_WORK_LIST_FAILURE = 'LOAD_PICKUP_NEW_WORK_LIST_FAILURE'
function fetchPickupNewWorkList() {
  return { type: LOAD_PICKUP_NEW_WORK_LIST_SUCCESS }
}

export function loadPickupNewWorkList() {
  return (dispatch, getstate) => {
    return dispatch(fetchPickupNewWorkList())
  }
}

//----------------------------------------
// Tag Work Lits
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
// New Work List
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
// Works created by a User
//----------------------------------------
export const LOAD_WORK_LIST_CREATED_BY_USER_REQUEST = 'LOAD_WORK_LIST_CREATED_BY_USER_REQUEST'
export const LOAD_WORK_LIST_CREATED_BY_USER_SUCCESS = 'LOAD_WORK_LIST_CREATED_BY_USER_SUCCESS'
export const LOAD_WORK_LIST_CREATED_BY_USER_FAILURE = 'LOAD_WORK_LIST_CREATED_BY_USER_FAILURE'
export function loadWorkListCreatedByUser(id) {
  return (dispatch, getState) => {
    return dispatch(get(`/works?created_by=${id}`))
  }
}


//----------------------------------------
// Work
//----------------------------------------
export const LOAD_WORK_REQUEST = 'LOAD_WORK_REQUEST'
export const LOAD_WORK_SUCCESS = 'LOAD_WORK_SUCCESS'
export const LOAD_WORK_FAILURE = 'LOAD_WORK_FAILURE'
export function loadWork(id) {
  return (dispatch, getState) => {
    return dispatch(get(`/works/${id}`, 'LOAD_WORK'))
  }
}

//----------------------------------------
// common
//----------------------------------------
function get(api, actionName) {
  return (dispatch, nextState) => {
    dispatch({
      [CALL_API]: {
        endpoint: `${api_base}${api}`,
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'access_token': localStorage.access_token
        },
        types: [
          actionName + '_REQUEST',
          {
            type: actionName + '_SUCCESS',
            payload: (action, state, res) => {
              return res.json().then(payload => payload)
            }
          },
          {
            type: actionName + '_FAILURE',
            meta: (action, state, res) => {
              return dispatch(error(action, state, res))
            }
          }
        ] // types
      } // [CALL_API]
    }) // dispatch
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

