import React, { Component } from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import TopContainer from '../containers/top-container'
import { store } from '../store/store'

import { setBanners, setPickupWorks, setTags, setNewWorks } from '../actions/top-action'

export class TopRoot extends Component {

  componentWillMount() {
    store.dispatch(setBanners(this.props.banners))
    store.dispatch(setPickupWorks(this.props.pickupWorks))
    store.dispatch(setTags(this.props.tags))
    store.dispatch(setNewWorks(this.props.newWorks))
    console.log(this.props.banners)
  }
  render() {
    return (
      <Provider store={store}>
        <TopContainer />
      </Provider>
    )
  }
}
