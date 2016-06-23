import * as Actions from '../actions/header-action'
import * as ApiActions from '../actions/core-api-action'

const initialState = {
  newWorkModalOpened: false,
  me: {
    nickname: '',
    biography: ''
  }
}

export default function header(state = initialState, action) {
  switch (action.type) {
    case Actions.HDR_SHOW_NEW_WORK_MODAL:
      return Object.assign({}, state, {
        newWorkModalOpened: action.newWorkModalOpened
      })
    case ApiActions.API_LOAD_ME_SUCCESS:
    case ApiActions.API_UPDATE_ME_SUCCESS:
      return Object.assign({}, state, {
        me: action.payload.user
      })
    case ApiActions.API_CREATE_WORK_SUCCESS:
      return Object.assign({}, state, {
        newWorkModalOpened: false
      })
    default:
      return state
  }
}
