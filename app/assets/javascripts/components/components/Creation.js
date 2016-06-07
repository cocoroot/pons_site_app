import React, { Component, PropTypes } from 'react'

class Creation extends Component {
  render() {
    const {  id, title, created_by, published_at, url } = this.props.creation
    console.log("Creation props=%o", this.props)
    return (
      <div>
        <h3>{title}</h3>
        <ul>
          <li>id: {id}</li>
          <li>created by: {created_by}</li>
          <li>published at: {published_at}</li>
          <li>url: <a href={url}>{url}</a></li>
        </ul>
      </div>
    )
  }
}

Creation.propTypes = {
  id: PropTypes.number ,
  title: PropTypes.string ,
  created_by: PropTypes.string,
  published_at: PropTypes.string,
  url: PropTypes.string
}

export default Creation
