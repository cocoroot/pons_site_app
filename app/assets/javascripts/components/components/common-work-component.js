import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'

import { CORE_CONTENTS_BASE_URL } from '../settings'

import { Col, Image, Media, Glyphicon } from 'react-bootstrap'

class Work extends Component {
  render() {
    //console.log("Work render props=%o", this.props)
    
    const {
      id,
      title,
      creation_images: images = null,
      site_user: author = null,
      viewCount = 777, // TODO: viewCount
      goods_count: likeCount,
      creation_comments_count: commentCount
    } = this.props
    const image_url = images ? CORE_CONTENTS_BASE_URL + images[0].image.url : ''
    const author_image_url = author ? CORE_CONTENTS_BASE_URL + author.image.url : ''
    const author_id = author ? author.id : 0
    const author_name = author ? author.name : ''
    
    return (
      <Col xs={6} md={4}>
        <div>
          <Link to={`/works/${id}`}>
            <Image responsive src={image_url} />
          </Link>
          <Media>
            <Media.Left>
              <Link to="`/users/${author_id}`">
                <Image className="img-circle" width={40} height={40} src={author_image_url} />
              </Link>
            </Media.Left>
            <Media.Body>
              <Media.Heading>
                <Link to="`/works/${id}`">{title}</Link>
              </Media.Heading>
              <p><Link to="`/users/${author_id}`">by {author_name}</Link></p>
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
