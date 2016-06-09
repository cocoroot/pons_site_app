import React, { Component, PropTypes } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import * as Actions from '../actions/new-work-list' // 自分の action だけ import する
import CreationList from '../components/CreationList'

// bootstrap import 必要な部分をcomponentでimportする
import { Button } from 'react-bootstrap'

let dummyCreationList = [
  { id: 1 },
  { id: 2 },
  { id: 3 }
]

class NewWorkListApp extends Component {
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

NewWorkListApp.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(NewWorkListApp)
