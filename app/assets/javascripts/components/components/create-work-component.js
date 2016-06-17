import React, { Component, PropTypes } from 'react'
import { Button, Modal, FormGroup, FormControl, ControlLabel, HelpBlock } from 'react-bootstrap'

class CreateWork extends Component {

  onSubmit(e) {
    e.preventDefault()
    var title = document.getElementById('title').value
    console.log("create work title=%o", title)
  }

  render() {
    const { showModal, closeModal } = this.props
    return (
      <Modal show={showModal} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>作品投稿</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form id="new-work-form" onSubmit={(e) => this.onSubmit(e)}>
            <FormGroup controlID="formBasicText">
              <ControlLabel className="creatework-title">作品のタイトル</ControlLabel>
              <FormControl type="text" id="title" name="title" placeholder="例：○○○の小道具" />
              <FormControl.Feedback />
              <HelpBlock>※あとから変更できます</HelpBlock>
            </FormGroup>
            <Button type="submit" bsStyle="primary" block>作品情報の入力に進む</Button>
          </form>
        </Modal.Body>
      </Modal>
    )
  }
}

CreateWork.propTypes = {
}

export default CreateWork
