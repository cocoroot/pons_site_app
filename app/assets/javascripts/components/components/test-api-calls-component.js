import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'

import { Image, Button, FormGroup, FormControl, ControlLabel } from 'react-bootstrap'
import Dropzone from 'react-dropzone'

import { CORE_CONTENTS_BASE_URL, WorkStatus } from '../settings'

export default class TestApiCalls extends Component {
  constructor() {
    super()
    this.onCreateWork = this.onCreateWork.bind(this)
    this.onUpdateWork = this.onUpdateWork.bind(this)
    this.onCreateWorkImage = this.onCreateWorkImage.bind(this)
    this.onUpdateWorkImage = this.onUpdateWorkImage.bind(this)
    this.onDeleteWorkImage = this.onDeleteWorkImage.bind(this)
    this.handlePieceFile = this.handlePieceFile.bind(this)
    this.handleImageFile = this.handleImageFile.bind(this)
    this.onCreateWorkPiece = this.onCreateWorkPiece.bind(this)
    this.onUpdateWorkPiece = this.onUpdateWorkPiece.bind(this)
    this.onDeleteWorkPiece = this.onDeleteWorkPiece.bind(this)
    this.onCreateWorkTag = this.onCreateWorkTag.bind(this)
    this.onDeleteWorkTag = this.onDeleteWorkTag.bind(this)
    this.onCreateWorkComment = this.onCreateWorkComment.bind(this)
    this.onCreateGood = this.onCreateGood.bind(this)
    this.onDeleteGood = this.onDeleteGood.bind(this)
    this.work_piece = {}
  }

  onCreateWork() {
    const date = new Date()
    let params = {
      title: `${date.getSeconds()} 秒目の無名新規作品`
    }
    this.props.createWork(params)
  }

  onUpdateWork() {
    const date = new Date()
    let params = {
      title: `${date.getSeconds()} 秒目の無名新規作品`,
      description: `${date.getSeconds()} 秒の詳細説明文説明説明説説説説説説説説説説説説説説説説説説説説説説説説説説説説説説説説説説説説説説説\n説明`,
      creation_status_id: WorkStatus.CREATING
    }
    this.props.updateWork(1, params)
  }

  onCreateWorkImage(files) {
    const file = files[0]
    let params = {
      image: file,
      order: 1
    }
    this.props.createWorkImage(1, params)
  }

  onUpdateWorkImage() {
    const date = new Date()
    let params = {
      order: date.getSeconds()
    }
    this.props.updateWorkImage(1, params)
  }

  onDeleteWorkImage() {
    const work_image_id = this.refs.work_image_id.value
    this.props.deleteWorkImage(work_image_id)
  }

  handlePieceFile(e) {
    console.log("handlePieceFile e.dataTransfer=%o, e.target=%o, files=%o", e.dataTransfer, e.target, e.dataTransfer ? e.dataTransfer.files : e.target.files)
    
    e.preventDefault()
    const files = e.dataTransfer ? e.dataTransfer.files : e.target.files
    this.work_piece.file = files[0]
    console.log("handlePieceFile taget.value=%s", e.target.value)
  }

  handleImageFile(e) {
    console.log("handleImageFile e.dataTransfer=%o, e.target=%o, files=%o", e.dataTransfer, e.target, e.dataTransfer ? e.dataTransfer.files : e.target.files)
    
    e.preventDefault()
    const files = e.dataTransfer ? e.dataTransfer.files : e.target.files
    this.work_piece.image = files[0]
    console.log("handleImageFile taget.value=%s", e.target.value)
  }

  onCreateWorkPiece() {
    const date = new Date()
    let params = {}
    if (!!this.work_piece.file) {
      params.file = this.work_piece.file
    }
    if (!!this.work_piece.image) {
      params.image = this.work_piece.image
    }
    params.name = `わたしの file name ${date.getSeconds()}`
    
    console.log("onCreateWorkPiece params=%o", params)
    
    this.props.createWorkPiece(1, params)
  }

