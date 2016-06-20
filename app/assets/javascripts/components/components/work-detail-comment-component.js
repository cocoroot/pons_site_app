import React, { Component, PropTypes } from 'react'
import { Button, Media, Image, FormControl, Glyphicon } from 'react-bootstrap'

export default class WorkDetailComment extends Component {

  render() {
    return (
      <div className="workdetail-commentbox panel panel-default">
        <h4><Glyphicon glyph="comment"/> コメント数(14)</h4>
        <Media className="workdetail-comment-form">
          <Media.Left>
            <Image circle width={64} height={64} src="http://pipsum.com/100x200.jpg" />
          </Media.Left>
          <Media.Body>
            <form>
              <FormControl height="64px" componentClass="textarea" placeholder="この作品にコメントを残してみませんか？" />
              <p className="workdetail-comment-form-submit"><Button>コメント投稿</Button></p>
            </form>
          </Media.Body>
        </Media>

        <Media className="workdetail-comment-comment">
          <Media.Left>
            <Image circle width={64} height={64} src="http://pipsum.com/200x100.jpg" />
          </Media.Left>
          <Media.Body>
            <p><b>ユーザー名</b> 2016/00/00 00:00</p>
            <p>かわいいです！思わずコメントしてしまいました！レンダリングも綺麗ですね</p>
          </Media.Body>
        </Media>

        <Button block>コメントをさらに見る</Button>
      </div>
    )
  }
}
