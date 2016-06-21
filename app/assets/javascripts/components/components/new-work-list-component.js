import React, { Component, PropTypes } from 'react'
import Header from '../components/common-header-component'
import Footer from '../components/common-footer-component'
import WorkList from '../components/common-work-list-component'

import { Button } from 'react-bootstrap'

export default class NewWorkList extends Component {
  onLoadMoreWork(e) {
    const works = this.props.works
    const offset = works.length
    this.props.loadNewWorkList(offset)
  }
  
  render() {
    console.log("NewWorkList render props=%o", this.props)
    const { works, control } = this.props
    const { allWorksLoaded } = control

    return (
      <div>
        {/* この範囲でcomponetを作ってください */}
        <div className="new-work-list container">
          <WorkList workList={ works } />
          {
            (() => {
              if (!allWorksLoaded) {
                return (
                  <Button className="new-work-list-btn" bsSize="large" onClick={(e) => this.onLoadMoreWork(e)} block>もっとみる</Button>
                )
              }
            })()
          }
          
        </div>
        {/* ここまでComponent */}
      </div>
    )
  }
}

NewWorkList.propTypes = {
}
