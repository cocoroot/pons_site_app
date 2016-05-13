import React, { Component, PropTypes } from 'react'
import CreationList from './CreationList'

class App extends Component {
  render() {
    const { creations } = this.props
    return (
      <div>
        <CreationList creations={creations} />
      </div>
    )
  }
}

App.propTypes = {
}

export default App
