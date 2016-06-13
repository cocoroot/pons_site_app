import * as Actions from '../actions/core-api-action'

export default function coreApi(state = [], action) {
  switch (action.type) {
    case Actions.LOAD_TOP_BANNERS_REQUEST:
      return state
    case Actions.LOAD_TOP_BANNERS_SUCCESS:
      return Object.assign({}, state, {
        banners: [
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
      })
    case Actions.LOAD_TOP_BANNERS_FAILURE:
      return state

    case Actions.LOAD_PICKUP_WORK_LIST_REQUEST:
      return state
    case Actions.LOAD_PICKUP_WORK_LIST_SUCCESS:
      return Object.assign({}, state, {
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
      })
    case Actions.LOAD_PICKUP_WORK_LIST_FAILURE:
      return state

    case Actions.LOAD_PICKUP_TAGS_REQUEST:
      return state
    case Actions.LOAD_PICKUP_TAGS_SUCCESS:
      return Object.assign({}, state, {
        tags: [
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
      })
    case Actions.LOAD_PICKUP_TAGS_FAILURE:
      return state

    case Actions.LOAD_PICKUP_NEW_WORK_LIST_REQUEST:
      return state
    case Actions.LOAD_PICKUP_NEW_WORK_LIST_SUCCESS:
      return Object.assign({}, state, {
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
      })
    case Actions.LOAD_PICKUP_NEW_WORK_LIST_FAILURE:
      return state
      
    case Actions.LOAD_CREATION_REQUEST:
      return state
    case Actions.LOAD_CREATION_SUCCESS:
      return Object.assign({}, state, {
        creation: action.payload
      })
    case Actions.LOAD_CREATION_FAILURE:
      return state
    case Actions.REQUIRE_LOGIN:
      return Object.assign({}, state, {
        error: {
          type: 'AUTHENTICATION_ERROR',
          message: 'need login'
        }
      })
    default:
      return state
  }
}