  onUpdateWorkPiece() {
    const date = new Date()
    let params = {
      name: `更新 file name ${date.getSeconds()}`
    }
    const work_piece_id = this.refs.work_piece_id.value
    this.props.updateWorkPiece(work_piece_id, params)
  }

  onDeleteWorkPiece() {
    const work_piece_id = this.refs.work_piece_id.value
    this.props.deleteWorkPiece(work_piece_id)
  }

  onCreateWorkTag() {
    const date = new Date()
    let params = {
      name: `タグ名 ${date.getSeconds()}`
    }
    this.props.createWorkTag(1, params)
  }

  onDeleteWorkTag() {
    const work_tag_id = this.refs.work_tag_id.value
    this.props.deleteWorkTag(work_tag_id)
  }

  onCreateWorkComment() {
    const date = new Date()
    let params = {
      body: `コメントコメント ${date.getSeconds()} 秒のコメント`
    }
    this.props.createWorkComment(1, params)
  }

  onCreateGood() {
    const work_id = this.refs.work_id_for_good.value
    this.props.createGood(work_id)
  }

  onDeleteGood() {
    const work_id = this.refs.work_id_for_good.value
    this.props.deleteGood(work_id)
  }

  render() {
    return (
      <div>
        <div>
          <h3>Work</h3>
          <Button onClick={this.onCreateWork}>Create Work</Button>
          <Button onClick={this.onUpdateWork}>Update Work</Button>
        </div>
        <div>
          <h3>Work Image</h3>
          <Dropzone onDrop={ this.onCreateWorkImage } accept="image/jpeg,image/png,image/jpg">
            <div>Create Work Image</div>
            <br/>
            <div>Drag & Drop or Click to select files to upload.</div>
          </Dropzone>
          <input type="text" placeholder="Work Image Id to update/delete" ref="work_image_id" />
          <Button onClick={ this.onUpdateWorkImage }>Update Work Image</Button>
          <Button onClick={ this.onDeleteWorkImage }>Delete Work Image</Button>
        </div>
        <div>
          <h3>Work Piece</h3>
          <form>
            <FormGroup controlId="pieceFile">
              <ControlLabel>Piece File</ControlLabel>
              <input type="file" onChange={ this.handlePieceFile } />
            </FormGroup>
            <FormGroup controlId="pieceImage">
              <ControlLabel>Piece Image</ControlLabel>
              <input type="file" onChange={ this.handleImageFile } />
            </FormGroup>
            <Button onClick={ this.onCreateWorkPiece }>
              Create Piece
            </Button>
          </form>
          <input type="text" placeholder="Work Piece Id to update/delete" ref="work_piece_id" />
          <Button onClick={ this.onUpdateWorkPiece }>Update Work Piece</Button>
          <Button onClick={ this.onDeleteWorkPiece }>Delete Work Piece</Button>
        </div>
        <div>
          <h3>Work Tag</h3>
          <form>
            <Button onClick={ this.onCreateWorkTag }>
              Create Tag
            </Button>
          </form>
          <Button onClick={ this.onUpdateWorkTag }>Update Tag</Button>
          <input type="text" placeholder="Tag id to delete" ref="work_tag_id" />
          <Button onClick={ this.onDeleteWorkTag }>Delete Tag</Button>
        </div>
        <div>
          <h3>Work Comment</h3>
          <Button onClick={ this.onCreateWorkComment }>
            Create Comment
          </Button>
        </div>
        <div>
          <h3>Good</h3>
          <input type="text" placeholder="Work id for good" ref="work_id_for_good" />
          <Button onClick={ this.onCreateGood }>
            Create Good
          </Button>
          <Button onClick={ this.onDeleteGood }>
            Delete Good
          </Button>
        </div>
      </div>
    )
  }
}

TestApiCalls.propTypes = {
}
