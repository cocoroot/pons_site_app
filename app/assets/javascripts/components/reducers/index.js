import { combineReducers } from 'redux'
//import note from './note'
import creations from './creations'
import creation from './creation'

//console.log("note: %o", note)

const rootReducer = combineReducers({
  //    note
  creations,
  creation
})

export default rootReducer
