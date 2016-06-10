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

let TestCreationContainer =  connect(mapStateToProps, mapDispatchToProps)(TestCreation)

TestCreationContainer.onEnter = function (dispatch, nextState, replace) {
  console.log("TestCreationContainer dispatch=%o, nextState=%o, replace=%o", dispatch, nextState, replace)
  if (nextState.params) {
    dispatch(Actions.loadCreation(nextState.params.creation_id || 0))
  }
}

export default TestCreationContainer
