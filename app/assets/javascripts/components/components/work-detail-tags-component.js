import React, { Component, PropTypes } from 'react'
import { Button, Media, Image, FormControl, FormGroup, Glyphicon, InputGroup } from 'react-bootstrap'

export default class WorkDetailTags extends Component {

  render() {
    const editMode = true
    if (!editMode) {
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
    } else {
      return (
        <div className="workdetail-tagbox">
          <h4><Glyphicon glyph="tags"/> 登録タグ</h4>
          <div>
            <FormGroup>
              <InputGroup>
                <FormControl type="text" />
                <InputGroup.Button>
                  <Button>追加</Button>
                </InputGroup.Button>
              </InputGroup>
            </FormGroup>
          </div>
          <p className="workdetail-tags">
            <Button className="workdetail-tag">タグ１<Glyphicon glyph="remove" /></Button>
            <Button className="workdetail-tag">タグ１<Glyphicon glyph="remove" /></Button>
            <Button className="workdetail-tag">タグ１<Glyphicon glyph="remove" /></Button>
          </p>
        </div>
      )
    }
  }
}
