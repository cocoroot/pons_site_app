import { combineReducers } from 'redux'
//import note from './note'
import top from './top'
import creation from './creation'

import { routerReducer } from 'react-router-redux'

//console.log("note: %o", note)

const rootReducer = combineReducers({
  //    note
  top,
  creation,
  routing: routerReducer
})

export default rootReducer
