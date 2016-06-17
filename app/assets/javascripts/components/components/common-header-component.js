import React, { Component, PropTypes } from 'react'
import { Button, Modal, FormGroup, FormControl, ControlLabel, HelpBlock, NavDropdown, MenuItem } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import CreateWork from './create-work-component'

import { CORE_CONTENTS_BASE_URL } from '../settings'

class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-default navbar-static-top">
        <div id="navbar">
          <div className="container">
            <ul className="nav navbar-nav">
              <li><a className="navbar-brand" href="#">DFAB</a></li>
              <li><a href="#">新着作品</a></li>
              <li><a href="#">イベント</a></li>
            </ul>
            <Account {...this.props} />
          </div>
        </div>
        <CreateWork {...this.props} />
      </nav>
    )
  }
}

class Account extends Component {
  render() {
    const { me, openModal } = this.props
    const  { nickname, user_id }  = me
    const thumbnail_url = me.image ? CORE_CONTENTS_BASE_URL + me.image.thumb.url : ''
    if (Object.keys(me).length === 0) {
      return false
    } else {
      return (
        <ul className="nav navbar-nav navbar-right">
          <li><Button className="navbar-btn" bsStyle="primary" onClick={()=>openModal()}>作品投稿</Button></li>
          <li >
            <img className="avatar img-circle" src={thumbnail_url} />
          </li>
          <NavDropdown eventKey={1} title={nickname} id="basic-nav-dropdown">
            <LinkContainer to={'/users/' + user_id}>
              <MenuItem eventKey={3.1}>プロフィールを表示</MenuItem>
            </LinkContainer>
            <MenuItem divider/>
            <LinkContainer to="/logout">
              <MenuItem eventKey={3.2}>ログアウト</MenuItem>
            </LinkContainer>
          </NavDropdown>
        </ul>
      )
    }
  }
}

Header.propTypes = {
}

export default Header
