import { combineReducers } from 'redux'
//import note from './note'
// import user_detail from './user_detail'
import UserDetail_profile from './UserDetail_profile'
import UserDetail_creations from './UserDetail_creations'

//console.log("note: %o", note)

const rootReducer = combineReducers({
  UserDetail_profile,
  UserDetail_creations
})

export default rootReducer
