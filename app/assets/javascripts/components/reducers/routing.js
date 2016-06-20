import { LOCATION_CHANGE } from 'react-router-redux'
import * as Actions from '../actions/core-api-action'

const initialState = { locationBeforeTransitions: null }

export default function routing(state = initialState, action) {
  if (action.type == LOCATION_CHANGE) {
    return { ...state, locationBeforeTransitions: action.payload }
  }

  switch (action.type) {
    case Actions.API_CREATE_WORK_SUCCESS: {
      let location = state.locationBeforeTransitions
      let id = action.payload.id
      const pathname = `/works/${id}`
      location = { ...location, pathname, action: 'PUSH' }
      return { ...state, locationBeforeTransitions: location }
    }
    default:
      return state
  }
}
