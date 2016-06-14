import React, { Component } from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import WorkDetailContainer from '../containers/work-detail-container'
import { store } from '../store/store'

export class WorkDetailRoot extends Component {

  componentWillMount() {
  }

  render() {
    return (
      <Provider store={store}>
        <WorkDetailContainer />
      </Provider>
    )
  }
}
