import * as Actions from '../actions/user-detail-action'

const initialState = {
  editMode: false,
  profile: {},
  originalCreations: [],
  originalCount: 0,
  favoriteCreations: [],
  favoriteCount: 0
}

export default function userDetail(state = initialState, action) {
  switch (action.type) {
    case Actions.SET_CREATIONS:
      return Object.assign({}, state, {
        originalCreations: action.originalCreations,
        favoriteCreations: action.favoriteCreations
      })
    case Actions.SET_USER:
      return Object.assign({}, state, {
        profile: action.user
      })
    case Actions.CHANGE_EDIT_MODE:
      return Object.assign({}, state, {
        editMode: action.editMode
      })
    default:
      return state
  }
}
