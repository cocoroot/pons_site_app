import * as UserDetail from '../actions/UserDetail_creations'

const initialState = {
  tabKey: 1,
  originalCreations: [],
  favoriteCreations: []
}

function UserDetail_creations(state = initialState, action) {
  switch (action.type) {
    case UserDetail.SET_CREATIONS:
      return Object.assign({}, state, {
        originalCreations: action.originalCreations,
        favoriteCreations: action.favoriteCreations
      })
    default:
      return state
  }
}

export default UserDetail_creations
