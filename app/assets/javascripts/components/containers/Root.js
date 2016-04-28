import React, { Component } from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import AppConnector from './AppConnector'
import configureStore from '../store/configureStore'
import { setCreations } from '../actions/creations'

const store = configureStore()

export class Root extends Component {

  componentWillMount() {
    console.log("Root componentWillMount() this.props=%o", this.props)
    //store.dispatch(attachNote(this.props.note))
    store.dispatch(setCreations(this.props.creations))
  }
  render() {
    return (
      <Provider store={store}>
        <AppConnector />
      </Provider>
    )
  }
}
