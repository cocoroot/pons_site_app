import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as HeaderActions from '../actions/header-action'
import * as ApiActions from '../actions/core-api-action' // API を使う場合 API のアクションをimport

const Actions = { ...HeaderActions, ...ApiActions }

import Header from '../components/common-header-component'

function mapStateToProps(state) {
  return {
    ...state.header
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch)
}

let HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(Header)

// HeaderContainer.onEnter = function (dispatch, nextState, replace) {
// }

export default HeaderContainer
