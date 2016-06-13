import * as Actions from '../actions/core-api-action'

const TOP_BANNERS_RESPONSE = {
  topBanners: [
    {
      id: 1,
      imgUrl: "http://pipsum.com/900x300.jpg",
      targetUrl: "http://www.yahoo.co.jp"
    },
    {
      id: 2,
      imgUrl: "http://pipsum.com/900x300.jpg",
      targetUrl: "http://www.dnp.co.jp"
    }
  ]
}

const PICKUP_WORK_LIST_RESPONSE = {
  pickupCreations: [
    {
      id: 1,
      title: "hogehoge",
      imgUrl: "http://pipsum.com/100x100.jpg",
      author: {
        id: 300,
        name: "Penguin",
        url: "/user/300/",
        img: "http://icon.img.jpg"
      },
      viewCount: 123,
      likeCount: 45,
      commentCount: 6
    },
    {
      id: 2,
      title: "mofumofu",
      imgUrl: "http://pipsum.com/100x100.jpg",
      author: {
        id: 301,
        name: "Cat",
        url: "/user/301/",
        img: "http://icon.img.jpg"
      },
      viewCount: 123,
      likeCount: 45,
      commentCount: 6
    }
  ]
}

const PICKUP_TAGS_RESPONSE = {
  pickupTags: [
    {
      id: 1,
      name: "楽天",
      url: "http://www.rakuten.co.jp"
    },
    {
      id: 2,
      name: "Amazon",
      url: "http://www.amazon.co.jp"
    }
  ]
}

const PICKUP_NEW_WORK_LIST_RESPONSE = {
  newCreations: [
    {
      id: 1,
      title: "hogehoge",
      imgUrl: "http://pipsum.com/100x100.jpg",
      author: {
        id: 300,
        name: "Penguin",
        url: "/user/300/",
        img: "http://pipsum.com/100x100.jpg"
      },
      viewCount: 123,
      likeCount: 45,
      commentCount: 6
    },
    {
      id: 2,
      title: "mofumofu",
      imgUrl: "http://pipsum.com/100x100.jpg",
      author: {
        id: 301,
        name: "Cat",
        url: "/user/301/",
        img: "http://pipsum.com/100x100.jpg"
      },
      viewCount: 123,
      likeCount: 45,
      commentCount: 6
    }
  ]
}

const INITIAL_STATE = {
  topBanners: [],
  pickupCreations: [],
  pickupTags: [],
  pickupNewCreations: [],
  creation: {},
  creations: [],
  userDetail: {}
}

export default function coreApi(state = INITIAL_STATE, action) {
  switch (action.type) {
      // Top Banner
    case Actions.LOAD_TOP_BANNERS_REQUEST: return state
    case Actions.LOAD_TOP_BANNERS_SUCCESS: return Object.assign({}, state, TOP_BANNERS_RESPONSE)
    case Actions.LOAD_TOP_BANNERS_FAILURE: return state

      // Pickup Work List
    case Actions.LOAD_PICKUP_WORK_LIST_REQUEST: return state
    case Actions.LOAD_PICKUP_WORK_LIST_SUCCESS: return Object.assign({}, state, PICKUP_WORK_LIST_RESPONSE)
    case Actions.LOAD_PICKUP_WORK_LIST_FAILURE: return state

      // Pickup Tags
    case Actions.LOAD_PICKUP_TAGS_REQUEST: return state
    case Actions.LOAD_PICKUP_TAGS_SUCCESS: return Object.assign({}, state, PICKUP_TAGS_RESPONSE)
    case Actions.LOAD_PICKUP_TAGS_FAILURE: return state

      // Pickup New Work List
    case Actions.LOAD_PICKUP_NEW_WORK_LIST_REQUEST: return state
    case Actions.LOAD_PICKUP_NEW_WORK_LIST_SUCCESS: return Object.assign({}, state, PICKUP_NEW_WORK_LIST_RESPONSE)
    case Actions.LOAD_PICKUP_NEW_WORK_LIST_FAILURE: return state

      // Pickup Creation
    case Actions.LOAD_CREATION_REQUEST: return state
    case Actions.LOAD_CREATION_SUCCESS: return Object.assign({}, state, {
      creation: action.payload
    })
    case Actions.LOAD_CREATION_FAILURE: return state

    case Actions.REQUIRE_LOGIN: return Object.assign({}, state, {
      error: {
        type: 'AUTHENTICATION_ERROR',
        message: 'need login'
      }
    })
    default:
      return state
  }
}
