import { CALL_API } from 'redux-api-middleware'
import { history } from '../store/store'

const api_base = '/api'

//----------------------------------------
// Top
//----------------------------------------

//
// Top Banners
//
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

//
// Pickup Work List
//
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

//
// Pickup Tags
//
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

//
// Pickup New Work List
//
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
// User
//----------------------------------------

//
// load Me
//
export const LOAD_ME_REQUEST = 'LOAD_ME_REQUEST'
export const LOAD_ME_SUCCESS = 'LOAD_ME_SUCCESS'
export const LOAD_ME_FAILURE = 'LOAD_ME_FAILURE'
export function loadMe() {
  return get('/me', 'LOAD_ME')
}

//
// update Me
//
export const UPDATE_ME_REQUEST = 'UPDATE_ME_REQUEST'
export const UPDATE_ME_SUCCESS = 'UPDATE_ME_SUCCESS'
export const UPDATE_ME_FAILURE = 'UPDATE_ME_FAILURE'
export function updateMe(params) {
  return put('/me', 'UPDATE_ME', {}, { user: params })
}

//
// load Other User
//
export const LOAD_USER_REQUEST = 'LOAD_USER_REQUEST'
export const LOAD_USER_SUCCESS = 'LOAD_USER_SUCCESS'
export const LOAD_USER_FAILURE = 'LOAD_USER_FAILURE'
export function loadUser(id) {
  return get(`/users/${id}`, 'LOAD_USER')
}

//
// create User Image
//
export const CREATE_USER_IMAGE_REQUEST = 'CREATE_USER_IMAGE_REQUEST'
export const CREATE_USER_IMAGE_SUCCESS = 'CREATE_USER_IMAGE_SUCCESS'
export const CREATE_USER_IMAGE_FAILURE = 'CREATE_USER_IMAGE_FAILURE'
export function createUserImage(file) {
  return post('/my/user_image', 'CREATE_USER_IMAGE', {}, {}, { image: file })
}

//
// User Header Image
//
export const CREATE_USER_HEADER_IMAGE_REQUEST = 'CREATE_USER_HEADER_IMAGE_REQUEST'
export const CREATE_USER_HEADER_IMAGE_SUCCESS = 'CREATE_USER_HEADER_IMAGE_SUCCESS'
export const CREATE_USER_HEADER_IMAGE_FAILURE = 'CREATE_USER_HEADER_IMAGE_FAILURE'
export function createUserHeaderImage(file) {
  return post('/my/user_header_image', 'CREATE_USER_HEADER_IMAGE', {}, {}, { image: file })
}

//
// Works created by a User
//
export const LOAD_WORK_LIST_CREATED_BY_USER_REQUEST = 'LOAD_WORK_LIST_CREATED_BY_USER_REQUEST'
export const LOAD_WORK_LIST_CREATED_BY_USER_SUCCESS = 'LOAD_WORK_LIST_CREATED_BY_USER_SUCCESS'
export const LOAD_WORK_LIST_CREATED_BY_USER_FAILURE = 'LOAD_WORK_LIST_CREATED_BY_USER_FAILURE'
export function loadWorkListCreatedByUser(id, page = 1) {
  return get(`/users/${id}/works?page=${page}`, 'LOAD_WORK_LIST_CREATED_BY_USER')
}

//
// Favorite Works
//
export const LOAD_FAVORITE_WORKS_REQUEST = 'LOAD_FAVORITE_WORKS_REQUEST'
export const LOAD_FAVORITE_WORKS_SUCCESS = 'LOAD_FAVORITE_WORKS_SUCCESS'
export const LOAD_FAVORITE_WORKS_FAILURE = 'LOAD_FAVORITE_WORKS_FAILURE'
export function loadFavoriteWorks(id, page = 1) {
  return get(`/users/${id}/goods?page=${page}`, 'LOAD_FAVORITE_WORKS')
}

//----------------------------------------
// Work
//----------------------------------------

