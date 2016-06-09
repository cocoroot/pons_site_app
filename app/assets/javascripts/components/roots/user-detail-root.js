import React, { Component } from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import UserDetailContainer from '../containers/user-detail-container'
import configureStore from '../store/configure-store'
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
        <UserDetailContainer />
      </Provider>
    )
  }
}
