import React, { Component, PropTypes } from 'react'
import CreationList from './common-creation-list'

import { Tabs, Tab } from 'react-bootstrap'

class UserDetailCreationBox extends Component {
  render() {
    const { tabKey, originalCreations, favoriteCreations } = this.props.creations
    return (
        <Tabs defaultActiveKey={tabKey} id="uncontrolled-tab">
          <Tab eventKey={1} title="オリジナル作品" >
            <div className="container">
              <CreationList creationList={originalCreations} />
            </div>
          </Tab>
          <Tab eventKey={2} title="お気に入り" >
            <div className="container">
              <CreationList creationList={favoriteCreations} />
            </div>
          </Tab>
        </Tabs>

    )
  }
}

UserDetailCreationBox.propTypes = {
}

export default UserDetailCreationBox
