import React, { Component, PropTypes } from 'react'
import Creation from './Creation'

import { Grid, Row } from 'react-bootstrap'

class CreationList extends Component {
  render() {
    const { creationList } = this.props
    return (
      <Grid>
        <Row>
          {creationList.map(creation =>
            <Creation
              key={creation.id}
              {...creation}
            />
          )}
        </Row>
      </Grid>
    )
  }
}

CreationList.propTypes = {
  creationList: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default CreationList
