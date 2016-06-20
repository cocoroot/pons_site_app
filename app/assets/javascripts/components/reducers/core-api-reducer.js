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
  userDetail: {},
  me: {}
}

export default function coreApi(state = INITIAL_STATE, action) {
  switch (action.type) {
      // Top Banner
    case Actions.API_LOAD_TOP_BANNERS_REQUEST: return state
    case Actions.API_LOAD_TOP_BANNERS_SUCCESS: return Object.assign({}, state, TOP_BANNERS_RESPONSE)
    case Actions.API_LOAD_TOP_BANNERS_FAILURE: return state

      // Pickup Work List
    case Actions.API_LOAD_PICKUP_WORK_LIST_REQUEST: return state
    case Actions.API_LOAD_PICKUP_WORK_LIST_SUCCESS: return Object.assign({}, state, PICKUP_WORK_LIST_RESPONSE)
    case Actions.API_LOAD_PICKUP_WORK_LIST_FAILURE: return state

      // Pickup Tags
    case Actions.API_LOAD_PICKUP_TAGS_REQUEST: return state
    case Actions.API_LOAD_PICKUP_TAGS_SUCCESS: return Object.assign({}, state, PICKUP_TAGS_RESPONSE)
    case Actions.API_LOAD_PICKUP_TAGS_FAILURE: return state

      // Pickup New Work List
    case Actions.API_LOAD_PICKUP_NEW_WORK_LIST_REQUEST: return state
    case Actions.API_LOAD_PICKUP_NEW_WORK_LIST_SUCCESS: return Object.assign({}, state, PICKUP_NEW_WORK_LIST_RESPONSE)
    case Actions.API_LOAD_PICKUP_NEW_WORK_LIST_FAILURE: return state

      //----------------------------------------
      // User
      //----------------------------------------

      // load Me
    case Actions.API_LOAD_ME_REQUEST: return state
    case Actions.API_LOAD_ME_SUCCESS: return Object.assign({}, state, {
      me: action.payload
    })
    case Actions.API_LOAD_ME_FAILURE: return state

      // update Me
    case Actions.API_UPDATE_ME_REQUEST: return state
    case Actions.API_UPDATE_ME_SUCCESS: return Object.assign({}, state, {
      me: action.payload
    })
    case Actions.API_UPDATE_ME_FAILURE: return state

      // load User
    case Actions.API_LOAD_USER_REQUEST: return state
    case Actions.API_LOAD_USER_SUCCESS: return Object.assign({}, state, {
      user: action.payload
    })
    case Actions.API_LOAD_USER_FAILURE: return state

      // create User Image
    case Actions.API_CREATE_USER_IMAGE_REQUEST: return state
    case Actions.API_CREATE_USER_IMAGE_SUCCESS: return Object.assign({}, state, {
      me: Object.assign({}, state.me, {
        image: action.payload.image
      })
    })
    case Actions.API_CREATE_USER_IMAGE_FAILURE: return state

      // create User Header Image
    case Actions.API_CREATE_USER_HEADER_IMAGE_REQUEST: return state
    case Actions.API_CREATE_USER_HEADER_IMAGE_SUCCESS: return Object.assign({}, state, {
      me: Object.assign({}, state.me, {
        header_image: action.payload.image
      })
    })
    case Actions.API_CREATE_USER_HEADER_IMAGE_FAILURE: return state

      // load Works created by a User
    case Actions.API_LOAD_WORK_LIST_CREATED_BY_USER_REQUEST: return state
    case Actions.API_LOAD_WORK_LIST_CREATED_BY_USER_SUCCESS: return Object.assign({}, state, {
      userWorks: action.payload.creations
    })
    case Actions.API_LOAD_WORK_LIST_CREATED_BY_USER_FAILURE: return state

      // load Favorite Works
    case Actions.API_LOAD_FAVORITE_WORKS_REQUEST: return state
    case Actions.API_LOAD_FAVORITE_WORKS_SUCCESS: return Object.assign({}, state, {
      favoriteWorks: action.payload.goods
    })
    case Actions.API_LOAD_FAVORITE_WORKS_FAILURE: return state

      //----------------------------------------
      // Work
      //----------------------------------------

      // create Work
    case Actions.API_CREATE_WORK_REQUEST: return state
    case Actions.API_CREATE_WORK_SUCCESS: return Object.assign({}, state, {
      createdWork: action.payload
    })
    case Actions.API_CREATE_WORK_FAILURE: return state

      // update Work
    case Actions.API_UPDATE_WORK_REQUEST: return state
    case Actions.API_UPDATE_WORK_SUCCESS: return Object.assign({}, state, {
      updatedWork: action.payload
    })
    case Actions.API_UPDATE_WORK_FAILURE: return state

      // load Work
    case Actions.API_LOAD_WORK_REQUEST: return state
    case Actions.API_LOAD_WORK_SUCCESS: return Object.assign({}, state, {
      work: action.payload
    })
    case Actions.API_LOAD_WORK_FAILURE: return state

      //----------------------------------------
      // Work Image
      //----------------------------------------

      // create Work Image
    case Actions.API_CREATE_WORK_IMAGE_REQUEST: return state
    case Actions.API_CREATE_WORK_IMAGE_SUCCESS: return Object.assign({}, state, {
      work: Object.assign({}, state, {
        creation_images: action.payload.creation_images
      })
    })
    case Actions.API_CREATE_WORK_IMAGE_FAILURE: return state

      // update Work Image
    case Actions.API_UPDATE_WORK_IMAGE_REQUEST: return state
    case Actions.API_UPDATE_WORK_IMAGE_SUCCESS: return Object.assign({}, state, {
      work: Object.assign({}, state, {
        creation_images: action.payload.creation_images
      })
    })
    case Actions.API_UPDATE_WORK_IMAGE_FAILURE: return state

      // delete Work Image
    case Actions.API_DELETE_WORK_IMAGE_REQUEST: return state
    case Actions.API_DELETE_WORK_IMAGE_SUCCESS: return Object.assign({}, state, {
      work: Object.assign({}, state, {
        creation_images: action.payload.creation_images
      })
    })
    case Actions.API_DELETE_WORK_IMAGE_FAILURE: return state

      //----------------------------------------
      // Work Piece
      //----------------------------------------

      // create Work Piece
    case Actions.API_CREATE_WORK_PIECE_REQUEST: return state
    case Actions.API_CREATE_WORK_PIECE_SUCCESS: return Object.assign({}, state, {
      work: Object.assign({}, state, {
        creation_pieces: action.payload.creation_pieces
      })
    })
    case Actions.API_CREATE_WORK_PIECE_FAILURE: return state

      // update Work Piece
    case Actions.API_UPDATE_WORK_PIECE_REQUEST: return state
    case Actions.API_UPDATE_WORK_PIECE_SUCCESS: return Object.assign({}, state, {
      work: Object.assign({}, state, {
        creation_pieces: action.payload.creation_pieces
      })
    })
    case Actions.API_UPDATE_WORK_PIECE_FAILURE: return state

      // delete Work Piece
    case Actions.API_DELETE_WORK_PIECE_REQUEST: return state
    case Actions.API_DELETE_WORK_PIECE_SUCCESS: return Object.assign({}, state, {
      work: Object.assign({}, state, {
        creation_pieces: action.payload.creation_pieces
      })
    })
    case Actions.API_DELETE_WORK_PIECE_FAILURE: return state

      //----------------------------------------
      // Work Tag
      //----------------------------------------

      // create Work Tag
    case Actions.API_CREATE_WORK_TAG_REQUEST: return state
    case Actions.API_CREATE_WORK_TAG_SUCCESS: return Object.assign({}, state, {
      work: Object.assign({}, state.work, {
        creation_tags: action.payload.creation_tags
      })
    })
    case Actions.API_CREATE_WORK_TAG_FAILURE: return state

      // delete Work Tag
    case Actions.API_DELETE_WORK_TAG_REQUEST: return state
    case Actions.API_DELETE_WORK_TAG_SUCCESS: return Object.assign({}, state, {
      work: Object.assign({}, state.work, {
        creation_tags: action.payload.creation_tags
      })
    })
    case Actions.API_DELETE_WORK_TAG_FAILURE: return state

      //----------------------------------------
      // Work Comment
      //----------------------------------------

      // create Work Comment
    case Actions.API_CREATE_WORK_COMMENT_REQUEST: return state
    case Actions.API_CREATE_WORK_COMMENT_SUCCESS: return Object.assign({}, state, {
      work: Object.assign({}, state.work, {
        creation_comments: action.payload.creation_comments
      })
    })
    case Actions.API_CREATE_WORK_COMMENT_FAILURE: return state

      //----------------------------------------
      // Good
      //----------------------------------------

      // create Good
    case Actions.API_CREATE_GOOD_REQUEST: return state
    case Actions.API_CREATE_GOOD_SUCCESS: return Object.assign({}, state, {
      work: Object.assign({}, state.work, {
        goods_count: action.payload.goods_count,
        good: action.payload.good
      })
    })
    case Actions.API_CREATE_GOOD_FAILURE: return state

      // delete Good
    case Actions.API_DELETE_GOOD_REQUEST: return state
    case Actions.API_DELETE_GOOD_SUCCESS: return Object.assign({}, state, {
      work: Object.assign({}, state.work, {
        goods_count: action.payload.goods_count,
        good: action.payload.good
      })
    })
    case Actions.API_DELETE_GOOD_FAILURE: return state


    default:
      return state
  }
}
