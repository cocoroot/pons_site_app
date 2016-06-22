import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as TopActions from '../actions/top-action' // 自分の action だけ import する
import * as ApiActions from '../actions/core-api-action' // API を使う場合 API のアクションをimport

const Actions = { ...TopActions, ...ApiActions }

import Top from '../components/top-component'

function mapStateToProps(state) {
  console.log("TopContainer mapStateToProps state=%o", state)
  return {
    banners: state.coreApi.topBanners,
    pickupWorks: state.top.pickupWorks,
    tags: state.coreApi.pickupTags,
    newWorks: state.top.pickupNewWorks
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch)
}

let TopContainer = connect(mapStateToProps, mapDispatchToProps)(Top)

TopContainer.onEnter = function (dispatch, nextState, replace) {
  console.log("TopContainer onEnter")
  dispatch(ApiActions.loadTopBanners())
  //dispatch(ApiActions.loadPickupWorkList())
  dispatch(ApiActions.loadNewWorkList())
  dispatch(ApiActions.loadPickuppedTags())
  //dispatch(ApiActions.loadPickuppedNewWorkList())
}

export default TopContainer
