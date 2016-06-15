import * as Actions from '../actions/user-detail-action'

const initialState = {
  editMode: false,
  profile: {},
  originalWorks: [],
  originalCount: 0,
  favoriteWorks: [],
  favoriteCount: 0
}

export default function userDetail(state = initialState, action) {
  switch (action.type) {
    case Actions.SET_WORKS:
      return Object.assign({}, state, {
        originalWorks: action.originalWorks,
        favoriteWorks: action.favoriteWorks
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
