import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import userDetail from './user-detail'
import coreApi from './core-api'

const rootReducer = combineReducers({
  userDetail,
  coreApi,
  routing: routerReducer
})

export default rootReducer
