import React, { Component, PropTypes } from 'react'
import { Button } from 'react-bootstrap'

import { CORE_CONTENTS_BASE_URL } from '../settings'

class Header extends Component {
  render() {
    const { me } = this.props
    // let base_url = 'http://localhost:3000/uploads/dev'

    return (
      <nav className="navbar navbar-default navbar-static-top">

        <div id="navbar">
          <div className="container">
            <ul className="nav navbar-nav">
              <li><a className="navbar-brand" href="#">DFAB</a></li>
              <li><a href="#">新着作品</a></li>
              <li><a href="#">イベント</a></li>
            </ul>
            <Account me={me} />
          </div>
        </div>
      </nav>
    )
  }
}

class Account extends Component {
  render() {
    const { me } = this.props
    const nickname = me.nickname
    const thumbnail_url = me.image ? CORE_CONTENTS_BASE_URL + me.image.thumb.url : ''
    if (Object.keys(me).length === 0) {
      return false
    } else {
      return (
        <ul className="nav navbar-nav navbar-right">
          <li><Button className="navbar-btn" bsStyle="primary">作品投稿</Button></li>
          <li >
            <a id="header-avatar" href="#">
              {/*<div className="circle-avatar" style={{ backgroundImage: 'url(' + base_url + user.image.thumb.url + ')' }} ></div>*/}
              <img className="avatar img-circle" src={thumbnail_url} />
              {nickname}<b className="caret"></b>
            </a>
          </li>
        </ul>
      )
    }
  }
}

Header.propTypes = {
}

export default Header
