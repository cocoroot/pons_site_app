import React, { Component, PropTypes } from 'react'
import { Button, Media, Image, FormControl } from 'react-bootstrap'

import { CORE_CONTENTS_BASE_URL } from '../settings'

class UserDetailProfileBox extends Component {

  // handleChangeEditMode(mode) {
  //   console.log("handleChangeEditMode")
  //   this.props.dispatch(changeEditMode(mode))
  // }

  render() {
    console.log("UserDetailProfileBox render props=%o", this.props)
    const { editMode } = this.props
    const {
      id: user_id = 0,
      image = null,
      biography = ''
    } = this.props.profile
    const { changeEditMode } = this.props
    
    let displayStyle = {
      display: editMode ? 'none' : 'block'
    }
    let editStyle = {
      display: editMode ? 'block' : 'none'
    }

    let image_url = image ? CORE_CONTENTS_BASE_URL + image.url : ''
    let thumbnail_url = image ? CORE_CONTENTS_BASE_URL + image.thumb.url : ''
    
    return (
      <div>
        <div className="profile-image">
          <img className="img-responsive" src={image_url} />
        </div>

        <div className="container user-profile">
          <Media>
            <Media.Left align="top">
              <Image className="img-circle user-avatar" src={thumbnail_url} />
            </Media.Left>
            <Media.Body   className="user-profile-text">
              <div style={displayStyle}>
                <Media.Heading>ユーザ名</Media.Heading>
                <p className="user-id">{user_id}</p>
                <p className="user-biography">{biography}</p>
                <Button className="user-edit-btn" onClick={() => changeEditMode(true)}  >編集</Button>
              </div>
              <div style={editStyle}>
                <form>
                  <div className="user-form-name">
                    <FormControl type="text" width="50%" placeholder="ユーザ名"  />
                    <p className="user-id">{user_id}</p>
                  </div>
                  <FormControl componentClass="textarea"  placeholder="バイオグラフィー"  />
                </form>
                <Button className="user-edit-btn" onClick={() => changeEditMode(false)}  >完了</Button>
              </div>
            </Media.Body>
          </Media>
        </div>
      </div>
    )
  }
}

UserDetailProfileBox.propTypes = {
}

export default UserDetailProfileBox
