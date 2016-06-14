import * as ApiActions from '../actions/core-api-action' // API を使う場合 API のアクションをimport
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import TestMe from '../components/test-me-component'

function mapStateToProps(state) {
  return {
    me: state.coreApi.me
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ApiActions, dispatch)
}

let TestMeContainer = connect(mapStateToProps, mapDispatchToProps)(TestMe)

TestMeContainer.onEnter = function (dispatch, nextState, replace) {
  console.log("TestMeContainer dispatch=%o, nextState=%o, replace=%o", dispatch, nextState, replace)
  if (nextState.params) {
    dispatch(ApiActions.loadMe(nextState.params.me_id || 0))
  }
}

export default TestMeContainer
