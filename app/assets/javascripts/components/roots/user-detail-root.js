import React, { Component } from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import UserDetailContainer from '../containers/user-detail-container'
import { store } from '../store/store'
import { setUser, setWorks } from '../actions/user-detail-action'

export class UserDetailRoot extends Component {

  componentWillMount() {
    store.dispatch(setUser(this.props.user))
    store.dispatch(setWorks(this.props))
  }

  render() {
    return (
      <Provider store={store}>
        <UserDetailContainer />
      </Provider>
    )
  }
}
