import React, { Component, PropTypes } from 'react'
import { Button, FormControl, FormGroup, Glyphicon, InputGroup } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

export default class WorkDetailTags extends Component {

  onChangeInputTag(e) {
    this.props.actions.changeInputTag(e.target.value)
  }

  onCreateWorkTag() {
    window.alert('add tag!')
    let id = this.props.values.currentWork.id
    let params = {
      name: this.props.values.tagControl.tag
    }
    this.props.createWorkTag(id, params)
  }

  onDeleteWorkTag() {
    const work_tag_id = this.refs.work_tag_id.value
    this.props.deleteWorkTag(work_tag_id)
  }

  render() {
    // const { editMode, work_tags } = this.props.values
    const { work_tags, tagControl } = this.props.values
    var editMode = true
    if (!editMode) {
      return (
        <div className="workdetail-tagbox">
          <h4><Glyphicon glyph="tags"/> 登録タグ</h4>
          <p className="workdetail-tags">
            {
              work_tags.map((tag, index) => {
                return (
                  <Button className="workdetail-tag" key={index}>{tag}</Button>
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
                  <Button disable={tagControl.updating} onClick={()=>this.onCreateWorkTag()}>追加</Button>
                </InputGroup.Button>
              </InputGroup>
            </FormGroup>
          </div>
          <p className="workdetail-tags">
            {
              work_tags.map((tag, index) => {
                return (
                  <Button className="workdetail-tag" key={index}>{tag}<Glyphicon glyph="remove" /></Button>
                )
              })
            }
          </p>
        </div>
      )
    }
  }
}
