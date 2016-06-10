import * as Actions from '../actions/core-api-action'

export default function coreApi(state = [], action) {
  switch (action.type) {
    case Actions.REQUEST_LOAD_CREATION:
      return state
    case Actions.SUCCESS_LOAD_CREATION:
      return Object.assign({}, state, {
        creation: action.payload
      })
    case Actions.FAILURE_LOAD_CREATION:
      return state
    case Actions.REQUIRE_LOGIN:
      return state
    default:
      return state
  }
}
