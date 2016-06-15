import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'

export default class TestWork extends Component {
  render() {
    const { title, id } = this.props.work || { title: '', id: 0 }
    return (
      <div>
	TestWork
        <h3>Work: {id}</h3>
        <ul>
          <li>id: {id}</li>
          <li>title: {title}</li>
        </ul>
      </div>
    )
  }
}

TestWork.propTypes = {
}

