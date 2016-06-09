import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as Actions from '../actions/top-action' // 自分の action だけ import する

import Top from '../components/top-component'

function mapStateToProps(state) {
  return {
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Top)
