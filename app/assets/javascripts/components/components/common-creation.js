import React, { Component, PropTypes } from 'react'

import { Col, Image, Media, Glyphicon } from 'react-bootstrap'

class Creation extends Component {
  render() {
    // const {  title, imgUrl, author, viewCount, likeCount, commentCount  } = this.props
    return (
      <Col xs={6} md={4}>
        <div>
          <a href="#">
            <Image responsive src="http://pipsum.com/435x310.jpg" />
          </a>
          <Media>
            <Media.Left>
              <a href="#">
                <Image className="img-circle" width={40} height={40} src="http://pipsum.com/80x40.jpg" />
              </a>
            </Media.Left>
            <Media.Body>
              <Media.Heading>
                <a href="#">作品名</a>
              </Media.Heading>
              <p><a href="#">by　ユーザ名</a></p>
            </Media.Body>
            <div className="">
              <Glyphicon glyph="eye-open" />
              <span>133</span>
              <Glyphicon glyph="heart" />
              <span>133</span>
              <Glyphicon glyph="comment" />
              <span>133</span>
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
