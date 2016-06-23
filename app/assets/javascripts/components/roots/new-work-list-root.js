import React, { Component } from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import NewWorkListContainer from '../containers/new-work-list-container'
import { store } from '../store/store'
import { setNewWorkList } from '../actions/new-work-list-action'

export class NewWorkListRoot extends Component {

  componentWillMount() {
    store.dispatch(setNewWorkList(this.props))
    console.log(this.props)
  }

  render() {
    return (
      <Provider store={store}>
        <NewWorkListContainer />
      </Provider>
    )
  }
}
