import React, { Component, PropTypes } from 'react'
import * as Actions from '../actions/work-detail-action'
import { Button, Media, Image, FormControl, Glyphicon } from 'react-bootstrap'

export default class WorkDetailControl extends Component {

  render() {
    console.log("components", this.props)
    const { editMode } = this.props
    const { changeEditMode } = this.props.actions
    if (editMode) {
      return (
        <div className="workdetail-control col-xs-4 col-md-4">
          <Button onClick={()=>changeEditMode(false)}><Glyphicon glyph="ok" /> 完了</Button>
        </div>
      )
    } else {
      return (
        <div className="workdetail-control col-xs-4 col-md-4">
          <Button onClick={()=>changeEditMode(true)}><Glyphicon glyph="pencil" /> 編集</Button>
          <Button><Glyphicon glyph="heart" /> Like</Button>
        </div>
      )
    }
  }
}
