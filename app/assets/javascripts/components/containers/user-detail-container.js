import * as Actions from '../actions/user-detail-action' // 自分の action だけ impor
import * as ApiActions from '../actions/core-api-action' // API を使う場合 API のアクションをimport

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import UserDetail from '../components/user-detail-component'

function mapStateToProps(state) {
  return {
    profile: state.coreApi.user,
    editMode: state.userDetail.editMode,
    originalWorks: state.coreApi.userWorks,
    favoriteWorks: state.coreApi.favoriteWorks
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ ...Actions, ...ApiActions }, dispatch)
}

let UserDetailContainer = connect(mapStateToProps, mapDispatchToProps)(UserDetail)

UserDetailContainer.onEnter = function (dispatch, nextState, replace) {
  console.log("UserDetailContainer dispatch=%o, nextState=%o, replace=%o", dispatch, nextState, replace)
  if (nextState.params) {
    const user_id = nextState.params.user_id || 0
    dispatch(ApiActions.loadUser(user_id))
    dispatch(ApiActions.loadWorkListCreatedByUser(user_id))
    dispatch(ApiActions.loadFavoriteWorks(user_id))
  }
}

export default UserDetailContainer
