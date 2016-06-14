import * as ApiActions from '../actions/core-api-action' // API を使う場合 API のアクションをimport
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import TestUser from '../components/test-user-component'

function mapStateToProps(state) {
  return {
    user: state.coreApi.user
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ApiActions, dispatch)
}

let TestUserContainer = connect(mapStateToProps, mapDispatchToProps)(TestUser)

TestUserContainer.onEnter = function (dispatch, nextState, replace) {
  console.log("TestUserContainer dispatch=%o, nextState=%o, replace=%o", dispatch, nextState, replace)
  if (nextState.params) {
    dispatch(ApiActions.loadUser(nextState.params.user_id || 0))
  }
}

export default TestUserContainer
