import React, { Component, PropTypes } from 'react'

import DetailHeader from './work-detail-header-component'
import DetailImage from './work-detail-image-component'
import DetailData from './work-detail-data-component'
import DetailComment from './work-detail-comment-component'
import DetailControl from './work-detail-control-component'
import DetailDetail from './work-detail-detail-component'
import DetailTags from './work-detail-tags-component'
import DetailResponse from './work-detail-response-component'
import { Button, Media, Image, FormControl, Glyphicon } from 'react-bootstrap'

export default class WorkDetail extends Component {

  render() {
    const { work, editMode } = this.props
    // TODO: 
    const actions = this.props

    return (
      <div className="workdetail-container container">
        <div className="row">
          {/* header */}
          <DetailHeader editMode={editMode} actions={actions} />
          {/* control */}
          <DetailControl editMode={editMode} actions={actions} />
        </div>
        <div className="row">
          <div className="col-xs-8 col-md-8">
            {/* image box */}
            <DetailImage work={work} editMode={editMode} actions={actions} />
            {/* data box */}
            <DetailData work={work} editMode={editMode} actions={actions} />
            {/* lisence box */}
            <div className="workdetail-lisencebox">
              <img src="/assets/by-nc-sa.eu.png" />
              <p>xxx作xxxは、クリエイティブコモンズ表示・非営利・継承2.1 日本ライセンスの元に提示されています</p>
            </div>
            {/* comment box */}
            <DetailComment work={work} editMode={editMode} actions={actions} />
          </div>
          <div className="col-xs-4 col-md-4">
            {/* response box */}
            <DetailResponse />
            {/* detail box */}
            <DetailDetail work={work} editMode={editMode} actions={actions} />
            {/* tag box */}
            <DetailTags work={work} editMode={editMode} actions={actions} />
            {/* download button */}
            <div>
              <Button href="#download" bsStyle="primary" block> <Glyphicon glyph="download-alt" /> ダウンロード</Button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

WorkDetail.propTypes = {
}
