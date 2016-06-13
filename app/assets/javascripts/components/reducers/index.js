import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import userDetail from './user-detail-reducer'
import coreApi from './core-api-reducer'

const rootReducer = combineReducers({
  userDetail,
  coreApi,
  routing: routerReducer
})

export default rootReducer
