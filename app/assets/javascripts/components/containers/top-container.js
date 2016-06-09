import React, { Component, PropTypes } from 'react'
import Header from '../components/common-header-comp'
import Footer from '../components/common-footer-comp'
import * as Actions from '../actions/top-action' // 自分の action だけ import する
import CreationList from '../components/common-creation-list-comp'

// bootstrap import 必要な部分をcomponentでimportする
import { Carousel, Button, ButtonToolbar } from 'react-bootstrap'

let dummyCreationList = [
  { id: 1 },
  { id: 2 },
  { id: 3 }
]

class TopContainer extends Component {
  render() {
    return (
      <div>
        <Header />
        {/* この範囲でcomponetを作ってください */}
        <Carousel className="top-carousel">
          <Carousel.Item className="top-carousel-item">
            <a href="#">
              <img src="http://pipsum.com/900x300.jpg" />
            </a>
          </Carousel.Item>
          <Carousel.Item className="top-carousel-item">
            <a href="#">
              <img src="http://pipsum.com/900x300.jpg" />
            </a>
          </Carousel.Item>
          <Carousel.Item className="top-carousel-item">
            <a href="#">
              <img  src="http://pipsum.com/900x300.jpg" />
            </a>
          </Carousel.Item>
        </Carousel>

        <div className="top-pickup container">
          <h3 className="top-title">ピックアップ作品</h3>
          <CreationList creationList={dummyCreationList} />
        </div>
        <div className="top-tags container">
          <h3 className="top-title">注目のタグ</h3>
          <ButtonToolbar className="top-tag-box">
            <Button className="top-tag-button">タグ</Button>
            <Button className="top-tag-button">セーラームーン</Button>
            <Button className="top-tag-button">ハロウィン</Button>
          </ButtonToolbar>
        </div>
        <div className="top-new-creation container">
          <h3 className="top-title">注目の新着作品</h3>
          <CreationList creationList={dummyCreationList} />
        </div>
        {/* ここまでComponent */}
        <Footer />
      </div>
    )
  }
}

TopContainer.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(TopContainer)
