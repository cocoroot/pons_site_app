import React, { Component, PropTypes } from 'react'

import { Button, FormControl, Alert } from 'react-bootstrap'

export default class Login extends Component {
  onSubmit(e) {
    e.preventDefault()
    const { login } = this.props
    var form = document.forms[0]
    var loginId = form.loginId.value
    var password = form.password.value
    console.log("login loginId=%o, passwond=%o", loginId, password)
    login(loginId, password)
  }

  onFieldChanged(e) {
    if(e.target.name == 'loginId') {
      // console.log(e.target.value)
    } else if (e.target.name == 'password') {
      // console.log(e.target.value)
    }
  }

  render() {
    const { alertVisible, alertMessage } = this.props.login

    return(
      <div>
        <div className="login-body">
          <div className="login-container">
            {/*ロゴ画像*/}
            <div className="login-logo">
              <img src="http://dummyimage.com/200x100/888/fff.png" />
            </div>
            {/*アラート表示部*/}
            <AlertBox visible={alertVisible} message={alertMessage} />
            {/*フォーム*/}
            <div className="login-form">
              <form id="login-form" onChange={(e) => this.onFieldChanged(e)} onSubmit={(e) => this.onSubmit(e)}>
                <FormControl id="loginId" type="text" name="loginId" placeholder="ログインID" />
                <FormControl id="password" type="password" name="password" placeholder="パスワード" />

                <Button type="submit" bsStyle="primary" block>ログイン</Button>
              </form>
            </div>
            <p className="login-hint">パスワードをお忘れの方は<a href="#">こちら</a>よりお問い合わせください</p>
          </div>
        </div>
        {/* Footer */}
        <footer className="footer">
          <div className="container">
            <p className="footer-logo"><img src="/assets/dnp-logo.png" /></p>
            <p className="footer-copyright text-muted">Copyright 2016 Dai Nippon Printing Co., Ltd. All Rights Reserved.</p>
          </div>
        </footer>
      </div>
    )
  }
}

class AlertBox extends Component {
  render() {
    if(this.props.visible) {
      return (
        <Alert bsStyle="warning" className="login-alert">
          {this.props.message}
        </Alert>
      )
    } else {
      return null
    }
  }
}
