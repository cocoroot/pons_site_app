import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'

export default class TestUser extends Component {
  render() {
    const { id, nickname, biography, owner } = this.props.user || { id: 0, nickname: '', biography: '', owner: false }
    return (
      <div>
	TestUser
        <h3>User: {id}</h3>
        <ul>
          <li>id: {id}</li>
          <li>nickname: {nickname}</li>
          <li>biography: {biography}</li>
          <li>owner: {owner ? 'true' : 'false'}</li>
        </ul>
      </div>
    )
  }
}

TestUser.propTypes = {
}
