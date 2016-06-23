import React, { Component, PropTypes } from 'react'
import { Button, Media, Image, FormControl, Glyphicon } from 'react-bootstrap'

export default class WorkDetailResponse extends Component {

  render() {
    const { views_count, likes_count, comments_count } = this.props.values
    return (
      <div className="workdetail-responsebox row panel panel-default">
        <div className="col-xs-4">
          <div className="workdetail-glyph">
            <Glyphicon glyph="eye-open"  />
          </div>
          <p className="workdetail-res-count">{views_count}</p>
          <p className="workdetail-res-unit">View</p>
        </div>
        <div className="col-xs-4">
          <div className="workdetail-glyph">
            <Glyphicon glyph="heart" />
          </div>
          <p className="workdetail-res-count">{likes_count}</p>
          <p className="workdetail-res-unit">Like</p>
        </div>
        <div className="col-xs-4">
          <div className="workdetail-glyph">
            <Glyphicon glyph="comment" />
          </div>
          <p className="workdetail-res-count">{comments_count}</p>
          <p className="workdetail-res-unit">Comment</p>
        </div>
      </div>
    )
  }
}
