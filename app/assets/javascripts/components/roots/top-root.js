import React, { Component } from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import TopContainer from '../containers/top-container'
import configureStore from '../store/configure-store'

const store = configureStore()

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
