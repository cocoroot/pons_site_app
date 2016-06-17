import React, { Component } from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import RegistContainer from '../containers/ragist-container'
import { store } from '../store/store'

export class RegistRoot extends Component {

  componentWillMount() {
  }
  render() {
    return (
      <Provider store={store}>
        <RegistContainer />
      </Provider>
    )
  }
}
