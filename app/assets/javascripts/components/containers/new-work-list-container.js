import * as NewWorkListActions from '../actions/new-work-list-action'
import * as ApiActions from '../actions/core-api-action'

const Actions = { ...NewWorkListActions, ...ApiActions }

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import NewWorkList from '../components/new-work-list-component'

function mapStateToProps(state) {
  return {
    ...state.newWorkList
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch)
}

let NewWorkListContainer = connect(mapStateToProps, mapDispatchToProps)(NewWorkList)

NewWorkListContainer.onEnter = function (dispatch, nextState, replace) {
  if (nextState.params) {
    dispatch(Actions.loadNewWorkList())
  }
}

export default NewWorkListContainer
