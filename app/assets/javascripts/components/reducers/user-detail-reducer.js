import * as Actions from '../actions/user-detail-action'

const initialState = {
  editMode: false,
  tabKey: 1,
  // profile: {},
  // originalWorks: [],
  originalCount: 0,
  favoriteCount: 0
}

export default function userDetail(state = initialState, action) {
  switch (action.type) {
    case Actions.RESET:
      return initialState
    // case Actions.SET_WORKS:
    //   return Object.assign({}, state, {
    //     originalWorks: action.originalWorks,
    //     favoriteWorks: action.favoriteWorks
    //   })
    // case Actions.SET_USER:
    //   return Object.assign({}, state, {
    //     profile: action.user
    //   })
    case Actions.CHANGE_TAB:
      return Object.assign({}, state, {
        tabKey: action.tabKey
      })
    case Actions.CHANGE_EDIT_MODE:
      return Object.assign({}, state, {
        editMode: action.editMode
      })
    default:
      return state
  }
}
