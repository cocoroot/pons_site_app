import React, { Component, PropTypes } from 'react'
import { Button, Media, Image, FormControl, Glyphicon } from 'react-bootstrap'

export default class WorkDetailResponse extends Component {

  render() {
    return (
      <div className="workdetail-responsebox row panel panel-default">
        <div className="col-xs-4">
          <div className="workdetail-glyph">
            <Glyphicon glyph="eye-open"  />
          </div>
          <p className="workdetail-res-count">111</p>
          <p className="workdetail-res-unit">View</p>
        </div>
        <div className="col-xs-4">
          <div className="workdetail-glyph">
            <Glyphicon glyph="heart" />
          </div>
          <p className="workdetail-res-count">222</p>
          <p className="workdetail-res-unit">Like</p>
        </div>
        <div className="col-xs-4">
          <div className="workdetail-glyph">
            <Glyphicon glyph="comment" />
          </div>
          <p className="workdetail-res-count">333</p>
          <p className="workdetail-res-unit">Comment</p>
        </div>
      </div>
    )
  }
}
