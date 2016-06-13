import * as Actions from "../actions/top-action"

export default function top(state = [], action){
  console.log(state)
  switch(action.type){
    case Actions.SET_BANNERS:
    console.log(action.banners)
      return Object.assign({},state,{banners: action.banners})
    case Actions.SET_PICKUP_CREATIONS:
      return Object.assign({},state,{pickupCreations: action.pickupCreations})
    case Actions.SET_TAGS:
      return Object.assign({},state,{tags: action.tags})
    case Actions.SET_NEW_CREATIONS:
      return Object.assign({},state,{newCreations: action.newCreations})
    default:
      return state
  }
}
