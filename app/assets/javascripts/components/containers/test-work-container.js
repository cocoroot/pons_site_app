import * as ApiActions from '../actions/core-api-action' // API を使う場合 API のアクションをimport
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import TestWork from '../components/test-work-component'

function mapStateToProps(state) {
  return {
    work: state.coreApi.work
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ApiActions, dispatch)
}

let TestWorkContainer = connect(mapStateToProps, mapDispatchToProps)(TestWork)

TestWorkContainer.onEnter = function (dispatch, nextState, replace) {
  console.log("TestWorkContainer dispatch=%o, nextState=%o, replace=%o", dispatch, nextState, replace)
  if (nextState.params) {
    dispatch(ApiActions.loadWork(nextState.params.work_id || 0))
  }
}

export default TestWorkContainer
