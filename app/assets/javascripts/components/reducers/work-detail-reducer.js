import { combineReducers } from 'redux'

import * as Actions from '../actions/work-detail-action'
import * as ApiActions from '../actions/core-api-action'

const INITIAL_STATE_FOR_EDIT_MODE = false
function editMode(state = INITIAL_STATE_FOR_EDIT_MODE, action) {
  switch (action.type) {
    case Actions.RESET:
      return INITIAL_STATE_FOR_EDIT_MODE
    case Actions.CHANGE_EDIT_MODE:
      return action.editMode
    default:
      return state
  }
}

const INITIAL_STATE_FOR_CURRENT_WORK = {
}
function currentWork(state = INITIAL_STATE_FOR_CURRENT_WORK, action) {
  switch (action.type) {

      // Work
    case Actions.RESET: return INITIAL_STATE_FOR_CURRENT_WORK
    case ApiActions.CREATE_WORK_SUCCESS: return action.payload
    case ApiActions.UPDATE_WORK_SUCCESS: return action.payload
    case ApiActions.LOAD_WORK_SUCCESS: return action.payload

      // Work Image
    case ApiActions.CREATE_WORK_IMAGE_SUCCESS:
    case ApiActions.UPDATE_WORK_IMAGE_SUCCESS:
    case ApiActions.DELETE_WORK_IMAGE_SUCCESS:
      return Object.assign({}, state, {
        work_images: action.payload.work_images
      })

      // Work Tag
    case ApiActions.CREATE_WORK_TAG_SUCCESS:
    case ApiActions.DELETE_WORK_TAG_SUCCESS:
      return Object.assign({}, state, {
        work_tags: action.payload.work_tags
      })

      // Work Comment
    case ApiActions.CREATE_WORK_COMMENT_SUCCESS:
      return Object.assign({}, state, {
        work_comments: action.payload.work_comments
      })

      // Like
    case ApiActions.CREATE_LIKE_SUCCESS:
    case ApiActions.DELETE_LIKE_SUCCESS:
      return Object.assign({}, state, {
        likes_count: action.payload.likes_count,
        like: action.payload.like
      })

    default:
      return state
  }
}

const workDetailReducer = combineReducers({
  editMode,
  currentWork
})

export default workDetailReducer
