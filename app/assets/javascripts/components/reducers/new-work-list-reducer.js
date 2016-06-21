import { combineReducers } from 'redux'

import * as Actions from '../actions/new-work-list-action'
import * as ApiActions from '../actions/core-api-action'

import * as Constants from '../settings'

function works(state = [], action) {
  switch (action.type) {
    case Actions.NWL_RESET:
      return []
    case ApiActions.API_LOAD_NEW_WORK_LIST_SUCCESS:
      return [
        ...state,
        ...action.payload.works
      ]
    default:
      return state
  }
}

const INITIAL_STATE_FOR_CONTROL = {
  allWorksLoaded: false
}
function control(state = INITIAL_STATE_FOR_CONTROL, action) {
  switch (action.type) {
    case Actions.NWL_RESET:
      return INITIAL_STATE_FOR_CONTROL
    case ApiActions.API_LOAD_NEW_WORK_LIST_SUCCESS:
      return Object.assign({}, state, {
        allWorksLoaded: action.payload.works.length < Constants.WORKS_PER_PAGE
      })
    default:
      return state
  }
}

const newWorkListReducer = combineReducers({
  works,
  control
})

export default newWorkListReducer
