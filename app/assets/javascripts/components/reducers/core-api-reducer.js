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
  pickupWorks: [
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
  pickupNewWorks: [
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
  pickupWorks: [],
  pickupTags: [],
  pickupNewWorks: [],
  user: {},
  userWorks: [],
  favoriteWorks: [],
  work: {},
  works: [],
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

      //----------------------------------------
      // User
      //----------------------------------------
      
      // load Me
    case Actions.LOAD_ME_REQUEST: return state
    case Actions.LOAD_ME_SUCCESS: return Object.assign({}, state, {
      me: action.payload
    })
    case Actions.LOAD_ME_FAILURE: return state
      
      // update Me
    case Actions.UPDATE_ME_REQUEST: return state
    case Actions.UPDATE_ME_SUCCESS: return Object.assign({}, state, {
      me: action.payload
    })
    case Actions.UPDATE_ME_FAILURE: return state

      // load User
    case Actions.LOAD_USER_REQUEST: return state
    case Actions.LOAD_USER_SUCCESS: return Object.assign({}, state, {
      user: action.payload
    })
    case Actions.LOAD_USER_FAILURE: return state

      // create User Image
    case Actions.CREATE_USER_IMAGE_REQUEST: return state
    case Actions.CREATE_USER_IMAGE_SUCCESS: return Object.assign({}, state, {
      me: Object.assign({}, state.me, {
        image: action.payload.image
      })
    })
    case Actions.CREATE_USER_IMAGE_FAILURE: return state

      // User Header Image
    case Actions.CREATE_USER_HEADER_IMAGE_REQUEST: return state
    case Actions.CREATE_USER_HEADER_IMAGE_SUCCESS: return Object.assign({}, state, {
      me: Object.assign({}, state.me, {
        header_image: action.payload.image
      })
    })
    case Actions.CREATE_USER_HEADER_IMAGE_FAILURE: return state

      // Works created by a User
    case Actions.LOAD_WORK_LIST_CREATED_BY_USER_REQUEST: return state
    case Actions.LOAD_WORK_LIST_CREATED_BY_USER_SUCCESS: return Object.assign({}, state, {
      userWorks: action.payload.creations
    })
    case Actions.LOAD_WORK_LIST_CREATED_BY_USER_FAILURE: return state

      // FavoriteWorks
    case Actions.LOAD_FAVORITE_WORKS_REQUEST: return state
    case Actions.LOAD_FAVORITE_WORKS_SUCCESS: return Object.assign({}, state, {
      favoriteWorks: action.payload.goods
    })
    case Actions.LOAD_FAVORITE_WORKS_FAILURE: return state
      
      //----------------------------------------
      // Work
      //----------------------------------------
    case Actions.LOAD_WORK_REQUEST: return state
    case Actions.LOAD_WORK_SUCCESS: return Object.assign({}, state, {
      work: action.payload
    })
    case Actions.LOAD_WORK_FAILURE: return state

    default:
      return state
  }
}
