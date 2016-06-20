import * as Actions from '../actions/work-detail-action'
import * as ApiActions from '../actions/core-api-action'
import { combineReducers } from 'redux'


function editMode(state = initialState, action) {
  if (action.type == Actions.WKD_CHANGE_EDIT_MODE) {
    return action.editMode
  } else {
    return state
  }
}

const initialStateForWork = {
  id: 0,
  title: '',
  description: ''
}

function work(state = initialStateForWork, action) {
  if (action.type == ApiActions.API_LOAD_WORK_SUCCESS) {
    return action.payload
  } else {
    return state
  }
}

const workDetailReducer = combineReducers({
  editMode,
  work
})

export default workDetailReducer
