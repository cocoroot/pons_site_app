import React, { Component, PropTypes } from 'react'
import { Button, Media, Image, FormControl, Glyphicon } from 'react-bootstrap'

export default class WorkDetailControl extends Component {

  render() {
    return (
      <div className="workdetail-control col-xs-4 col-md-4">
        <Button><Glyphicon glyph="heart" /> Like</Button>
      </div>
    )
  }
}
