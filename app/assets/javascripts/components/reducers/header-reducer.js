import * as Actions from '../actions/header-action'

const initialState = {
  showModal: false
}

export default function userDetail(state = initialState, action) {
  switch (action.type) {
    case Actions.SHOW_CREATE_FORM:
      return Object.assign({}, state, {
        showModal: action.showModal
      })
    default:
      return state
  }
}
