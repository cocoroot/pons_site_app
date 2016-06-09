import * as Actions from '../actions/new-work-list-action' // 自分の action だけ import する

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import NewWorkList from '../components/new-work-list-component'

function mapStateToProps(state) {
  return {
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(NewWorkList)
