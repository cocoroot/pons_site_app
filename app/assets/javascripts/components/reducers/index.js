import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import topReducer from './top-reducer'
import userDetailReducer from './user-detail-reducer'
import coreApiReducer from './core-api-reducer'
import loginReducer from './login-reducer'

const rootReducer = combineReducers({
  userDetail: userDetailReducer,
  top: topReducer,
  login: loginReducer,
  coreApi: coreApiReducer,
  routing: routerReducer
})

export default rootReducer
