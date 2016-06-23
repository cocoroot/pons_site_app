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
      user: {
        id: 300,
        name: "Penguin",
        url: "/user/300/",
        image: {
          url: "http://pipsum.com/100x100.jpg",
          thumb: { url: "http://pipsum.com/100x100.jpg" }
        }
      },
      viewCount: 123,
      likes_count: 45,
      work_comments_count: 6
    },
    {
      id: 2,
      title: "mofumofu",
      work_images: [
        {
          image: {
            url: "http://pipsum.com/100x100.jpg",
            thumb: { url: "http://pipsum.com/100x100.jpg" }
          }
        }
      ],
      user: {
        id: 301,
        name: "Cat",
        url: "/user/301/",
        image: {
          url: "http://pipsum.com/100x100.jpg"
        }
      }
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
      user: {
        id: 300,
        name: "Penguin",
        url: "/user/300/",
        image: {
          url: "http://pipsum.com/100x100.jpg",
          thumb: { url: "http://pipsum.com/100x100.jpg" }
        }
      },
      viewCount: 123,
      likes_count: 45,
      work_comments_count: 6
    },
    {
      id: 2,
      title: "mofumofu",
      work_images: [
        {
          image: {
            url: "http://pipsum.com/100x100.jpg",
            thumb: { url: "http://pipsum.com/100x100.jpg" }
          }
        }
      ],
      user: {
        id: 301,
        name: "Cat",
        url: "/user/301/",
        image: {
          url: "http://pipsum.com/100x100.jpg"
        }
      },
      viewCount: 123,
      likes_count: 45,
      work_comments_count: 6
    }
  ]
}

const INITIAL_STATE = {
  // topBanners: [],
  // pickupWorks: [],
  // pickupTags: [],
  // pickupNewWorks: [],
  // user: {},
  // userWorks: [],
  // favoriteWorkList: [],
  // work: {},
  // works: [],
  // userDetail: {},
  // me: {}
}

export const INITIAL_STATE_FOR_USER = {
  id: 0,
  image: {
    url: null,
    thumb: {
      url: null
    }
  },
  header_image: null,
  nickname: '',
  biography: '',
  tos_accepted: false,
  user_status: null,
  owner: false
}

export const INITIAL_STATE_FOR_WORK = {
  id: 0,
  user: INITIAL_STATE_FOR_USER,
  title: '',
  description: '',
  work_status: null,
  work_images: [],
  work_pieces: [],
  work_tags: [],
  work_comments_count: 0,
  work_comments: [],
  owner: false,
  likes_count: 0,
  like: false
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
    case Actions.LOAD_FAVORITE_WORK_LIST_REQUEST: return state
    case Actions.LOAD_FAVORITE_WORK_LIST_SUCCESS: return Object.assign({}, state, {
      favoriteWorkList: action.payload.likes
    })
    case Actions.LOAD_FAVORITE_WORK_LIST_FAILURE: return state

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
      // Like
      //----------------------------------------

      // create Like
    case Actions.CREATE_LIKE_REQUEST: return state
    case Actions.CREATE_LIKE_SUCCESS: return Object.assign({}, state, {
      work: Object.assign({}, state.work, {
        likes_count: action.payload.likes_count,
        like: action.payload.like
      })
    })

    case Actions.CREATE_LIKE_FAILURE: return state

      // delete Like
    case Actions.DELETE_LIKE_REQUEST: return state
    case Actions.DELETE_LIKE_SUCCESS: return Object.assign({}, state, {
      work: Object.assign({}, state.work, {
        likes_count: action.payload.likes_count,
        like: action.payload.like
      })
    })
    case Actions.DELETE_LIKE_FAILURE: return state

    default:
      return state
  }
}
