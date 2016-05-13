import React, { Component, PropTypes } from 'react'
import Creation from './Creation'

class CreationList extends Component {
  render() {
    const { creations } = this.props
    return (
      <ul>
        {creations.map(creation =>
          <Creation
            key={creation.id}
            {...creation}
          />
        )}
      </ul>
    )
  }
}

CreationList.propTypes = {
  creations: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default CreationList
