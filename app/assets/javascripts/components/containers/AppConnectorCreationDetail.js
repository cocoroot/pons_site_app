import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import AppCreationDetail from '../components/AppCreationDetail'
import * as Actions from '../actions'

function mapStateToProps(state) {
  return {
    creation: state.creation
  }
}

function mapDispatchToProps(dispatch) {
  //console.log("AppConnector mapDispatchtoprops(dispatch) Actions=%o", Actions)
  return bindActionCreators(Actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(AppCreationDetail)
