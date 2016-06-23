import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as RegisterActions from '../actions/register-action' // 自分の action だけ import する
import * as ApiActions from '../actions/core-api-action' // API を使う場合 API のアクションをimport
import * as DbaasRegistApi from '../actions/regist-api-action'

const Actions = { ...RegisterActions, ...ApiActions, ...DbaasRegistApi }

import Register from '../components/register-component'

function mapStateToProps(state) {
  return{
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch)
}

let RegisterContainer = connect(mapStateToProps, mapDispatchToProps)(Register)

RegisterContainer.onEnter = function (dispatch, nextState, replace) {
}

export default RegisterContainer