//
// Tag Work Lits
//
export const LOAD_TAG_WORK_LIST_REQUEST = 'LOAD_TAG_WORK_LIST_REQUEST'
export const LOAD_TAG_WORK_LIST_SUCCESS = 'LOAD_TAG_WORK_LIST_SUCCESS'
export const LOAD_TAG_WORK_LIST_FAILURE = 'LOAD_TAG_WORK_LIST_FAILURE'
function fetchTagWorkList() {
  return (dispatch, nextState) => {
  }
}

export function loadTagWorkList() {
  return (dispatch, nextState) => {
    return dispatch(fetchTagWorkList())
  }
}

//
// New Work List
//
export const LOAD_NEW_WORK_LIST_REQUEST = 'LOAD_NEW_WORK_LIST_REQUEST'
export const LOAD_NEW_WORK_LIST_SUCCESS = 'LOAD_NEW_WORK_LIST_SUCCESS'
export const LOAD_NEW_WORK_LIST_FAILURE = 'LOAD_NEW_WORK_LIST_FAILURE'
function fetchNewWorkList() {
  return (dispatch, nextState) => {
  }
}

export function loadNewWorkList() {
  return (dispatch, nextState) => {
    return dispatch(fetchNewWorkList())
  }
}

//
// Work
//
export const LOAD_WORK_REQUEST = 'LOAD_WORK_REQUEST'
export const LOAD_WORK_SUCCESS = 'LOAD_WORK_SUCCESS'
export const LOAD_WORK_FAILURE = 'LOAD_WORK_FAILURE'
export function loadWork(id) {
  return get(`/works/${id}`, 'LOAD_WORK')
}

//----------------------------------------
// common
//----------------------------------------
function get(api, actionName, headers = {}, params = {}, forms = {}) {
  return send('GET', api, actionName, Object.assign({}, headers, {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }), params, forms)
}

function post(api, actionName, headers = {}, params = {}, forms = {}) {
  return send('POST', api, actionName, headers, params, forms)
}

function put(api, actionName, headers = {}, params = {}, forms = {}) {
  return send('PUT', api, actionName, Object.assign({}, headers, {
    'Accept': 'application/json',
  }), params, forms)
}

function del(api, actionName, headers = {}, params = {}, forms = {}) {
  return send('DELETE', api, actionName, headers, params, forms)
}

// HTTP リクエストを送信する
//   params が {} でない時、params を body にセットして Content-Type: application/json でリクエストを送信する
//   params が {} で、forms が {} でない時、forms の内容を body にセットして Content-Type: でリクエストを送信する
function send(method, api, actionName, headers = {}, params = {}, forms = {}) {
  return (dispatch, nextState) => {
    let headers_with_token = Object.assign({}, headers, {
      'access_token': localStorage.access_token
    })
    let body = null
    if (Object.keys(params).length !== 0) {
      body = JSON.stringify(params)
      Object.assign(headers_with_token, {
        'Content-Type': 'application/json'
      })
    } else if (Object.keys(forms).length !== 0) {
      body = new FormData()
      Object.keys(forms).forEach((key) => {
        body.append(key, forms[key])
      })
    }

    console.log("send method=%o, actionName=%o, headers=%o, params=%o, body=%o, forms=%o", method, actionName, headers, params, body, forms)
    
    dispatch({
      [CALL_API]: {
        endpoint: `${api_base}${api}`,
        method: method,
        headers: headers_with_token,
        body: body,
        types: [
          actionName + '_REQUEST',
          {
            type: actionName + '_SUCCESS',
            payload: (action, state, res) => { return res.json().then(payload => payload) }
          },
          {
            type: actionName + '_FAILURE',
            meta: (action, state, res) => { return dispatch(error(action, state, res))
            }
          }
        ] // types
      } // [CALL_API]
    }) // dispatch
  }
}

export function error(action, state, res) {
  return (dispatch, nextState) => {
    if (400 <= res.status && res.status < 500) {
      return history.push('/login')
    } else if (500 <= res.status && res.status < 600) {
      return history.push('/sorry')
    }
  }
}

