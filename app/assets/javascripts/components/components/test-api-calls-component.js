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
    this.handlePieceFile = this.handlePieceFile.bind(this)
    this.handleImageFile = this.handleImageFile.bind(this)
    this.onUpdateWorkImage = this.onUpdateWorkImage.bind(this)
    this.onDeleteWorkImage = this.onDeleteWorkImage.bind(this)
    this.onCreateWorkPiece = this.onCreateWorkPiece.bind(this)
    this.onUpdateWorkPiece = this.onUpdateWorkPiece.bind(this)
    this.onDeleteWorkPiece = this.onDeleteWorkPiece.bind(this)
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

  onCreateWorkPiece() {
    const date = new Date()
    const file = this.pieceFile
    const image = this.pieceImage
    const name = `更新 file_name ${date.getSeconds()}`
    let params = {
      file: file,
      image: image,
      name: name
    }
    console.log("onCreateWorkPiece file=%o, image=%o, name=%o", file, image, name)
    //this.props.createWorkPiece(1, params)
  }

  handlePieceFile(e) {
    console.log("handlePieceFile e=%o", e)
    this.pieceFile = e.target.file
  }

  handleImageFile(e) {
    console.log("handleImageFile e=%o", e)
    this.imageFile = e.target.file
  }

  onUpdateWorkPiece() {
    const date = new Date()
    let params = {
      order: date.getSeconds()
    }
    this.props.updateWorkPiece(1, params)
  }

  onDeleteWorkPiece() {
    const work_piece_id = this.refs.work_piece_id.value
    this.props.deleteWorkPiece(work_piece_id)
  }

  render() {
    return (
      <div>
        <Button onClick={this.onCreateWork}>Create Work</Button>
        <Button onClick={this.onUpdateWork}>Update Work</Button>
        
        <Dropzone onDrop={ this.onCreateWorkImage } accept="image/jpeg,image/png,image/jpg">
          <div>Create Work Image</div>
          <br/>
          <div>Drag & Drop or Click to select files to upload.</div>
        </Dropzone>
        <Button onClick={ this.onUpdateWorkImage }>Update Work Image</Button>
        <div>
          <input type="text" placeholder="Work Image Id to delete" ref="work_image_id" />
          <Button onClick={ this.onDeleteWorkImage }>Delete Work Image</Button>
        </div>
        <div>
          <form>
            <FormGroup controlId="pieceFile">
              <ControlLabel>Piece File</ControlLabel>
              <input type="file" ref="pieceFile" onChange={ this.handlePieceFile } />
            </FormGroup>
            <FormGroup controlId="pieceImage">
              <ControlLabel>Piece Image</ControlLabel>
              <input type="file" ref="pieceImage" onChange={ this.handleImageFile } />
            </FormGroup>
            <Button onClick={ this.onCreateWorkPiece }>
              Create Piece
            </Button>
          </form>
        </div>
      </div>
    )
  }
}

TestApiCalls.propTypes = {
}
