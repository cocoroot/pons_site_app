import React, { Component, PropTypes } from 'react'
import CreationList from './CreationList'

class App extends Component {
  render() {
    const { creations } = this.props
    console.log("App render() this.props= %o, creations=%o", this.props, creations)
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
