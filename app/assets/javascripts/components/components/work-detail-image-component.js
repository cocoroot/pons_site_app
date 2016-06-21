import React, { Component, PropTypes } from 'react'
import { Button, Image, FormControl, FormGroup, ControlLabel, Glyphicon } from 'react-bootstrap'
import Dropzone from 'react-dropzone'

export default class WorkDetailImage extends Component {

  render() {
    const editMode = true
    let editStyle = {
      display: editMode ? 'block' : 'none'
    }

    return (
      <div className="workdetail-imgbox">
        {/* アップロード済み画像 */}
        <div className="workdetail-image">
          <Image className="" responsive thumbnail src="http://pipsum.com/640x400.jpg" />
          <div className="workdetail-image-update" style={editStyle}>
            <Button className="workdetail-image-delbtn"><Glyphicon glyph="remove" /></Button>
            <FormGroup controlId="pieceFile">
              <ControlLabel>画像更新</ControlLabel>
              <input type="file" />
            </FormGroup>
          </div>
        </div>

        {/* アップロード */}
        <div style={editStyle}>
          <Dropzone className="workdetail-image-drop" accept="image/jpeg,image/png,image/jpg">
            <div>作品イメージのファイルを追加</div>
            <div className="workdetail-image-camera"></div>
            <div>ファイルをドロップしてください</div>
            <br/>
            <div>PNG, JPEG, GIF形式のファイルに対応しています<br/>
              複数アップロードできます
            </div>
        </Dropzone>
        </div>
      </div>
    )
  }
}
