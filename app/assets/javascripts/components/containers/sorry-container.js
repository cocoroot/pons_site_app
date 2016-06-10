import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
// import * as SorryActions from '../actions/login-action' // 自分の action だけ import する
// import * as ApiActions from '../actions/core-api-action'

// const Actions = { ...LoginActions, ...ApiActions }

import Sorry from '../components/sorry-component'

function mapStateToProps(state) {
  return {
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Sorry)
