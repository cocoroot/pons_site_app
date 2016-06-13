import React, { Component } from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import TopContainer from '../containers/top-container'
import { store } from '../store/store'

export class TopRoot extends Component {

  componentWillMount() {
  }
  render() {
    return (
      <Provider store={store}>
        <TopContainer />
      </Provider>
    )
  }
}
