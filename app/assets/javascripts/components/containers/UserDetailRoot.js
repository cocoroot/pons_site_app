import React, { Component } from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import UserDetailConnector from './UserDetailConnector'
import configureStore from '../store/configureStore'
import { setUser } from '../actions/user'

const store = configureStore()

export class UserDetailRoot extends Component {

  componentWillMount() {
    store.dispatch(setUser(this.props.user))
  }
  render() {
    return (
      <Provider store={store}>
        <UserDetailConnector />
      </Provider>
    )
  }
}
