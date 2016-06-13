import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import topReducer from './top-reducer'

const rootReducer = combineReducers({
  top: topReducer,
  routing: routerReducer
})

export default rootReducer
