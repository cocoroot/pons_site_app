import React, { Component, PropTypes } from 'react'
import WorkList from './common-work-list-component'

import { Tabs, Tab } from 'react-bootstrap'

class UserDetailWorkBox extends Component {
  render() {
    console.log("UserDetailWorkBox render props=%o", this.props)
    const { tabKey, originalWorks, favoriteWorks, changeTab } = this.props

    var workList
    if (tabKey==1) {
      workList = originalWorks
    } else {
      workList = favoriteWorks
    }

    return (
      <div className="container">
        <ul className="nav nav-tabs">
          <li role="presentation" className={tabKey==1 ? 'active': null}><a onClick={()=>changeTab(1)}>オリジナル</a></li>
          <li role="presentation" className={tabKey==2 ? 'active': null}><a onClick={()=>changeTab(2)}>お気に入り</a></li>
        </ul>
        <div className="userdetail-worklist">
          <WorkList workList={workList} />
        </div>
      </div>
    )
  }
}

UserDetailWorkBox.propTypes = {
}

export default UserDetailWorkBox
