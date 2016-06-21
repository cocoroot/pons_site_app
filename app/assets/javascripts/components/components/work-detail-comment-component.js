import React, { Component, PropTypes } from 'react'
import { Button, Media, Image, FormControl, Glyphicon } from 'react-bootstrap'

import { CORE_CONTENTS_BASE_URL } from '../settings'

export default class WorkDetailComment extends Component {

  onChangeInputComment(e) {
    this.props.actions.changeInputComment(e.target.value)
  }
  
  onSubmit(e) {
    const id = this.props.values.currentWork.id
    const comment = this.props.values.commentControl.currentComment
    const params = {
      body: comment
    }
    this.props.actions.createWorkComment(id, params)
  }

  onLoadMoreComment(e) {
    const id = this.props.values.currentWork.id
    const comments = this.props.values.currentWork.work_comments
    const lastCommentId = comments[comments.length - 1].id
    this.props.actions.loadWorkCommentList(id, lastCommentId)
  }
  
  render() {
    const { currentWork, commentControl, me } = this.props.values
    const { work_comments: comments } = currentWork
    const { currentComment, allCommentLoaded } = commentControl

    return (
      <div className="workdetail-commentbox panel panel-default">
        <h4><Glyphicon glyph="comment"/> コメント数({ currentWork.work_comments_count })</h4>
        <Media className="workdetail-comment-form">
          <Media.Left>
            {/*
              (() => {
                if (me.image.thumb.url.length > 0) {
                  return (
                    <Image circle width={64} height={64} src={ CORE_CONTENTS_BASE_URL + me.image.thumb.url } />
                  )
                }
              })
            */}
      </Media.Left>
          <Media.Body>
            <form>
              <FormControl height="64px" componentClass="textarea" value={ currentComment } placeholder="この作品にコメントを残してみませんか？" onChange={(e) => this.onChangeInputComment(e) }/>
              <p className="workdetail-comment-form-submit"><Button onClick={(e) => this.onSubmit(e)}>コメント投稿</Button></p>
            </form>
          </Media.Body>
        </Media>

        <Media className="workdetail-comment-comment">
          {
            comments.map(comment => (
              <div key={ comment.id }>
                <Media.Left>
                  <Image circle width={64} height={64} src={ CORE_CONTENTS_BASE_URL + comment.user.image.thumb.url} />
                </Media.Left>
                <Media.Body>
                  <p><b>{ comment.user.nickname }</b> { comment.created_at }</p>
                  <p>{ comment.body }</p>
                </Media.Body>
              </div>
            )
                        )
          }
      </Media>

        {
          (() => {
            if (!allCommentLoaded) {
              return (
                <Button onClick={(e) => this.onLoadMoreComment(e) } block>コメントをさらに見る</Button>
              )
            }
          })()
        }
      </div>
    )
  }
}
