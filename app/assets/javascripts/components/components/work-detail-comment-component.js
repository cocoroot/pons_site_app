import React, { Component, PropTypes } from 'react'
import { Button, Media, Image, FormControl, Glyphicon } from 'react-bootstrap'

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
    console.log("WorkDetailComment onSubmit props=%o", this.props)
    this.props.actions.createWorkComment(id, params)
  }

  onLoadMoreComment(e) {
    const id = this.props.values.currentWork.id
    const page = this.props.values.commentControl.loadedPage + 1
    this.props.actions.loadWorkCommentList(id, page)
  }
  
  render() {
    console.log("WorkDetailComment render props=%o", this.props)
    
    const { currentWork, commentControl } = this.props.values
    const { work_comments: comments } = currentWork
    const { currentComment, allCommentLoaded } = commentControl

    return (
      <div className="workdetail-commentbox panel panel-default">
        <h4><Glyphicon glyph="comment"/> コメント数(14)</h4>
        <Media className="workdetail-comment-form">
          <Media.Left>
            <Image circle width={64} height={64} src="http://pipsum.com/100x200.jpg" />
          </Media.Left>
          <Media.Body>
            <form>
              <FormControl height="64px" componentClass="textarea" value={ currentComment } placeholder="この作品にコメントを残してみませんか？" onChange={(e) => this.onChangeInputComment(e) }/>
              <p className="workdetail-comment-form-submit"><Button onClick={(e) => this.onSubmit(e)}>コメント投稿</Button></p>
            </form>
          </Media.Body>
        </Media>

        <Media className="workdetail-comment-comment">
          <Media.Left>
            <Image circle width={64} height={64} src="http://pipsum.com/200x100.jpg" />
          </Media.Left>
          <Media.Body>
            {
              comments.map(comment => (
		<div key={ comment.id }>
                  <p><b>{ comment.user.nickname }</b> { comment.created_at }</p>
                  <p>{ comment.body }</p>
                </div>
              )
                          )
            }
          </Media.Body>
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
