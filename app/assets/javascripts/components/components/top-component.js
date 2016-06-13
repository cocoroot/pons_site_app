import React, { Component, PropTypes } from 'react'
import Header from '../components/common-header-component'
import Footer from '../components/common-footer-component'
import CreationList from '../components/common-creation-list-component'

// bootstrap import 必要な部分をcomponentでimportする
import { Carousel, Button, ButtonToolbar } from 'react-bootstrap'

export default class Top extends Component {
  render() {
    const {banners,pickupCreations,tags,newCreations} = this.props.top
    console.log(banners)
    return (
      <div>
        <Header />
        {/* banner */}
        <Carousel className="top-carousel">
          {banners.map((banner) => {
          return <Carousel.Item className="top-carousel-item" key={banner.id}><a href={banner.targetUrl}><img src={banner.imgUrl} /></a></Carousel.Item>
        })}
       </Carousel>

       {/* pickupCreations */}
        <div className="top-pickup container">
          <h3 className="top-title">ピックアップ作品</h3>
          <CreationList creationList={pickupCreations} />
        </div>

        {/* tags */}
        <div className="top-tags container">
          <h3 className="top-title">注目のタグ</h3>
          <ButtonToolbar className="top-tag-box">
            {tags.map((tag) => {
            return <a href={tag.url}><Button className="top-tag-button">{tag.name}</Button></a>
          })}
          </ButtonToolbar>
        </div>

        {/* newCreations */}
        <div className="top-new-creation container">
          <h3 className="top-title">注目の新着作品</h3>
          <CreationList creationList={newCreations} />
        </div>
        {/* ここまでComponent */}
        <Footer />
      </div>
    )
  }
}

Top.propTypes = {
}
