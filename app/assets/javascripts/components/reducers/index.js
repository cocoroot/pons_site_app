import { combineReducers } from 'redux'
//import { routerReducer } from 'react-router-redux'

import topReducer from './top-reducer'
import userDetailReducer from './user-detail-reducer'
import workDetailReducer from './work-detail-reducer'
import coreApiReducer from './core-api-reducer'
import loginReducer from './login-reducer'
import headerReducer from './header-reducer'
import newWorkListReducer from './new-work-list-reducer'

import routing from './routing'

const rootReducer = combineReducers({
  userDetail: userDetailReducer,
  top: topReducer,
  workDetail: workDetailReducer,
  newWorkList: newWorkListReducer,
  login: loginReducer,
  header: headerReducer,
  coreApi: coreApiReducer,
  routing: routing
})

export default rootReducer
