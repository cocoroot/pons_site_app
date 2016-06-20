import React, { Component, PropTypes } from 'react'
import { Button, Media, Image, FormControl, Glyphicon, FormGroup, ControlLabel } from 'react-bootstrap'
import Dropzone from 'react-dropzone'

export default class WorkDetailData extends Component {

  render() {
    const thumbnailStyle={
      width:'100px',
      height:'60px'
    }
    const thumbnailDropStyle={
      ...thumbnailStyle,
      border: '2px dashed #000'
    }
    return (
      <div className="workdetail-databox">
        <h4 id="download"><Glyphicon glyph="download-alt" /> データのダウンロード</h4>
        <div className="workdetail-data-panel panel panel-default">
          <ul>
            <li className="workdetail-data-header">
              <span className="workdetail-data-thumbnail">説明</span>
              <span className="workdetail-data-name">ファイル名</span>
              <span className="workdetail-data-filename"></span>
              <span className="workdetail-data-size"></span>
              <span className="workdetail-data-button"></span>
            </li>

          </ul>

          <table className="table">
            {/* hr */}
            <thead>
              <tr>
                <th width={100}>説明</th>
                <th></th>
                <th>ファイル名</th>
                <th>サイズ</th>
                <th></th>
              </tr>
            </thead>
            {/* table body */}
            <tbody>
              {/* 表示用 */}
              <tr>
                <td>
                  <Image width={100} height={60} src="http://pipsum.com/200x160.jpg" />
                </td>
                <td>
                  xxxxxxの飾り
                </td>
                <td>
                  filename.stl
                </td>
                <td>
                  5.0MB
                </td>
                <td>
                  <Button href="#"><Glyphicon glyph="download-alt"/></Button>
                </td>
              </tr>

              {/* 編集用 */}
              <tr>
                <td>
                  <Image width={100} height={60} src="http://pipsum.com/200x160.jpg" />
                </td>
                <td>
                  <FormControl type="text" placeholder="データの名前" />
                </td>
                <td>
                  filename.stl
                </td>
                <td>
                  5.0MB
                </td>
                <td>
                  <Button><Glyphicon glyph="remove"/></Button>
                </td>
              </tr>

              {/* アップロード中*/}
              <tr>
                <td colSpan="2">
                  アップロード中...
                </td>
                <td>
                  filename.stl
                </td>
                <td>

                </td>
                <td>
                  <Button><Glyphicon glyph="remove"/></Button>
                </td>
              </tr>

              {/* アップロード用 */}

              <tr>

                  <td width="100">
                    <Dropzone className="workdetail-data-thumbnail-drop" accept="image/jpeg,image/png,image/jpg">
                      <div>サムネイル</div>
                    </Dropzone>
                  </td>
                  <td colSpan="3">
                    <input type="file" />
                    <p>50MB以下のSTL形式のファイルに対応しています</p>
                  </td>
                  <td>
                    <Button><Glyphicon glyph="upload"/></Button>
                  </td>
                </form>
                </tr>

            </tbody>
          </table>

          {/* ファイルアップロード */}
          {/*<hr />
            <div className="workdetail-data-upload">
            <form>
            <FormGroup controlId="pieceFile">
            <ControlLabel>Piece File</ControlLabel>
            <input type="file" />
            </FormGroup>
            <FormGroup controlId="pieceImage">
            <ControlLabel>Piece Image</ControlLabel>
            <input type="file" />
            </FormGroup>
            <Button >
            Create Piece
            </Button>
          </form>*/}

          {/*</div>*/}
        </div>
      </div>
    )
  }
}
