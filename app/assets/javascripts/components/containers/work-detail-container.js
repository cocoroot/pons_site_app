import * as Actions from '../actions/work-detail-action' // 自分の action だけ impor
import * as ApiActions from '../actions/core-api-action' // API を使う場合 API のアクションをimport

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import WorkDetail from '../components/work-detail-component'

function mapStateToProps(state) {
  return {
    ...state.workDetail
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ ...Actions, ...ApiActions }, dispatch)
}

let WorkDetailContainer = connect(mapStateToProps, mapDispatchToProps)(WorkDetail)

WorkDetailContainer.onEnter = function (dispatch, nextState, replace) {
  console.log("WorkDetailContainer dispatch=%o, nextState=%o, replace=%o", dispatch, nextState, replace)
  dispatch(Actions.reset())
  if (nextState.params) {
    const work_id = nextState.params.work_id || 0
    dispatch(ApiActions.loadWork(work_id))
  }
}

export default WorkDetailContainer
