import React, { Component, PropTypes } from 'react'

import { Button } from 'react-bootstrap'

class Header extends Component {
  render() {
    const { user } = this.props
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
              <Button className="navbar-btn" bsStyle="primary">作品投稿</Button>
              <a href="#"></a>
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
