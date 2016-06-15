import React, { Component, PropTypes } from 'react'
import Header from './common-header-component'
import Footer from './common-footer-component'
import UserDetailProfileBox from './user-detail-profile-box-component'
import UserDetailWorkBox from './user-detail-work-box-component'

export default class UserDetail extends Component {

  componentDidMount() {
    console.log("user-detail componentDidMount")
  }

  render() {
    // const { userDetail } = this.props
    // const { changeEditMode } = this.props
    const { profile, editMode } = this.props
    const { originalWorks, favoriteWorks } = this.props
    const { changeEditMode } = this.props
    
    return (
      <div>
        <UserDetailProfileBox profile={profile} editMode={editMode} changeEditMode={changeEditMode}  />
        <UserDetailWorkBox originalWorks={originalWorks} favoriteWorks={favoriteWorks} />
      </div>
    )
  }
}

UserDetail.propTypes = {
}
