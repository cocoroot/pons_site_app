import React, { Component, PropTypes } from 'react'

class Creation extends Component {
  render() {
    const {  title, created_by, published_at, url  } = this.props
    return (
      <li>
        <h3>{title}</h3>
        <p>
          {/*id: {id}<br />*/}
          created by: {created_by}<br />
          published at: {published_at}<br />
          url: <a href={url}>{url}</a>
        </p>
      </li>
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
