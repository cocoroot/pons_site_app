import React, { Component, PropTypes } from 'react'
import Header from '../components/common-header'
import Footer from '../components/common-footer'
import * as Actions from '../actions/new-work-list' // 自分の action だけ import する
import CreationList from '../components/common-creation-list'

// bootstrap import 必要な部分をcomponentでimportする
import { Button } from 'react-bootstrap'

let dummyCreationList = [
  { id: 1 },
  { id: 2 },
  { id: 3 }
]

class NewWorkListContainer extends Component {
  render() {
    return (
      <div>
        <Header />
        {/* この範囲でcomponetを作ってください */}
        <div className="new-work-list container">
          <CreationList creationList={dummyCreationList} />
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

//
// Connector
//
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

function mapStateToProps(state) {
  return {
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(NewWorkListContainer)
