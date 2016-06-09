import React, { Component } from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import NewWorkListApp from '../containers/NewWorkListApp'
import configureStore from '../store/configureStore'

const store = configureStore()

export class NewWorkListRoot extends Component {

  componentWillMount() {
  }
  render() {
    return (
      <Provider store={store}>
        <NewWorkListApp />
      </Provider>
    )
  }
}
