import React, { Component, PropTypes } from 'react'

import { Button } from 'react-bootstrap'

class Header extends Component {
  render() {
    const { user } = this.props
    let base_url = 'http://localhost:3000/uploads/dev'

    return (
      <nav className="navbar navbar-default navbar-static-top">

        <div id="navbar">
          <div className="container">
            <ul className="nav navbar-nav">
              <li><a className="navbar-brand" href="#">DFAB</a></li>
              <li><a href="#">新着作品</a></li>
              <li><a href="#">イベント</a></li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
              <li><Button className="navbar-btn" bsStyle="primary">作品投稿</Button></li>

              <li >
                <a id="header-avatar" href="#">
                  {/*<div className="circle-avatar" style={{ backgroundImage: 'url(' + base_url + user.image.thumb.url + ')' }} ></div>*/}
                  <img className="avatar img-circle" src={base_url + user.image.thumb.url} />
                  ユーザ名<b className="caret"></b>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}

Header.propTypes = {
}

export default Header
