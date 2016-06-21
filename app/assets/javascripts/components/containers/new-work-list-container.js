import * as NewWorkListActions from '../actions/new-work-list-action' // 自分の action だけ import する
//import * as ApiActions from '../actions/core-api-action' // API を使う場合 API のアクションをimport

const Actions = { ...NewWorkListActions/*, ...ApiActions */ }

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import NewWorkList from '../components/new-work-list-component'

function mapStateToProps(state) {
  return {
    // xxx: state.coreApi.xxx
    newWorkList: state.newWorkList
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch)
}

let NewWorkListContainer = connect(mapStateToProps, mapDispatchToProps)(NewWorkList)

NewWorkListContainer.onEnter = function (dispatch, nextState, replace) {
  if (nextState.params) {
    // dispatch(Actions.xxxXxx(nextState.params.xxx))
  }
}

export default NewWorkListContainer
