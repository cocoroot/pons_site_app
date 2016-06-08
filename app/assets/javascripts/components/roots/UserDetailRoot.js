import React, { Component } from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import UserDetailApp from '../containers/UserDetailApp'
import configureStore from '../store/configureStore'
import { setUser, setCreations } from '../actions/user-detail'

const store = configureStore()

export class UserDetailRoot extends Component {

  componentWillMount() {
    store.dispatch(setUser(this.props.user))
    store.dispatch(setCreations(this.props))
  }
  render() {
    return (
      <Provider store={store}>
        <UserDetailApp />
      </Provider>
    )
  }
}
