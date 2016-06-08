import React, { Component } from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import UserDetailConnector from './UserDetailConnector'
import configureStore from '../store/configureStore'
import { setUser } from '../actions/UserDetail_profile'
import { setCreations } from '../actions/UserDetail_creations'

const store = configureStore()

export class UserDetailRoot extends Component {

  componentWillMount() {
    store.dispatch(setUser(this.props.user))
    store.dispatch(setCreations(this.props))
  }
  render() {
    return (
      <Provider store={store}>
        <UserDetailConnector />
      </Provider>
    )
  }
}
