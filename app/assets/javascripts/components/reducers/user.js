import * as User from '../actions/user'

export default function (state = {}, action) {
  switch (action.type) {
    case User.SET_USER:
      return action.user
    default:
      return state
  }
}
