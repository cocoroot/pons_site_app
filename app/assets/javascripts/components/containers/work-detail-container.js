import * as Actions from '../actions/work-detail-action' // 自分の action だけ impor
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import WorkDetail from '../components/work-detail-component'

function mapStateToProps(state) {
  return {
    workDetail: state.workDetail
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(WorkDetail)
