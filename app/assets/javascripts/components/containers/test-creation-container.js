import * as Actions from '../actions/core-api-action' // 自分の action だけ import
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import TestCreation from '../components/test-creation-component'

function mapStateToProps(state) {
  return {
    creation: state.coreApi.creation
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(TestCreation)
