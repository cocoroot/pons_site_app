import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'

import { CORE_CONTENTS_BASE_URL } from '../settings'

import { Col, Image, Media, Glyphicon } from 'react-bootstrap'

class Work extends Component {
  render() {
    console.log("Work render props=%o", this.props)

    const {
      id,
      title,
      work_images: images,
      user,
      viewCount = 777, // TODO: viewCount
      likes_count: likeCount,
      work_comments_count: commentCount
    } = this.props.work
    const image_url = !!images && images[0] ? CORE_CONTENTS_BASE_URL + images[0].image.url : '/assets/no-image.png'
    const user_image_url = !!user && user.image ? CORE_CONTENTS_BASE_URL + user.image.url : '/assets/no-user-image.png'
    const user_id = user ? user.id : 0
    const user_name = user ? user.nickname : ''

    return (
      <Col xs={6} md={4}>
        <div>
          <Link to={`/works/${id}`}>
            <Image responsive src={image_url} />
          </Link>
          <Media>
            <Media.Left>
              <Link to={`/users/${user_id}`}>
                <Image className="img-circle" width={40} height={40} src={user_image_url} />
              </Link>
            </Media.Left>
            <Media.Body>
              <Media.Heading>
                <Link to={`/works/${id}`}>{title}</Link>
              </Media.Heading>
              <p><Link to={`/users/${user_id}`}>by {user_name}</Link></p>
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

Work.propTypes = {

}

export default Work
