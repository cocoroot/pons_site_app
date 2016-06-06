import React, { Component, PropTypes } from 'react'
import Header from './Header'
// import CreationList from './CreationList'

class UserDetailApp extends Component {
  render() {
    const { user } = this.props
    return (
      <div>
        <Header user={user} />
        <div className="container">
          <ul>
            <li>user_id:{user.user_id} </li>
            <li>user_name:</li>
            <li><img src={user.image.url} /></li>
            <li><img src={user.image.thumb.url} /></li>
            <li>biography: {user.biography}</li>
            <li></li>
          </ul>
        </div>
      </div>
    )
  }
}

UserDetailApp.propTypes = {
}

export default UserDetailApp
