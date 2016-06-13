import React, { Component, PropTypes } from 'react'
import Header from './common-header-component'
import Footer from './common-footer-component'
import UserDetailProfileBox from './user-detail-profile-box-component'
import UserDetailCreationBox from './user-detail-creation-box-component'
import * as Actions from '../actions/user-detail-action'

export default class UserDetail extends Component {

  componentDidMount() {
    console.log("user-detail componentDidMount")
  }

  render() {
    const { userDetail } = this.props
    const { changeEditMode } = this.props
    return (
      <div>
        <Header  />
        <UserDetailProfileBox userDetail={userDetail} changeEditMode={changeEditMode}  />
        <UserDetailCreationBox userDetail={userDetail} />
        <Footer />
      </div>
    )
  }
}

UserDetail.propTypes = {
}
