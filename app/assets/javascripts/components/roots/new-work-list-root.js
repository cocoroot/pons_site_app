import React, { Component } from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import NewWorkListContainer from '../containers/new-work-list-container'
import configureStore from '../store/configure-store'

const store = configureStore()

export class NewWorkListRoot extends Component {

  componentWillMount() {
  }
  render() {
    return (
      <Provider store={store}>
        <NewWorkListContainer />
      </Provider>
    )
  }
}
