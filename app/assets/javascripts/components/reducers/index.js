import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import userDetail from './user-detail'

const rootReducer = combineReducers({
  userDetail,
  routing: routerReducer
})

export default rootReducer
