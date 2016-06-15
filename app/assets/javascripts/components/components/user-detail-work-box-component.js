import React, { Component, PropTypes } from 'react'
import WorkList from './common-work-list-component'

import { Tabs, Tab } from 'react-bootstrap'

class UserDetailWorkBox extends Component {
  render() {
    console.log("UserDetailWorkBox render props=%o", this.props)
    // TODO: tabKey を設定している場所がない？
    const { tabKey, originalWorks, favoriteWorks } = this.props
    return (
        <Tabs defaultActiveKey={tabKey} id="uncontrolled-tab">
          <Tab eventKey={1} title="オリジナル作品" >
            <div className="container">
              <WorkList workList={originalWorks} />
            </div>
          </Tab>
          <Tab eventKey={2} title="お気に入り" >
            <div className="container">
              <WorkList workList={favoriteWorks} />
            </div>
          </Tab>
        </Tabs>

    )
  }
}

UserDetailWorkBox.propTypes = {
}

export default UserDetailWorkBox
