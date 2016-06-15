import * as Actions from '../actions/work-detail-action'
import { combineReducers } from 'redux'

function editMode(state = false, action) {
  switch (action.type) {
    case Actions.CHANGE_EDIT_MODE:
      return action.editMode
    default:
      return state
  }
}

const workDetailReducer = combineReducers({
  editMode
})

export default workDetailReducer
