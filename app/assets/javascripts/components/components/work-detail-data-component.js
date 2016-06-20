import React, { Component, PropTypes } from 'react'
import { Button, Media, Image, FormControl, Glyphicon } from 'react-bootstrap'

export default class WorkDetailData extends Component {

  render() {
    return (
      <div className="workdetail-databox">
        <h4 id="download"><Glyphicon glyph="download-alt" /> データのダウンロード</h4>
        <div className="workdetail-data-panel panel panel-default">
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
            </tbody>
          </table>

          {/* ファイルアップロード */}
          <hr />
          <div className="workdetail-data-upload">
            <input type="file" />
            <p>50MB以下のSTL形式のファイルに対応しています</p>
          </div>
        </div>
      </div>
    )
  }
}
