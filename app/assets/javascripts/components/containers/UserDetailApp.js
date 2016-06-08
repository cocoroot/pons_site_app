import React, { Component, PropTypes } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import UserDetailProfileBox from '../components/UserDetailProfileBox'
import UserDetailCreationBox from '../components/UserDetailCreationBox'
import * as Actions from '../actions/user-detail' // 自分の action だけ import する

class UserDetailApp extends Component {
  render() {
    const { profile, creations } = this.props.userDetail
    const { changeEditMode } = this.props.userDetail
    return (
      <div>
        <Header user={profile.user} />
        <UserDetailProfileBox profile={profile} changeEditMode={changeEditMode}  />
        <UserDetailCreationBox creations={creations} />
        <Footer />
      </div>
    )
  }
}

UserDetailApp.propTypes = {
}

//
// Connector
//
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

function mapStateToProps(state) {
  return {
    userDetail: state.userDetail
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(UserDetailApp)
