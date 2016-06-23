import React, { Component, PropTypes } from 'react'
import WorkList from '../components/common-work-list-component'

// bootstrap import 必要な部分をcomponentでimportする
import { Carousel, Button, ButtonToolbar } from 'react-bootstrap'

export default class Top extends Component {
  render() {
    const { banners, pickupWorks, tags, newWorks } = this.props
    console.log("Top props=%o", this.props)
    return (
      <div>
        {/* banner */}
        <Carousel className="top-carousel">
          {
            banners.map((banner) => {
              return (
		<Carousel.Item className="top-carousel-item" key={ banner.id }>
                  <a href={ banner.targetUrl }>
                    <img src={ banner.imgUrl } />
                  </a>
		</Carousel.Item>
              )
            } )
          }
        </Carousel>

        {/* pickupWorks */}
        <div className="top-pickup container">
          <h3 className="top-title">ピックアップ作品</h3>
          <WorkList workList={ pickupWorks } />
        </div>

        {/* tags */}
        <div className="top-tags container">
          <h3 className="top-title">注目のタグ</h3>
          <ButtonToolbar className="top-tag-box">
            {tags.map((tag) => {
              return <a href={ tag.url } key={ tag.id }><Button className="top-tag-button" key={ tag.id }>{ tag.name }</Button></a>
            })}
          </ButtonToolbar>
        </div>

        {/* newWorks */}
        <div className="top-new-work container">
          <h3 className="top-title">注目の新着作品</h3>
          <WorkList workList={newWorks} />
        </div>
        {/* ここまでComponent */}
      </div>
    )
  }
}

Top.propTypes = {
}
