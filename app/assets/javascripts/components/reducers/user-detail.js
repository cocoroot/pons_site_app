import * as Actions from '../actions/user-detail'

const initialState = {
  creations: {
    tabKey: 1,
    originalCreations: [],
    favoriteCreations: []
  },
  profile: {
    editMode: false,
    user: {}
  }

}

export default function userDetail(state = initialState, action) {
  switch (action.type) {
    case Actions.SET_CREATIONS:
      return Object.assign({}, state, {
        creations: {
          originalCreations: action.originalCreations,
          favoriteCreations: action.favoriteCreations
        }
      })
    case Actions.SET_USER:
      return Object.assign({}, state, {
        profile: {
          user: action.user
        }
      })
    case Actions.CHANGE_EDIT_MODE:
      return Object.assign({}, state, {
        profile: {
          editMode: action.editMode	
        }
      })
    default:
      return state
  }
}
