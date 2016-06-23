import React, { Component, PropTypes } from 'react'
import { Button, Media, Image, FormControl, Glyphicon } from 'react-bootstrap'

export default class WorkDetailDescription extends Component {

  onChangeInputDescription(e) {
    this.props.actions.changeInputDescription(e.target.value)
  }

  render() {
    const { editMode, description, formControl } = this.props.values
    const form_description = formControl.description
    if (editMode) {
      return (
        <div className="workdetail-detailbox">
          <FormControl componentClass="textarea" rows={12} placeholder="作品詳細説明" value={form_description} onChange={(e) => this.onChangeInputDescription(e)} />
        </div>
      )
    } else {
      return (
        <div className="workdetail-detailbox">
          {description}
        </div>
      )
    }
  }
}
