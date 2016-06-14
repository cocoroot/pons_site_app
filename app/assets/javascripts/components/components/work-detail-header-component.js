import React, { Component, PropTypes } from 'react'
import { Button, Media, Image, FormControl, Glyphicon } from 'react-bootstrap'

export default class WorkDetailHeader extends Component {

  render() {
    return (
      <div className="workdetail-header col-xs-8 col-md-8">
        <Media>
          <Media.Left>
            <a href="#">
              <Image className="img-circle" width={40} height={40} src="http://pipsum.com/80x40.jpg" />
            </a>
          </Media.Left>
          <Media.Body>
            <Media.Heading>
              <b>タイトル</b>
            </Media.Heading>
            <p>by <a href="#">作者名</a>   2016/00/00</p>
          </Media.Body>
        </Media>
      </div>
    )
  }
}
