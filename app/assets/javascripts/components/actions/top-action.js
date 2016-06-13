export const SET_BANNERS = "SET_BANNERS"
export const SET_PICKUP_CREATIONS = "SET_PICKUP_CREATIONS"
export const SET_TAGS = "SET_TAGS"
export const SET_NEW_CREATIONS = "SET_NEW_CREATIONS"


export function setBanners(banners){
  return {
    type: SET_BANNERS,
    banners: banners
  }
}

export function setPickupCreations(pickupCreations){
  return {
    type: SET_PICKUP_CREATIONS,
    pickupCreations: pickupCreations
  }
}

export function setTags(tags){
  return{
    type: SET_TAGS,
    tags: tags
  }
}

export function setNewCreations(newCreations){
  return{
    type: SET_NEW_CREATIONS,
    newCreations: newCreations
  }
}
