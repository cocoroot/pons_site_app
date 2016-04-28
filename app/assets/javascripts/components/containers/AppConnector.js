import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import App from '../components/App'
import * as Actions from '../actions'

function mapStateToProps(state) {
  console.log("AppConnector mapStatetoprops(state) state=%o, state.creations=%o", state, state.creations)
  return {
	//note: state.note
    creations: state.creations
  }
}

function mapDispatchToProps(dispatch) {
  //console.log("AppConnector mapDispatchtoprops(dispatch) Actions=%o", Actions)
  return bindActionCreators(Actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
