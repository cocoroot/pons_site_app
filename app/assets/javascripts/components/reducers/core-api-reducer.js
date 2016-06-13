import * as Actions from '../actions/core-api-action'

export default function coreApi(state = [], action) {
  switch (action.type) {
    case Actions.LOAD_CREATION_REQUEST:
      return state
    case Actions.LOAD_CREATION_SUCCESS:
      return Object.assign({}, state, {
        creation: action.payload
      })
    case Actions.LOAD_CREATION_FAILURE:
      return state
    case Actions.REQUIRE_LOGIN:
      return Object.assign({}, state, {
	error: {
	  type: 'AUTHENTICATION_ERROR',
	  message: 'need login'
	}
      })
    default:
      return state
  }
}
