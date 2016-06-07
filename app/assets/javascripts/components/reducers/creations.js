import * as Creations from '../actions/creations'

export default function creations(state = [], action) {
  switch (action.type) {
    case Creations.SET_CREATIONS:
      return action.creations
    default:
      return state
  }
}
