import React, { Component, PropTypes } from 'react'
import { Button, Media, Image, FormControl, Glyphicon } from 'react-bootstrap'

export default class WorkDetailHeader extends Component {

  render() {
    const { editMode } = this.props.workDetail
    if (editMode) {
      return (
        <div className="workdetail-header col-xs-8 col-md-8">
          <Media>
            <Media.Left>
              <a href="#">
                <Image className="img-circle" width={40} height={40} src="http://pipsum.com/80x40.jpg" />
              </a>
            </Media.Left>
            <Media.Body>
              <FormControl type="text" name="title" />
              <p>by <a href="#">作者名</a>   2016/00/00</p>
            </Media.Body>
          </Media>
        </div>
      )
    } else {
      return (
        <div className="workdetail-header col-xs-8 col-md-8">
          <Media>
            <Media.Left>
              <a href="#">
                <Image className="img-circle" width={40} height={40} src="http://pipsum.com/80x40.jpg" />
              </a>
            </Media.Left>
            <Media.Body>
              <p className="workdetail-header-title">タイトル</p>
              <p>by <a href="#">作者名</a>   2016/00/00</p>
            </Media.Body>
          </Media>
        </div>
      )
    }
  }
}
