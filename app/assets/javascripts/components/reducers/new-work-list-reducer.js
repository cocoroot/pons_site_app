import * as Actions from '../actions/new-work-list-action'

export default function newWorkList(state = [], action) {
  switch (action.type) {
    case Actions.SET_NEWWORKLIST:
      return Object.assign({}, state, {newWorkList: action.newWorkList})
    default:
      return state
  }
}
