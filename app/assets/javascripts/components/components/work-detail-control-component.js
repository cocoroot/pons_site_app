import React, { Component, PropTypes } from 'react'
import * as Actions from '../actions/work-detail-action'
import { Button, Glyphicon, ButtonGroup } from 'react-bootstrap'
import { WorkStatus } from '../settings'

export default class WorkDetailControl extends Component {

  onChangeWorkStatus(id) {
    let work_status = {
      id: id
    }
    this.props.actions.changeWorkStatus(work_status)
  }

  onUpdateWork() {
    const date = new Date()
    let id = this.props.values.currentWork.id
    const { formControl } = this.props.values
    console.log('formControl',formControl)
    let params = {
      title: formControl.title,
      description: formControl.description,
      creation_status_id: formControl.work_status.id
    }
    this.props.actions.updateWork(id, params)
  }

  onDeleteWork() {
    if (window.confirm('本当に削除しますか？')) {
      let id = this.props.values.currentWork.id
      let params = {
        creation_status_id: WorkStatus.USER_DELETED
      }
      this.props.actions.updateWork(id, params)
    }

  }

  render() {
    const { editMode, currentWork, formControl } = this.props.values
    const { owner, like, work_status } = currentWork
    const isUpdating = formControl.updating
    var public_active
    if (formControl.work_status.id == WorkStatus.PUBLISHED) {
      public_active = true
    } else {
      public_active = false
    }
    const { changeEditMode } = this.props.actions
    if (owner) {
      if (editMode) {
        // 編集中
        return (
          <div className="workdetail-control col-xs-4 col-md-4">
            <ButtonGroup className="workdetail-control-publish">
              <Button active={!public_active} onClick={()=>this.onChangeWorkStatus(WorkStatus.PRIVATE)}><Glyphicon glyph="minus-sign" /> 非公開</Button>
              <Button active={public_active}  onClick={()=>this.onChangeWorkStatus(WorkStatus.PUBLISHED)}><Glyphicon glyph="ok-sign" /> 公開</Button>
            </ButtonGroup>
            <Button className="workdetail-control-delbtn" bsStyle="danger" onClick={()=>this.onDeleteWork()}><Glyphicon glyph="trash" /> 削除</Button>
            <Button bsStyle="success" disabled={isUpdating} onClick={()=>this.onUpdateWork()}>
              <Glyphicon glyph="ok" />{isUpdating ? '更新' : '完了'}
            </Button>
          </div>
        )
      } else {
        // 表示中
        return (
          <div className="workdetail-control col-xs-4 col-md-4">
            <span className="workdetail-control-status">{work_status.name}</span>
            <Button onClick={()=>changeEditMode(true)}><Glyphicon glyph="pencil" /> 編集</Button>
          </div>
        )
      }
    } else {
      if (like) {
        // Like済み
        return (
          <div className="workdetail-control col-xs-4 col-md-4">
            <Button><Glyphicon glyph="heart" /> 解除</Button>
          </div>
        )
      } else {
        // 未Like
        return (
          <div className="workdetail-control col-xs-4 col-md-4">
            <Button bsStyle="primary"><Glyphicon glyph="heart" /> Like</Button>
          </div>
        )
      }
    }

  }
}
