import React, { Component, PropTypes } from 'react'

class Creation extends Component {
  render() {
    const {  title, imgUrl, created_by, published_at, url  } = this.props
    return (
      <li>
        <h3>{title}</h3>
        <p>img url : {imgUrl} </p>
        <p><img src={imgUrl} /></p>
        <p>author: {author}</p>
        created by: {created_by}<br />
        published at: {published_at}<br />
        url: <a href={url}>{url}</a>
        <p></p>
      </li>
    )
  }
}

Creation.propTypes = {

}

export default Creation
