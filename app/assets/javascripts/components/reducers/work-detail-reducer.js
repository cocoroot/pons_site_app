import { combineReducers } from 'redux'

import * as Actions from '../actions/work-detail-action'
import * as ApiActions from '../actions/core-api-action'

import { INITIAL_STATE_FOR_WORK, INITIAL_STATE_FOR_USER } from './core-api-reducer'

import * as Constants from '../settings'

const INITIAL_STATE_FOR_EDIT_MODE = false
function editMode(state = INITIAL_STATE_FOR_EDIT_MODE, action) {
  switch (action.type) {
    case Actions.WKD_RESET:
      return INITIAL_STATE_FOR_EDIT_MODE
    case Actions.WKD_CHANGE_EDIT_MODE:
      return action.editMode
    case ApiActions.API_UPDATE_WORK_SUCCESS:
      return false
    default:
      return state
  }
}

const INITIAL_STATE_FOR_CURRENT_WORK = {
  ...INITIAL_STATE_FOR_WORK
}
function currentWork(state = INITIAL_STATE_FOR_CURRENT_WORK, action) {
  console.log("work-detail-reducer currentWork state=%o, action=%o", state, action)
  switch (action.type) {

      // Work
    case Actions.WKD_RESET:
      return INITIAL_STATE_FOR_CURRENT_WORK

    case ApiActions.API_CREATE_WORK_SUCCESS:
    case ApiActions.API_UPDATE_WORK_SUCCESS:
    case ApiActions.API_LOAD_WORK_SUCCESS:
      return action.payload.work

      // Work Image
    case ApiActions.API_CREATE_WORK_IMAGE_SUCCESS:
    case ApiActions.API_UPDATE_WORK_IMAGE_SUCCESS:
    case ApiActions.API_DELETE_WORK_IMAGE_SUCCESS:
      return Object.assign({}, state, {
        work_images: action.payload.work_images
      })

      // Work Tag
    case ApiActions.API_CREATE_WORK_TAG_SUCCESS:
    case ApiActions.API_DELETE_WORK_TAG_SUCCESS:
      return Object.assign({}, state, {
        work_tags: action.payload.work_tags
      })

      // Work Comment
    case ApiActions.API_LOAD_WORK_COMMENT_LIST_SUCCESS:
      return Object.assign({}, state, {
        work_comments: [
          ...state.work_comments,
          ...action.payload.work_comments
        ]
      })
    case ApiActions.API_CREATE_WORK_COMMENT_SUCCESS:
      return Object.assign({}, state, {
        work_comments: [
          action.payload.work_comment,
          ...state.work_comments
        ] })

      // Like
    case ApiActions.API_CREATE_LIKE_SUCCESS:
    case ApiActions.API_DELETE_LIKE_SUCCESS:
      return Object.assign({}, state, {
        likes_count: action.payload.likes_count,
        like: action.payload.like
      })

    default:
      return state
  }
}


const INITIAL_STATE_FOR_ME = {
  ...INITIAL_STATE_FOR_USER
}
function me(state = INITIAL_STATE_FOR_ME, action) {
  switch (action.type) {
    case Actions.WKD_RESET: return INITIAL_STATE_FOR_ME

    case ApiActions.API_LOAD_ME_SUCCESS:
      return action.payload.user

    default:
      return state
  }
}

const INITIAL_STATE_FOR_COMMENT_CONTROL = {
  currentComment: '',
  loadedPage: 1,
  allCommentLoaded: false
}
export function commentControl(state = INITIAL_STATE_FOR_COMMENT_CONTROL, action) {
  switch (action.type) {
    case Actions.WKD_RESET: return INITIAL_STATE_FOR_COMMENT_CONTROL

    case Actions.WKD_CHANGE_INPUT_COMMENT:
      return Object.assign({}, state, {
        currentComment: action.comment
      })

    case ApiActions.API_LOAD_WORK_SUCCESS:
      return Object.assign({}, state, {
        allCommentLoaded: action.payload.work_comments_count < Constants.COMMENTS_PER_PAGE
      })

    case ApiActions.API_LOAD_WORK_COMMENT_LIST_SUCCESS:
      return Object.assign({}, state, {
        allCommentLoaded: action.payload.work_comments.length < Constants.COMMENTS_PER_PAGE
      })

    case ApiActions.API_CREATE_WORK_COMMENT_SUCCESS:
      return Object.assign({}, state, {
        currentComment: ''
      })

    default:
      return state
  }
}

const INITIAL_STATE_FOR_IMAGE_CONTROL = {
  uploading: false
}
function imageControl(state = INITIAL_STATE_FOR_IMAGE_CONTROL, action) {
  switch (action.type) {
    case Actions.API_CREATE_WORK_IMAGE_REQUEST:
      return Object.assign({}, state, {
        uploading: true
      })
    case Actions.API_CREATE_WORK_IMAGE_SUCCESS:
    case Actions.API_CREATE_WORK_IMAGE_FAILURE:
      return Object.assign({}, state, {
        uploading: false
      })
    default:
      return state
  }
}

const INITIAL_STATE_FOR_FORM_CONTROL = {
  updating: false,
  title: '',
  description: '',
  work_status: {
    id: 0
  }
}
function formControl(state = INITIAL_STATE_FOR_FORM_CONTROL, action) {
  switch (action.type) {
    case Actions.WKD_RESET:
      return INITIAL_STATE_FOR_FORM_CONTROL

    case ApiActions.API_CREATE_WORK_SUCCESS:
    case ApiActions.API_UPDATE_WORK_SUCCESS:
    case ApiActions.API_LOAD_WORK_SUCCESS:
      var { title, description, work_status } = action.payload.work
      return Object.assign({}, state, {
        updating: false,
        title,
        description,
        work_status
      })

    case ApiActions.API_UPDATE_WORK_REQUEST:
      return Object.assign({}, state, {
        updating: true
      })

    case ApiActions.API_UPDATE_WORK_FAILURE:
      return Object.assign({}, state, {
        updating: false
      })

    case Actions.WKD_CHANGE_INPUT_TITLE:
      return Object.assign({}, state, {
        title: action.title
      })

    case Actions.WKD_CHANGE_INPUT_DESCRIPTION:
      return Object.assign({}, state, {
        description: action.description
      })

    case Actions.WKD_CHANGE_WORK_STATUS:
      return Object.assign({}, state, {
        work_status: action.work_status
      })

    default:
      return state
  }
}

const workDetailReducer = combineReducers({
  editMode,
  currentWork,
  commentControl,
  imageControl,
  formControl,
  me
})

export default workDetailReducer
