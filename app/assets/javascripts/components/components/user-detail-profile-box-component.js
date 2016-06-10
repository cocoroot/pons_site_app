import React, { Component, PropTypes } from 'react'
import { Button, Media, Image, FormControl } from 'react-bootstrap'

class UserDetailProfileBox extends Component {

  // handleChangeEditMode(mode) {
  //   console.log("handleChangeEditMode")
  //   this.props.dispatch(changeEditMode(mode))
  // }

  render() {
    const { profile, editMode } = this.props.userDetail
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
          <img className="img-responsive" src={base_url + profile.image.url} />
        </div>

        <div className="container user-profile">
          <Media>
            <Media.Left align="top">
              <Image className="img-circle user-avatar" src={base_url + profile.image.thumb.url} />
            </Media.Left>
            <Media.Body   className="user-profile-text">
              <div style={displayStyle}>
                <Media.Heading>ユーザ名</Media.Heading>
                <p className="user-id">{profile.user_id}</p>
                <p className="user-biography">{profile.biography}</p>
                <Button className="user-edit-btn" onClick={() => changeEditMode(true)}  >編集</Button>
              </div>
              <div style={editStyle}>
                <form>
                  <div className="user-form-name">
                    <FormControl type="text" width="50%" placeholder="ユーザ名"  />
                    <p className="user-id">{profile.user_id}</p>
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
