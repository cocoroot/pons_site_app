import React, { Component, PropTypes } from 'react'
import Work from './common-work-component'

import { Row } from 'react-bootstrap'

class WorkList extends Component {
  render() {
    const { workList = [] } = this.props
    return (
      // <Grid>
        <Row>
          {workList.map(work =>
            <Work
              key={work.id}
              {...work}
            />
          )}
        </Row>
      // </Grid>
    )
  }
}

WorkList.propTypes = {
  workList: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default WorkList
