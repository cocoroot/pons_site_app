import * as ApiActions from '../actions/core-api-action' // API を使う場合 API のアクションをimport
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import TestCreation from '../components/test-creation-component'

function mapStateToProps(state) {
  return {
    creation: state.coreApi.work
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ApiActions, dispatch)
}

let TestCreationContainer = connect(mapStateToProps, mapDispatchToProps)(TestCreation)

TestCreationContainer.onEnter = function (dispatch, nextState, replace) {
  console.log("TestCreationContainer dispatch=%o, nextState=%o, replace=%o", dispatch, nextState, replace)
  if (nextState.params) {
    dispatch(ApiActions.loadWork(nextState.params.creation_id || 0))
  }
}

export default TestCreationContainer
