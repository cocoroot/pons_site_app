import * as Actions from '../actions/login-action'

const initialState = {
  alertVisible: false,
  alertMessage: ''
}

export default function loginReducer(state = initialState, action) {
  switch (action.type) {
    case Actions.SHOW_ERROR:
      return Object.assign({}, state, {
        alertVisible: action.alertVisible,
        alertMessage: action.alertMessage
      })
    case Actions.HIDE_ERROR:
      return Object.assign({}, state, {
        alertVisible: action.alertVisible,
        alertMessage: ''
      })
    default:
      return state
  }
}
