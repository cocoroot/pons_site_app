import * as Actions from '../actions/tag-work-list-action' // 自分の action だけ import する
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import TagWorkList from '../components/tag-work-list-component'

function mapStateToProps(state) {
  return {
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(TagWorkList)
