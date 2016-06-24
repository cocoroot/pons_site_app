import React, { Component, PropTypes } from 'react'
import { Button, FormControl, FormGroup, Glyphicon, InputGroup } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

export default class WorkDetailTags extends Component {

  onChangeInputTag(e) {
    this.props.actions.changeInputTag(e.target.value)
  }

  onCreateWorkTag() {
    let tag = this.props.values.tagControl.tag
    let id = this.props.values.currentWork.id
    let params = {
      tag_name: tag
    }
    this.props.actions.createWorkTag(id, params)
  }

  onDeleteWorkTag(id) {
    this.props.actions.deleteWorkTag(id)
  }

  render() {
    const { editMode, currentWork, tagControl } = this.props.values
    if (!editMode) {
      return (
        <div className="workdetail-tagbox">
          <h4><Glyphicon glyph="tags"/> 登録タグ</h4>
          <p className="workdetail-tags">
            {
              currentWork.work_tags.map(tag => {
                return (
                  <Button className="workdetail-tag" key={tag.id}>{tag.tag_name}</Button>
                )
              })
            }
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
                <FormControl type="text" value={tagControl.tag} onChange={(e) => this.onChangeInputTag(e)} />
                <InputGroup.Button>
                  <Button disabled={tagControl.updating} onClick={()=>this.onCreateWorkTag()}>追加</Button>
                </InputGroup.Button>
              </InputGroup>
            </FormGroup>
          </div>
          <p className="workdetail-tags">
            {
              currentWork.work_tags.map(tag => {
                return (
                  <Button className="workdetail-tag" key={tag.id} onClick={()=>this.onDeleteWorkTag(tag.id)}>
                    {tag.tag_name} <Glyphicon glyph="remove" />
                  </Button>
                )
              })
            }
          </p>
        </div>
      )
    }
  }
}
