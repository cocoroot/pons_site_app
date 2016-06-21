import React, { Component, PropTypes } from 'react'
import Header from '../components/common-header-component'
import Footer from '../components/common-footer-component'
import WorkList from '../components/common-work-list-component'

// bootstrap import 必要な部分をcomponentでimportする
import { Button } from 'react-bootstrap'

let dummyWorkList = [
  { id: 1 },
  { id: 2 },
  { id: 3 }
]

export default class NewWorkListContainer extends Component {
  render() {
    const { newWorkList } = this.props.newWorkList
    console.log(this.props.newWorkList)
    return (
      <div>
        <Header />
        {/* この範囲でcomponetを作ってください */}
        <div className="new-work-list container">
          <WorkList workList={ newWorkList } />
          {/*<WorkList workList={dummyWorkList} />*/}
          <Button className="new-work-list-btn" bsSize="large" block>もっとみる</Button>
        </div>
        {/* ここまでComponent */}
        <Footer />
      </div>
    )
  }
}

NewWorkListContainer.propTypes = {
}
