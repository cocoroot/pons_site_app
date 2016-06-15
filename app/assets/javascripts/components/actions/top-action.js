export const SET_BANNERS = "SET_BANNERS"
export const SET_PICKUP_WORKS = "SET_PICKUP_WORKS"
export const SET_TAGS = "SET_TAGS"
export const SET_NEW_WORKS = "SET_NEW_WORKS"


export function setBanners(banners){
  return {
    type: SET_BANNERS,
    banners: banners
  }
}

export function setPickupWorks(pickupWorks){
  return {
    type: SET_PICKUP_WORKS,
    pickupWorks: pickupWorks
  }
}

export function setTags(tags){
  return{
    type: SET_TAGS,
    tags: tags
  }
}

export function setNewWorks(newWorks){
  return{
    type: SET_NEW_WORKS,
    newWorks: newWorks
  }
}
