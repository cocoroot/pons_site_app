import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as LoginActions from '../actions/login-action' // 自分の action だけ import する
import * as ApiActions from '../actions/core-api-action'

const Actions = { ...LoginActions, ...ApiActions }

import Login from '../components/login-component'

function mapStateToProps(state) {
  return {
    login: state.login
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
