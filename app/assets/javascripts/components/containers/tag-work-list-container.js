import * as TagWorkListActions from '../actions/tag-work-list-action' // 自分の action だけ import する
//import * as ApiActions from '../actions/core-api-action' // API を使う場合 API のアクションをimport

const Actions = { ...TagWorkListActions/*, ...ApiActions */ }

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import TagWorkList from '../components/tag-work-list-component'

function mapStateToProps(state) {
  return {
    // xxx: state.coreApi.xxx
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch)
}

let TagWorkListContainer = connect(mapStateToProps, mapDispatchToProps)(TagWorkList)

TagWorkListContainer.onEnter = function (dispatch, nextState, replace) {
  if (nextState.params) {
    // dispatch(Actions.xxxXxx(nextState.params.xxx))
  }
}

export default TagWorkListContainer
