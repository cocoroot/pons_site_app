import React, { Component, PropTypes } from 'react'

import DetailHeader from './work-detail-header-component'
import DetailImage from './work-detail-image-component'
import DetailData from './work-detail-data-component'
import DetailComment from './work-detail-comment-component'
import DetailControl from './work-detail-control-component'
import DetailDescription from './work-detail-description-component'
import DetailTags from './work-detail-tags-component'
import DetailResponse from './work-detail-response-component'
import { Button, Media, Image, FormControl, Glyphicon } from 'react-bootstrap'

export default class WorkDetail extends Component {

  render() {
    console.log("WorkDetail render props=%o", this.props)
    const {
      currentWork,
      editMode,
      commentControl,
      imageControl,
      formControl,
      tagControl,
      me
    } = this.props
    const { changeEditMode,
            changeInputComment,
            changeInputTitle,
            changeInputDescription,
            changeWorkStatus,
            changeInputTag,
            updateWork,
            createWorkImage, updateWorkImage, deleteWorkImage,
            createWorkPiece, updateWorkPiece, deleteWorkPiece,
            createWorkTag, deleteWorkTag,
            loadWorkCommentList, createWorkComment,
            createLike, deleteLike
          } = this.props
    const actions = {
      changeEditMode,
      changeInputComment,
      changeInputTitle,
      changeInputDescription,
      changeWorkStatus,
      changeInputTag,
      updateWork,
      createWorkImage, updateWorkImage, deleteWorkImage,
      createWorkPiece, updateWorkPiece, deleteWorkPiece,
      createWorkTag, deleteWorkTag,
      loadWorkCommentList, createWorkComment,
      createLike, deleteLike
    }


    const propsForDetailHeader = {
      values: {
        editMode,
        title: currentWork.title,
        author: currentWork.user,
        published_at: currentWork.published_at,
        formControl
      },
      actions
    }

    const propsForDetailControl = {
      values: {
        editMode,
        currentWork,
        formControl
      },
      actions
    }

    const propsForDetailImage = {
      values: { editMode, currentWork, imageControl },
      actions
    }

    const propsForDetailData = {
      values: { currentWork, editMode },
      actions
    }

    const propsForDetailComment = {
      values: { currentWork, commentControl, me },
      actions
    }

    const propsForDetailResponse = {
      values: {
        views_count: '000',
        likes_count: currentWork.likes_count,
        comments_count: currentWork.work_comments_count
      },
      actions
    }

    const propsForDetailDescription = {
      values: {
        editMode,
        description: currentWork.description,
        formControl
      },
      actions
    }

    const propsForDetailTags = {
      values: { editMode, currentWork, tagControl },
      actions
    }

    return (
      <div className="workdetail-container container">
        <div className="row">
          {/* header */}
          <DetailHeader {...propsForDetailHeader} />
          {/* control */}
          <DetailControl {...propsForDetailControl} />
        </div>
        <div className="row">
          <div className="col-xs-8 col-md-8">
            {/* image box */}
            <DetailImage {...propsForDetailImage} />
            {/* data box */}
            <DetailData {...propsForDetailData} />
            {/* lisence box */}
            <div className="workdetail-lisencebox">
              <img src="/assets/by-nc-sa.eu.png" />
              <p>{currentWork.user.nickname}作{currentWork.title}は、クリエイティブコモンズ表示・非営利・継承2.1 日本ライセンスの元に提示されています</p>
            </div>
            {/* comment box */}
            <DetailComment {...propsForDetailComment} />
          </div>
          <div className="col-xs-4 col-md-4">
            {/* response box */}
            <DetailResponse {...propsForDetailResponse} />
            {/* detail box */}
            <DetailDescription {...propsForDetailDescription} />
            {/* tag box */}
            <DetailTags {...propsForDetailTags} />
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
