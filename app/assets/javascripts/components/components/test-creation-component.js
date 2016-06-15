import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'

export default class TestCreation extends Component {
  render() {
    const { title, creation_id } = this.props.creation || { title: '', creation_id: 0 }
    return (
      <div>
	TestCreation
        <h3>Creation: {creation_id}</h3>
        <ul>
          <li>id: {creation_id}</li>
          <li>title: {title}</li>
        </ul>
      </div>
    )
  }
}

TestCreation.propTypes = {
}
