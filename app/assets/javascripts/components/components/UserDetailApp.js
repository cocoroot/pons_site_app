import React, { Component, PropTypes } from 'react'
import Header from './Header'
import Footer from './Footer'
import UserDetailProfileBox from './UserDetailProfileBox'
import UserDetailCreationBox from './UserDetailCreationBox'

class UserDetailApp extends Component {
  render() {
    const { profile, creations } = this.props
    const { changeEditMode } = this.props
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

export default UserDetailApp
