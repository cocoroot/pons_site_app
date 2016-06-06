import { combineReducers } from 'redux'
//import note from './note'
import creations from './creations'
import user from './user'

//console.log("note: %o", note)

const rootReducer = combineReducers({
//    note
  creations,
  user
})

export default rootReducer
