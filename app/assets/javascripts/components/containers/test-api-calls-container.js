import * as ApiActions from '../actions/core-api-action' // API を使う場合 API のアクションをimport
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import TestApiCalls from '../components/test-api-calls-component'

function mapStateToProps(state) {
  return {
    createdWork: state.coreApi.createdWork
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ApiActions, dispatch)
}

let TestApiCallsContainer = connect(mapStateToProps, mapDispatchToProps)(TestApiCalls)

TestApiCallsContainer.onEnter = function (dispatch, nextState, replace) {
  console.log("TestApiCallsContainer dispatch=%o, nextState=%o, replace=%o", dispatch, nextState, replace)

}

export default TestApiCallsContainer
