import { combineReducers } from 'redux'
//import note from './note'
import creations from './top'
import creation from './creation'

import { routerReducer } from 'react-router-redux'

//console.log("note: %o", note)

const rootReducer = combineReducers({
  //    note
  creations,
  creation,
  routing: routerReducer
})

export default rootReducer
