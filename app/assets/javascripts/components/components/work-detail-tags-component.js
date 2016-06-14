import React, { Component, PropTypes } from 'react'
import { Button, Media, Image, FormControl, Glyphicon } from 'react-bootstrap'

export default class WorkDetailTags extends Component {

  render() {
    return (
      <div className="workdetail-tagbox">
        <h4><Glyphicon glyph="tags"/> 登録タグ</h4>
        <p className="workdetail-tags">
          <Button className="workdetail-tag">タグ１</Button>
          <Button className="workdetail-tag">タグ2</Button>
          <Button className="workdetail-tag">タグ3</Button>
          <Button className="workdetail-tag">タグ１</Button>
          <Button className="workdetail-tag">タグ2</Button>
          <Button className="workdetail-tag">タグ3</Button>
        </p>
      </div>
    )
  }
}
