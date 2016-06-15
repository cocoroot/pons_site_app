import React, { Component, PropTypes } from 'react'
import Dropzone from 'react-dropzone'
import { Link } from 'react-router'

import { Image, Button } from 'react-bootstrap'

// TODO: 開発環境用
const image_base_url = 'http://localhost:3000/uploads/dev'

export default class TestMe extends Component {
  constructor() {
    super()
    this.onUpdateButtoClicked = this.onUpdateButtoClicked.bind(this)
    this.onDropImage = this.onDropImage.bind(this)
    this.onDropHeaderImage = this.onDropHeaderImage.bind(this)
  }

  onUpdateButtoClicked(e) {
    const date = new Date()
    const params = {
      nickname: `時刻 ${date.getSeconds()} 秒の僕`,
      biography: `刻一刻と変わる BIOGRAPHY ${date.getSeconds()} 秒版`
    }
    this.props.updateMe(params)
  }

  onDropImage(files) {
    files.forEach((file) => {
      this.props.createUserImage(file)
    })
  }

  onDropHeaderImage(files) {
    files.forEach((file) => {
      this.props.createUserHeaderImage(file)
    })
  }

  render() {
    const { id, nickname, biography, owner, image, header_image } = this.props.me || { id: 0, nickname: '', biography: '', owner: false }

    return (
      <div>
        TestMe
        <h3>Me</h3>
        <Button onClick={ this.onUpdateButtoClicked } >更新！</Button>
        <ul>
          <li>id: {id}</li>
          <li>nickname: {nickname}</li>
          <li>biography: {biography}</li>
          <li>owner: {owner ? 'true' : 'false'}</li>
          <li>image:
            <div>
              <Dropzone onDrop={ this.onDropImage } accept="image/jpeg,image/png,image/jpg" style={{width: '100%'}}>
                {
                  (() => {
                    return image !== void 0? <Image src={`${image_base_url}/${image.url}`} rounded /> : null
                  })()
                }
                <div>Drag & Drop or Click to select files to upload.</div>
              </Dropzone>
            </div>
          </li>
          <li>header_image:
            <div>
              <Dropzone onDrop={ this.onDropHeaderImage } accept="image/jpeg,image/png,image/jpg" style={{width: '100%'}}>
                {
                  (() => {
                    return header_image !== void 0? <Image src={`${image_base_url}/${header_image.url}`} rounded /> : null
                  })()
                }
                <div>Drag & Drop or Click to select files to upload.</div>
              </Dropzone>
            </div>
          </li>
        </ul>
      </div>
    )
  }
}

TestMe.propTypes = {
}
