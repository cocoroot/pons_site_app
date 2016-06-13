import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as TopActions from '../actions/top-action' // 自分の action だけ import する
//import * as ApiActions from '../actions/core-api-action' // API を使う場合 API のアクションをimport

const Actions = { ...TopActions/*, ...ApiActions */ }

import Top from '../components/top-component'

function mapStateToProps(state) {
  return {
    // xxx: state.coreApi.xxx
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch)
}

let TopContainer = connect(mapStateToProps, mapDispatchToProps)(Top)

TopContainer.onEnter = function (dispatch, nextState, replace) {
  if (nextState.params) {
    dispatch(Actions.loadTopBanners())
    dispatch(Actions.loadPickupWorkList())
    dispatch(Actions.loadPickupTags())
    dispatch(Actions.loadPickupNewWorkLiss())
  }
}

export default TopContainer
