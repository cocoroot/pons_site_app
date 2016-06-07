import * as Creation from '../actions/creation'

export default function creation(state = [], action) {
  console.log("reducers/creation state=%o, action=%o", state, action)
  switch (action.type) {
  case Creation.SET_CREATION:
    console.log("reducers/creation case Creation.SET_CREATION state=%o, action=%o", state, action)
    return action.creation
  default:
    return state
  }
}
