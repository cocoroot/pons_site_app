import React, { Component, PropTypes } from 'react'
import { Button, Media, Image, FormControl, Glyphicon } from 'react-bootstrap'
import { Link } from 'react-router'
import { CORE_CONTENTS_BASE_URL } from '../settings'

export default class WorkDetailHeader extends Component {

  render() {
    const { editMode, title, author, published_at } = this.props.values
    const {
      id,
      nickname,
      image
    } = author
    let thumbnail_url = image.thumb.url ? CORE_CONTENTS_BASE_URL + image.thumb.url : ''
    let author_url = '/users/' + id
    let form_title = title

    let displayStyle = {
      display: editMode ? 'none' : 'block'
    }
    let editStyle = {
      display: editMode ? 'block' : 'none'
    }

    return (
      <div className="workdetail-header col-xs-8 col-md-8">
        <Media>
          <Media.Left>
            <Link to={author_url}>
              <Image className="img-circle" width={40} height={40} src={thumbnail_url} />
            </Link>
          </Media.Left>
          <Media.Body>
            {/* 表示用 */}
            <p style={displayStyle} className="workdetail-header-title">{title}</p>
            {/* 編集用 */}
            <FormControl style={editStyle} type="text" name="title" value={form_title} />

            <p>by <Link to={author_url}>{nickname}</Link>   {published_at}</p>
          </Media.Body>
        </Media>
      </div>
    )
  }
}
