import React, { Component, PropTypes } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import * as Actions from '../actions/tag-work-list' // 自分の action だけ import する
import CreationList from '../components/CreationList'

// bootstrap import 必要な部分をcomponentでimportする
import { Button } from 'react-bootstrap'

let dummyCreationList = [
  { id: 1 },
  { id: 2 },
  { id: 3 }
]

class TagWorkListApp extends Component {
  render() {
    return (
      <div>
        <Header />
        {/* この範囲でcomponetを作ってください */}
        <div className="tag-work-list-title">
          <h3 className="tag-work-list-title-text">タグ名</h3>
        </div>
        <div className="tag-work-list-creations container">
          <CreationList creationList={dummyCreationList} />
          <Button className="tag-work-list-btn" bsSize="large" block>もっとみる</Button>
        </div>
        {/* ここまでComponent */}
        <Footer />
      </div>
    )
  }
}

TagWorkListApp.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(TagWorkListApp)
