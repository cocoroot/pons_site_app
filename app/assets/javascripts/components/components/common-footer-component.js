import React, { Component, PropTypes } from 'react'

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="container">
          <p className="footer-links">
            <a href="#">利用規約</a>
            <a href="#">ガイドライン</a>
            <a href="#">プライバシーポリシー</a>
            <a href="#">よくあるご質問</a>
            <a href="#">運営会社・お問い合わせ</a>
          </p>
          <p className="footer-logo"><img src="/assets/dnp-logo.png" /></p>
          <p className="footer-copyright text-muted">Copyright 2016 Dai Nippon Printing Co., Ltd. All Rights Reserved.</p>
        </div>
      </footer>
    )
  }
}

Footer.propTypes = {
}

export default Footer
