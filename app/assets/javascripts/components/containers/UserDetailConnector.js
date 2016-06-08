import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import UserDetailApp from '../components/UserDetailApp'
import * as Actions from '../actions'

function mapStateToProps(state) {
  return {
	//note: state.note
    // user_detail: state.UserDetail
    profile: state.UserDetail_profile,
    creations: state.UserDetail_creations
  }
}

function mapDispatchToProps(dispatch) {
  console.log("AppConnector mapDispatchtoprops(dispatch) Actions=%o", Actions)
  return bindActionCreators(Actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(UserDetailApp)
