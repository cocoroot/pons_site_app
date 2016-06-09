import React, { Component, PropTypes } from 'react'

import { Col, Image, Media, Glyphicon } from 'react-bootstrap'

class Creation extends Component {
  render() {
    const {  title, img, url, author, viewCount, likeCount, commentCount  } = this.props
    return (
      <Col xs={6} md={4}>
        <div>
          <a href={url}>
            <Image responsive src={img} />
          </a>
          <Media>
            <Media.Left>
              <a href={author.url}>
                <Image className="img-circle" width={40} height={40} src={author.avatar} />
              </a>
            </Media.Left>
            <Media.Body>
              <Media.Heading>
                <a href={url}>{title}</a>
              </Media.Heading>
              <p><a href={author.url}>by {author.name}</a></p>
            </Media.Body>
            <div className="">
              <Glyphicon glyph="eye-open" />
              <span>{viewCount}</span>
              <Glyphicon glyph="heart" />
              <span>{likeCount}</span>
              <Glyphicon glyph="comment" />
              <span>{commentCount}</span>
            </div>
          </Media>
        </div>
      </Col>
    )
  }
}

Creation.propTypes = {

}

export default Creation
