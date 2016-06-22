import React, { Component, PropTypes } from 'react'
import { Button, Media, Image, FormControl, Glyphicon } from 'react-bootstrap'

export default class WorkDetailDescription extends Component {

  render() {
    const { editMode, description } = this.props.values
    const form_description = description
    if (editMode) {
      return (
        <div className="workdetail-detailbox">
          <FormControl componentClass="textarea" rows={12} placeholder="作品詳細説明" value={form_description} />
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
