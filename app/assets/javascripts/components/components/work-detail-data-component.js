import React, { Component, PropTypes } from 'react'
import { Button, Image, FormControl, Glyphicon, FormGroup, ControlLabel, HelpBlock } from 'react-bootstrap'

import { CORE_CONTENTS_BASE_URL } from '../settings'

export default class WorkDetailData extends Component {

  render() {
    const { currentWork, editMode } = this.props.values
    const { work_pieces } = currentWork

    return (
      <div className="workdetail-databox">
        <h4 id="download"><Glyphicon glyph="download-alt" /> データのダウンロード</h4>
        <div className="workdetail-data-panel panel panel-default">

          <table className="table">
            {/* table header */}
            <thead>
              <tr>
                <th width={ 100 }>説明</th>
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
                  if (editMode) {
                    /* 編集用 */
                    return (
                      <tr key={ piece.id }>
                        <td><Image width={ 100 } height={ 60 } src={ CORE_CONTENTS_BASE_URL + piece.image.thumb.url } /></td>
                        <td><FormControl type="text" placeholder="データの名前" value={ piece.name } /></td>
                        <td>{ piece.file_name_for_user }</td>
                        <td>xxx MB</td>
                        <td><Button><Glyphicon glyph="remove" /></Button></td>
                      </tr>
                    )
                  } else {
                    /* 表示用 */
                    return (
                      <tr key={ piece.id }>
			<td><Image width={ 100 } height={ 60 } src={ CORE_CONTENTS_BASE_URL + piece.image.thumb.url } /></td>
                        <td>{ piece.name }</td>
                        <td>{ piece.file_name_for_user }</td>
                        <td>xxx MB</td>
                        <td><a href={ CORE_CONTENTS_BASE_URL + piece.file.url } download={ piece.file_name_for_user }><Glyphicon glyph="download-alt" /></a></td>
                      </tr>
                    )
                  }
                })
              }
            </tbody>
          </table>
	
          {/* ファイルアップロード */}
          {(() => { 
            if (editMode) {
              /* 編集用 */
              return (
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
              )
            }
          })() }
        </div>
      </div>
    )
    
  }
}


/* アップロード中
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
 */
