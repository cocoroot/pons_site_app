import * as Top from '../actions/top'

export default function top(state = [], action) {
  switch (action.type) {
    case Top.SET_HEAD_MESSAGE:
      return action.headMessage
    default:
      return state
  }
}
