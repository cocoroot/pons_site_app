import React, { Component, PropTypes } from 'react'
import Header from './common-header-component'
import Footer from './common-footer-component'
import UserDetailProfileBox from './user-detail-profile-box-component'
import UserDetailCreationBox from './user-detail-creation-box-component'

export default class UserDetail extends Component {
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

UserDetail.propTypes = {
}

