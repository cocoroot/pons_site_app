import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import topReducer from './top-reducer'
import userDetailReducer from './user-detail-reducer'
import coreApiReducer from './core-api-reducer'

const rootReducer = combineReducers({
  useDetail: userDetailReducer,
  top: topReducer,
  coreApi: coreApiReducer,
  routing: routerReducer
})

export default rootReducer
