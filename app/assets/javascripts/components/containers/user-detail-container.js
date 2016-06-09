import * as Actions from '../actions/user-detail-action' // 自分の action だけ impor
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import UserDetail from '../components/user-detail-comp'

function mapStateToProps(state) {
  return {
    userDetail: state.userDetail
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(UserDetail)
