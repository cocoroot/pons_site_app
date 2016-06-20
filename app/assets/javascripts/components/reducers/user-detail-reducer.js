import { combineReducers } from 'redux'

import * as Actions from '../actions/user-detail-action'
import * as ApiActions from '../actions/core-api-action'

const INITIAL_STATE_FOR_EDIT_MODE = false
function editMode(state = INITIAL_STATE_FOR_EDIT_MODE, action) {
  switch (action.type) {
    case Actions.USD_RESET:
      return INITIAL_STATE_FOR_EDIT_MODE
    default:
      return state
  }
}

const INITIAL_STATE_FOR_TAB_KEY = 1
function tabKey(state = INITIAL_STATE_FOR_TAB_KEY, action) {
  switch (action.type) {
    case Actions.USD_RESET:
      return INITIAL_STATE_FOR_TAB_KEY
    case Actions.USD_CHANGE_TAB:
      return action.tabKey
    default:
      return state
  }
}

const INITIAL_STATE_FOR_PROFILE = {
  id: 0,
  nickname: '',
  biography: '',
  image: null,
  header_image: null,
  tos_accepted: false,
  user_status: {},
  owner: false
}
function profile(state = INITIAL_STATE_FOR_PROFILE, action) {
  switch (action.type) {
    case Actions.USD_RESET:
      return INITIAL_STATE_FOR_PROFILE
    case ApiActions.LOAD_ME_SUCCESS:
    case ApiActions.LOAD_USER_SUCCESS:
      return action.payload
    default:
      return state
  }
}

const INITIAL_STATE_FOR_ORIGINAL_WORK_LIST = []
function originalWorkList(state = INITIAL_STATE_FOR_ORIGINAL_WORK_LIST, action) {
  switch (action.type) {
    case Actions.USD_RESET:
      return INITIAL_STATE_FOR_ORIGINAL_WORK_LIST
    case ApiActions.LOAD_WORK_LIST_CREATED_BY_USER_SUCCESS:
      return action.payload.works
    default:
      return state
  }
}

const INITAL_STATE_FOR_FAVORITE_WORK_LIST = []
function favoriteWorkList(state = INITAL_STATE_FOR_FAVORITE_WORK_LIST, action) {
  switch (action.type) {
    case Actions.USD_RESET:
      return INITAL_STATE_FOR_FAVORITE_WORK_LIST
    case ApiActions.LOAD_FAVORITE_WORK_LIST_SUCCESS:
      return action.payload.likes
    default:
      return state
  }
}

export default combineReducers({
  editMode,
  tabKey,
  profile,
  originalWorkList,
  favoriteWorkList
})
