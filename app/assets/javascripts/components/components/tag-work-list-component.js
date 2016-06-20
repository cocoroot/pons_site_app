import React, { Component, PropTypes } from 'react'
import Header from './common-header-component'
import Footer from './common-footer-component'
import WorkList from './common-work-list-component'

// bootstrap import 必要な部分をcomponentでimportする
import { Button } from 'react-bootstrap'

let dummyWorkList = [
  { id: 1 },
  { id: 2 },
  { id: 3 }
]

export default class TagWorkList extends Component {
  render() {
    return (
      <div>
        <Header />
        {/* この範囲でcomponetを作ってください */}
        <div className="tag-work-list-title">
          <h3 className="tag-work-list-title-text">タグ名</h3>
        </div>
        <div className="tag-work-list-works container">
          <WorkList workList={dummyWorkList} />
          <Button className="tag-work-list-btn" bsSize="large" block>もっとみる</Button>
        </div>
        {/* ここまでComponent */}
        <Footer />
      </div>
    )
  }
}

TagWorkList.propTypes = {
}
