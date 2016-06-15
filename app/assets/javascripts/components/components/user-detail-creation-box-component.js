import React, { Component, PropTypes } from 'react'
import CreationList from './common-creation-list-component'

import { Tabs, Tab } from 'react-bootstrap'

class UserDetailCreationBox extends Component {
  render() {
    console.log("UserDetailCreationBox render props=%o", this.props)
    // TODO: tabKey を設定している場所がない？
    const { tabKey, originalWorks, favoriteWorks } = this.props
    return (
        <Tabs defaultActiveKey={tabKey} id="uncontrolled-tab">
          <Tab eventKey={1} title="オリジナル作品" >
            <div className="container">
              <CreationList creationList={originalWorks} />
            </div>
          </Tab>
          <Tab eventKey={2} title="お気に入り" >
            <div className="container">
              <CreationList creationList={favoriteWorks} />
            </div>
          </Tab>
        </Tabs>

    )
  }
}

UserDetailCreationBox.propTypes = {
}

export default UserDetailCreationBox
