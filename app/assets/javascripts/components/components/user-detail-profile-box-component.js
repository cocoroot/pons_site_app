import React, { Component, PropTypes } from 'react'

import { Button, Media, Image, FormControl } from 'react-bootstrap'

class UserDetailProfileBox extends Component {
  render() {
    const { user, editMode } = this.props.profile
    const { changeEditMode } = this.props
    // var editMode = true
    let displayStyle = {
      display: editMode ? 'none' : 'block'
    }
    let editStyle = {
      display: editMode ? 'block' : 'none'
    }

    let base_url = 'http://localhost:3000/uploads/dev'
    return (
      <div>
        <div className="profile-image">
          <img className="img-responsive" src={base_url + user.image.url} />
        </div>

        <div className="container user-profile">
          <Media>
            <Media.Left align="top">
              <Image className="img-circle user-avatar" src={base_url + user.image.thumb.url} />
            </Media.Left>
            <Media.Body   className="user-profile-text">
              <div style={displayStyle}>
                <Media.Heading>ユーザ名</Media.Heading>
                <p className="user-id">{user.user_id}</p>
                <p className="user-biography">{user.biography}</p>
                <Button className="user-edit-btn"  >編集</Button>
              </div>
              <div style={editStyle}>
                <form>
                  <div className="user-form-name">
                    <FormControl type="text" width="50%" placeholder="ユーザ名"  />
                    <p className="user-id">{user.user_id}</p>
                  </div>
                  <FormControl componentClass="textarea"  placeholder="バイオグラフィー"  />
                </form>
                <Button className="user-edit-btn"  >完了</Button>
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
