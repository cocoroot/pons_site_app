import React, { Component, PropTypes } from 'react'
import { Button, Image, FormControl, Glyphicon, FormGroup, ControlLabel, HelpBlock } from 'react-bootstrap'

export default class WorkDetailData extends Component {

  render() {
    const { currentWork, editMode } = this.props.values
    const { work_pieces } = currentWork
    
    const displayModeStyle = { display: editMode ? 'none' : 'table-cell' }
    const editModeStyle    = { display: editMode ? 'table-cell' : 'none' }

    return (
      <div className="workdetail-databox">
        <h4 id="download"><Glyphicon glyph="download-alt" /> データのダウンロード</h4>
        <div className="workdetail-data-panel panel panel-default">

          <table className="table">
            {/* table header */}
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
              {
                work_pieces.map(piece => {
                  
                })
              }
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

            </tbody>
          </table>

          {/* ファイルアップロード */}
          <div className="workdetail-data-upload row">
            <form>
              <FormGroup controlId="pieceFile">
                <ControlLabel>データファイル</ControlLabel>
                <input type="file" />
                <HelpBlock>50MB以下のSTL形式のファイルに対応しています</HelpBlock>
              </FormGroup>

              <FormGroup controlId="pieceFile">
                <ControlLabel>サムネイル画像ファイル</ControlLabel>
                <input type="file" />
              </FormGroup>

              <Button bsStyle="primary" block>アップロード</Button>
            </form>
        </div>
        </div>
      </div>
    )
  }
}
