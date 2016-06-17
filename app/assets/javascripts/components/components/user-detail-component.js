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
    console.log("UserDetail render props=%o", this.props)

    return (
      <div>
        <UserDetailProfileBox {...this.props} />
        <UserDetailWorkBox {...this.props} />
      </div>
    )
  }
}

UserDetail.propTypes = {
}
