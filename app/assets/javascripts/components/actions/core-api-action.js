import { CALL_API } from 'redux-api-middleware'
import { history } from '../store/store'

const api_base = '/api'

//----------------------------------------
// Top
//----------------------------------------

//
// Top Banners
//
export const API_LOAD_TOP_BANNERS_REQUEST = 'API_LOAD_TOP_BANNERS_REQUEST'
export const API_LOAD_TOP_BANNERS_SUCCESS = 'API_LOAD_TOP_BANNERS_SUCCESS'
export const API_LOAD_TOP_BANNERS_FAILURE = 'API_LOAD_TOP_BANNERS_FAILURE'
function fetchTopBanners() {
  return { type: API_LOAD_TOP_BANNERS_SUCCESS }
}

export function loadTopBanners() {
  return (dispatch, getstate) => {
    return dispatch(fetchTopBanners())
  }
}

//
// Pickup Work List
//
export const API_LOAD_PICKUP_WORK_LIST_REQUEST = 'API_LOAD_PICKUP_WORK_LIST_REQUEST'
export const API_LOAD_PICKUP_WORK_LIST_SUCCESS = 'API_LOAD_PICKUP_WORK_LIST_SUCCESS'
export const API_LOAD_PICKUP_WORK_LIST_FAILURE = 'API_LOAD_PICKUP_WORK_LIST_FAILURE'
function fetchPickupWorkList() {
  return { type: API_LOAD_PICKUP_WORK_LIST_SUCCESS }
}

export function loadPickupWorkList() {
  return (dispatch, getstate) => {
    return dispatch(fetchPickupWorkList())
  }
}

//
// Pickup Tags
//
export const API_LOAD_PICKUP_TAGS_REQUEST = 'API_LOAD_PICKUP_TAGS_REQUEST'
export const API_LOAD_PICKUP_TAGS_SUCCESS = 'API_LOAD_PICKUP_TAGS_SUCCESS'
export const API_LOAD_PICKUP_TAGS_FAILURE = 'API_LOAD_PICKUP_TAGS_FAILURE'
function fetchPickupTags() {
  return { type: API_LOAD_PICKUP_TAGS_SUCCESS }
}

export function loadPickupTags() {
  return (dispatch, getstate) => {
    return dispatch(fetchPickupTags())
  }
}

