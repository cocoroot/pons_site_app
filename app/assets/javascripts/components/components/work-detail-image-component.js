import React, { Component, PropTypes } from 'react'
import { Button, Image, Glyphicon } from 'react-bootstrap'
import Dropzone from 'react-dropzone'
import { CORE_CONTENTS_BASE_URL } from '../settings'

export default class WorkDetailImage extends Component {
  constructor() {
    super()
    this.onCreateWorkImage = this.onCreateWorkImage.bind(this)
    this.onClickDelete = this.onClickDelete.bind(this)
  }

  onCreateWorkImage(files) {
    const id = this.props.values.currentWork.id
    const file = files[0]
    let params = {
      image: file,
      order: 1
    }
    this.props.actions.createWorkImage(id, params)
  }

  onClickDelete(id) {
    this.props.actions.deleteWorkImage(id)
  }

  render() {
    const { editMode, currentWork, imageControl } = this.props.values
    let editStyle = {
      display: editMode ? 'block' : 'none'
    }

    return (
      <div className="workdetail-imgbox">
        {/* アップロード済み画像 */}
        {
          currentWork.work_images.map((data) => {
            let image_url = data.image.url ? CORE_CONTENTS_BASE_URL + data.image.url : '/assets/no-image.png'
            return (
              <div className="workdetail-image" key={data.id}>
                <Image className="" responsive thumbnail src={image_url} />
                <Button className="workdetail-image-delbtn" style={editStyle} onClick={() => this.onClickDelete(data.id)}><Glyphicon glyph="remove" /></Button>
              </div>
            )
          })
        }

        {/* アップロード */}
        <div style={editStyle}>
          {
            imageControl.uploading ?
              <div className="workdetail-image-drop">
                <p>アップロード中...</p>
              </div>
            :
              <Dropzone className="workdetail-image-drop" onDrop={ this.onCreateWorkImage } accept="image/jpeg,image/png,image/jpg">
                <div>作品イメージのファイルを追加</div>
                <div className="workdetail-image-camera"></div>
                <div>ファイルをドロップしてください</div>
                <br/>
                <div>PNG, JPEG, GIF形式のファイルに対応しています<br/>
                  複数アップロードできます
                </div>
              </Dropzone>
          }
        </div>
      </div>
    )
  }
}
