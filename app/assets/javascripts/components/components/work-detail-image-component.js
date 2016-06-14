import React, { Component, PropTypes } from 'react'
import { Button, Media, Image, FormControl, Glyphicon } from 'react-bootstrap'

export default class WorkDetailImage extends Component {

  render() {
    return (
      <div className="workdetail-imgbox">
        <Image className="" responsive thumbnail src="http://pipsum.com/640x400.jpg" />
        <Image className="" responsive thumbnail src="http://pipsum.com/640x400.jpg" />
        <Image className="" responsive thumbnail src="http://pipsum.com/640x400.jpg" />
      </div>
    )
  }
}
