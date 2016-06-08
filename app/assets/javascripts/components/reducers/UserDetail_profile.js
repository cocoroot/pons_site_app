import * as UserDetail from '../actions/UserDetail_profile'

const initialState = {
  editMode: false,
  user: {}
}

function UserDetail_profile(state = initialState, action) {
  switch (action.type) {
    case UserDetail.SET_USER:
      return Object.assign({}, state, {
        user: action.user
      })
    case UserDetail.CHANGE_EDIT_MODE:
      return Object.assign({}, state, {
        editMode: action.editMode
      })
    default:
      return state
  }
}

export default UserDetail_profile
