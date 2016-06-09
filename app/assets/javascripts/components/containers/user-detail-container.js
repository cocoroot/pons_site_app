import React, { Component, PropTypes } from 'react'
import Header from '../components/common-header-comp'
import Footer from '../components/common-footer-comp'
import UserDetailProfileBox from '../components/user-detail-profile-box-comp'
import UserDetailCreationBox from '../components/user-detail-creation-box-comp'
import * as Actions from '../actions/user-detail-action' // 自分の action だけ import する

class UserDetailContainer extends Component {
  render() {
    const { profile, creations } = this.props.userDetail
    const { changeEditMode } = this.props.userDetail
    return (
      <div>
        <Header  />
        <UserDetailProfileBox profile={profile} changeEditMode={changeEditMode}  />
        <UserDetailCreationBox creations={creations} />
        <Footer />
      </div>
    )
  }
}

UserDetailContainer.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(UserDetailContainer)
