import React, { Component, PropTypes } from 'react'
import * as Actions from '../actions/work-detail-action'
import { Button, Glyphicon, ButtonGroup } from 'react-bootstrap'

export default class WorkDetailControl extends Component {

  render() {
    const { editMode, owner, like } = this.props.values
    const { changeEditMode } = this.props.actions
    if (owner) {
      if (editMode) {
        // 編集中
        return (
          <div className="workdetail-control col-xs-4 col-md-4">
            <ButtonGroup className="workdetail-control-publish">
              <Button><Glyphicon glyph="ok-sign" /> 公開</Button>
              <Button><Glyphicon glyph="minus-sign" /> 非公開</Button>
            </ButtonGroup>
            <Button className="workdetail-control-delbtn"><Glyphicon glyph="trash" /> 削除</Button>
            <Button onClick={()=>changeEditMode(false)}><Glyphicon glyph="ok" /> 完了</Button>
          </div>
        )
      } else {
        // 表示中
        return (
          <div className="workdetail-control col-xs-4 col-md-4">
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
