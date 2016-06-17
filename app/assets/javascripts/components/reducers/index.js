import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import topReducer from './top-reducer'
import userDetailReducer from './user-detail-reducer'
import workDetailReducer from './work-detail-reducer'
import coreApiReducer from './core-api-reducer'
import loginReducer from './login-reducer'
import headerReducer from './header-reducer'

const rootReducer = combineReducers({
  userDetail: userDetailReducer,
  top: topReducer,
  workDetail: workDetailReducer,
  login: loginReducer,
  header: headerReducer,
  coreApi: coreApiReducer,
  routing: routerReducer
})

export default rootReducer
