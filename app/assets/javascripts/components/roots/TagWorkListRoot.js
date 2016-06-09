import React, { Component } from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import TagWorkListApp from '../containers/TagWorkListApp'
import configureStore from '../store/configureStore'

const store = configureStore()

export class TagWorkListRoot extends Component {

  componentWillMount() {
  }
  render() {
    return (
      <Provider store={store}>
        <TagWorkListApp />
      </Provider>
    )
  }
}
