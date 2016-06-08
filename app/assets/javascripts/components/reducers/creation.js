import * as Creation from '../actions/creation'

export default function creation(state = [], action) {
  switch (action.type) {
    case Creation.SET_CREATION:
      return action.creation
    default:
      return state
  }
}
