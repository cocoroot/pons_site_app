import React, { Component, PropTypes } from 'react'
import Creation from './Creation'

class AppCreationDetail extends Component {
  render() {
    const { creation } = this.props
    console.log("AppCreationDetail props=%o", creation)
    return (
      <div>
        <Creation creation={creation} />
      </div>
    )
  }
}

AppCreationDetail.propTypes = {
}

export default AppCreationDetail
