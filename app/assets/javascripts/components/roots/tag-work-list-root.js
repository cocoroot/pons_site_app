import React, { Component } from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import TagWorkListContainer from '../containers/tag-work-list-container'
import { store } from '../store/store'

export class TagWorkListRoot extends Component {

  componentWillMount() {
  }

  render() {
    return (
      <Provider store={store}>
        <TagWorkListContainer />
      </Provider>
    )
  }
}