//
// Pickup New Work List
//
export const API_LOAD_PICKUP_NEW_WORK_LIST_REQUEST = 'API_LOAD_PICKUP_NEW_WORK_LIST_REQUEST'
export const API_LOAD_PICKUP_NEW_WORK_LIST_SUCCESS = 'API_LOAD_PICKUP_NEW_WORK_LIST_SUCCESS'
export const API_LOAD_PICKUP_NEW_WORK_LIST_FAILURE = 'API_LOAD_PICKUP_NEW_WORK_LIST_FAILURE'
function fetchPickupNewWorkList() {
  return { type: API_LOAD_PICKUP_NEW_WORK_LIST_SUCCESS }
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
export const API_LOAD_ME_REQUEST = 'API_LOAD_ME_REQUEST'
export const API_LOAD_ME_SUCCESS = 'API_LOAD_ME_SUCCESS'
export const API_LOAD_ME_FAILURE = 'API_LOAD_ME_FAILURE'
export function loadMe() {
  return get('/me', 'API_LOAD_ME')
}

//
// update Me
//
export const API_UPDATE_ME_REQUEST = 'API_UPDATE_ME_REQUEST'
export const API_UPDATE_ME_SUCCESS = 'API_UPDATE_ME_SUCCESS'
export const API_UPDATE_ME_FAILURE = 'API_UPDATE_ME_FAILURE'
export function updateMe(params) {
  return put('/me', 'API_UPDATE_ME', {}, { user: params })
}

//
// load Other User
//
export const API_LOAD_USER_REQUEST = 'API_LOAD_USER_REQUEST'
export const API_LOAD_USER_SUCCESS = 'API_LOAD_USER_SUCCESS'
export const API_LOAD_USER_FAILURE = 'API_LOAD_USER_FAILURE'
export function loadUser(id) {
  return get(`/users/${id}`, 'API_LOAD_USER')
}

//
// create User Image
//
export const API_CREATE_USER_IMAGE_REQUEST = 'API_CREATE_USER_IMAGE_REQUEST'
export const API_CREATE_USER_IMAGE_SUCCESS = 'API_CREATE_USER_IMAGE_SUCCESS'
export const API_CREATE_USER_IMAGE_FAILURE = 'API_CREATE_USER_IMAGE_FAILURE'
export function createUserImage(file) {
  return post('/my/user_image', 'API_CREATE_USER_IMAGE', {}, {}, { image: file })
}

//
// User Header Image
//
export const API_CREATE_USER_HEADER_IMAGE_REQUEST = 'API_CREATE_USER_HEADER_IMAGE_REQUEST'
export const API_CREATE_USER_HEADER_IMAGE_SUCCESS = 'API_CREATE_USER_HEADER_IMAGE_SUCCESS'
export const API_CREATE_USER_HEADER_IMAGE_FAILURE = 'API_CREATE_USER_HEADER_IMAGE_FAILURE'
export function createUserHeaderImage(file) {
  return post('/my/user_header_image', 'API_CREATE_USER_HEADER_IMAGE', {}, {}, { image: file })
}

//
// Works created by a User
//
export const API_LOAD_WORK_LIST_CREATED_BY_USER_REQUEST = 'API_LOAD_WORK_LIST_CREATED_BY_USER_REQUEST'
export const API_LOAD_WORK_LIST_CREATED_BY_USER_SUCCESS = 'API_LOAD_WORK_LIST_CREATED_BY_USER_SUCCESS'
export const API_LOAD_WORK_LIST_CREATED_BY_USER_FAILURE = 'API_LOAD_WORK_LIST_CREATED_BY_USER_FAILURE'
export function loadWorkListCreatedByUser(id, page = 1) {
  return get(`/users/${id}/works?page=${page}`, 'API_LOAD_WORK_LIST_CREATED_BY_USER')
}

//
// Favorite Works
//
export const API_LOAD_FAVORITE_WORK_LIST_REQUEST = 'LOAD_FAVORITE_WORK_LIST_REQUEST'
export const API_LOAD_FAVORITE_WORK_LIST_SUCCESS = 'LOAD_FAVORITE_WORK_LIST_SUCCESS'
export const API_LOAD_FAVORITE_WORK_LIST_FAILURE = 'LOAD_FAVORITE_WORK_LIST_FAILURE'
export function loadFavoriteWorkList(id, page = 1) {
  return get(`/users/${id}/likes?page=${page}`, 'LOAD_FAVORITE_WORK_LIST')
}

//----------------------------------------
// Work
//----------------------------------------

//
// Tag Work Lits
//
export const API_LOAD_TAG_WORK_LIST_REQUEST = 'API_LOAD_TAG_WORK_LIST_REQUEST'
export const API_LOAD_TAG_WORK_LIST_SUCCESS = 'API_LOAD_TAG_WORK_LIST_SUCCESS'
export const API_LOAD_TAG_WORK_LIST_FAILURE = 'API_LOAD_TAG_WORK_LIST_FAILURE'
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
export const API_LOAD_NEW_WORK_LIST_REQUEST = 'API_LOAD_NEW_WORK_LIST_REQUEST'
export const API_LOAD_NEW_WORK_LIST_SUCCESS = 'API_LOAD_NEW_WORK_LIST_SUCCESS'
export const API_LOAD_NEW_WORK_LIST_FAILURE = 'API_LOAD_NEW_WORK_LIST_FAILURE'
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
// Create Work
//
export const API_CREATE_WORK_REQUEST = 'API_CREATE_WORK_REQUEST'
export const API_CREATE_WORK_SUCCESS = 'API_CREATE_WORK_SUCCESS'
export const API_CREATE_WORK_FAILURE = 'API_CREATE_WORK_FAILURE'
export function createWork(params) {
  return post('/works', 'API_CREATE_WORK', {}, { work: params })
}

//
// Update Work
//
export const API_UPDATE_WORK_REQUEST = 'API_UPDATE_WORK_REQUEST'
export const API_UPDATE_WORK_SUCCESS = 'API_UPDATE_WORK_SUCCESS'
export const API_UPDATE_WORK_FAILURE = 'API_UPDATE_WORK_FAILURE'
export function updateWork(id, params) {
  return put(`/works/${id}`, 'API_UPDATE_WORK', {}, { work: params })
}

//
// Load Work
//
export const API_LOAD_WORK_REQUEST = 'API_LOAD_WORK_REQUEST'
export const API_LOAD_WORK_SUCCESS = 'API_LOAD_WORK_SUCCESS'
export const API_LOAD_WORK_FAILURE = 'API_LOAD_WORK_FAILURE'
export function loadWork(id) {
  return get(`/works/${id}`, 'API_LOAD_WORK')

}

//----------------------------------------
// Work Image
//----------------------------------------

//
// Create Work Image
//
export const API_CREATE_WORK_IMAGE_REQUEST = 'API_CREATE_WORK_IMAGE_REQUEST'
export const API_CREATE_WORK_IMAGE_SUCCESS = 'API_CREATE_WORK_IMAGE_SUCCESS'
export const API_CREATE_WORK_IMAGE_FAILURE = 'API_CREATE_WORK_IMAGE_FAILURE'
export function createWorkImage(id, params) {
  return post(`/works/${id}/work_images`, 'API_CREATE_WORK_IMAGE', {}, {}, params)
}

//
// Update Work_Image Image
//
export const API_UPDATE_WORK_IMAGE_REQUEST = 'API_UPDATE_WORK_IMAGE_REQUEST'
export const API_UPDATE_WORK_IMAGE_SUCCESS = 'API_UPDATE_WORK_IMAGE_SUCCESS'
export const API_UPDATE_WORK_IMAGE_FAILURE = 'API_UPDATE_WORK_IMAGE_FAILURE'
export function updateWorkImage(id, params) {
  return put(`/work_images/${id}`, 'API_UPDATE_WORK_IMAGE', {}, { work_image: params })
}

//
// Delete Work_Image Image
//
export const API_DELETE_WORK_IMAGE_REQUEST = 'API_DELETE_WORK_IMAGE_REQUEST'
export const API_DELETE_WORK_IMAGE_SUCCESS = 'API_DELETE_WORK_IMAGE_SUCCESS'
export const API_DELETE_WORK_IMAGE_FAILURE = 'API_DELETE_WORK_IMAGE_FAILURE'
export function deleteWorkImage(id) {
  return del(`/work_images/${id}`, 'API_DELETE_WORK_IMAGE')
}

//----------------------------------------
// Work Piece
//----------------------------------------

//
// Create Work Piece
//
export const API_CREATE_WORK_PIECE_REQUEST = 'API_CREATE_WORK_PIECE_REQUEST'
export const API_CREATE_WORK_PIECE_SUCCESS = 'API_CREATE_WORK_PIECE_SUCCESS'
export const API_CREATE_WORK_PIECE_FAILURE = 'API_CREATE_WORK_PIECE_FAILURE'
export function createWorkPiece(id, params) {
  return post(`/works/${id}/work_pieces`, 'API_CREATE_WORK_PIECE', {}, {}, params)
}

//
// Update Work_Piece Piece
//
export const API_UPDATE_WORK_PIECE_REQUEST = 'API_UPDATE_WORK_PIECE_REQUEST'
export const API_UPDATE_WORK_PIECE_SUCCESS = 'API_UPDATE_WORK_PIECE_SUCCESS'
export const API_UPDATE_WORK_PIECE_FAILURE = 'API_UPDATE_WORK_PIECE_FAILURE'
export function updateWorkPiece(id, params) {
  return put(`/work_pieces/${id}`, 'API_UPDATE_WORK_PIECE', {}, { work_piece: params })
}

//
// Delete API_Work_Piece Piece
//
export const API_DELETE_WORK_PIECE_REQUEST = 'API_DELETE_WORK_PIECE_REQUEST'
export const API_DELETE_WORK_PIECE_SUCCESS = 'API_DELETE_WORK_PIECE_SUCCESS'
export const API_DELETE_WORK_PIECE_FAILURE = 'API_DELETE_WORK_PIECE_FAILURE'
export function deleteWorkPiece(id) {
  return del(`/work_pieces/${id}`, 'API_DELETE_WORK_PIECE')
}

//----------------------------------------
// Work Tag
//----------------------------------------

//
// Create Work Tag
//
export const API_CREATE_WORK_TAG_REQUEST = 'API_CREATE_WORK_TAG_REQUEST'
export const API_CREATE_WORK_TAG_SUCCESS = 'API_CREATE_WORK_TAG_SUCCESS'
export const API_CREATE_WORK_TAG_FAILURE = 'API_CREATE_WORK_TAG_FAILURE'
export function createWorkTag(id, params) {
  return post(`/works/${id}/work_tags`, 'API_CREATE_WORK_TAG', {}, { work_tag: params })
}

//
// Delete API_Work_Tag Tag
//
export const API_DELETE_WORK_TAG_REQUEST = 'API_DELETE_WORK_TAG_REQUEST'
export const API_DELETE_WORK_TAG_SUCCESS = 'API_DELETE_WORK_TAG_SUCCESS'
export const API_DELETE_WORK_TAG_FAILURE = 'API_DELETE_WORK_TAG_FAILURE'
export function deleteWorkTag(id) {
  return del(`/work_tags/${id}`, 'API_DELETE_WORK_TAG')
}

//----------------------------------------
// Work Comment
//----------------------------------------

//
// Get Work Comment List
//
export const API_LOAD_WORK_COMMENT_LIST_REQUEST = 'API_LOAD_WORK_COMMENT_LIST_REQUEST'
export const API_LOAD_WORK_COMMENT_LIST_SUCCESS = 'API_LOAD_WORK_COMMENT_LIST_SUCCESS'
export const API_LOAD_WORK_COMMENT_LIST_FAILURE = 'API_LOAD_WORK_COMMENT_LIST_FAILURE'
export function loadWorkCommentList(id, offset) {
  return get(`/works/${id}/work_comments?offset=${offset}`, 'API_LOAD_WORK_COMMENT_LIST')
}

//
// Create Work Comment
//
export const API_CREATE_WORK_COMMENT_REQUEST = 'API_CREATE_WORK_COMMENT_REQUEST'
export const API_CREATE_WORK_COMMENT_SUCCESS = 'API_CREATE_WORK_COMMENT_SUCCESS'
export const API_CREATE_WORK_COMMENT_FAILURE = 'API_CREATE_WORK_COMMENT_FAILURE'
export function createWorkComment(id, params) {
  return post(`/works/${id}/work_comments`, 'API_CREATE_WORK_COMMENT', {}, { work_comment: params })
}


//----------------------------------------
// Work Like
//----------------------------------------

//
// Create Work Like
//
export const API_CREATE_LIKE_REQUEST = 'CREATE_LIKE_REQUEST'
export const API_CREATE_LIKE_SUCCESS = 'CREATE_LIKE_SUCCESS'
export const API_CREATE_LIKE_FAILURE = 'CREATE_LIKE_FAILURE'
export function createLike(work_id) {
  return post(`/works/${work_id}/like`, 'CREATE_LIKE')
}

//
// Delete API_Work_Tag Tag
//
export const API_DELETE_LIKE_REQUEST = 'DELETE_LIKE_REQUEST'
export const API_DELETE_LIKE_SUCCESS = 'DELETE_LIKE_SUCCESS'
export const API_DELETE_LIKE_FAILURE = 'DELETE_LIKE_FAILURE'
export function deleteLike(work_id) {
  return del(`/works/${work_id}/like`, 'DELETE_LIKE')
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
    'Accept': 'application/json'
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
    if (401 == res.status) {
      return history.push('/login')
    } else if (500 <= res.status && res.status < 600) {
      return history.push('/sorry')
    } else {
      return {
        type: 'API_ERROR'
      }
    }
  }
}

