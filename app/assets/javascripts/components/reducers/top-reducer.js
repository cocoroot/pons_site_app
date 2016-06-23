import * as Actions from "../actions/top-action"
import * as ApiActions from '../actions/core-api-action'

const INITIAL_STATE_FOR_TOP = {
  banners: [],
  pickupWorks: [],
  tags: [],
  pickupNewWorks: []
}
export default function top(state = INITIAL_STATE_FOR_TOP, action){
  console.log(state)
  switch(action.type){
    case Actions.SET_BANNERS:
    console.log(action.banners)
      return Object.assign({}, state, {
        banners: action.banners
      })
    case Actions.SET_TAGS:
      return Object.assign({},state, {
        tags: action.tags
      })
    case ApiActions.API_LOAD_NEW_WORK_LIST_SUCCESS:
      return Object.assign({}, state, {
        pickupWorks: action.payload.works,
        pickupNewWorks: action.payload.works
      })
    default:
      return state
  }
}
