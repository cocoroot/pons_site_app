import React, { Component } from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import TopApp from '../containers/TopApp'
import configureStore from '../store/configureStore'

const store = configureStore()

export class TopRoot extends Component {

  componentWillMount() {
  }
  render() {
    return (
      <Provider store={store}>
        <TopApp />
      </Provider>
    )
  }
}
