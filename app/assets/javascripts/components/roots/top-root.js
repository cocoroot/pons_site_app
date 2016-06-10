import React, { Component } from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import TopContainer from '../containers/top-container'
import configureStore from '../store/configure-store'
import {setBanners,setPickupCreations,setTags,setNewCreations} from "../actions/top-action"

const store = configureStore()

export class TopRoot extends Component {

  componentWillMount() {
    store.dispatch(setBanners(this.props.banners))
    store.dispatch(setPickupCreations(this.props.pickupCreations))
    store.dispatch(setTags(this.props.tags))
    store.dispatch(setNewCreations(this.props.newCreations))
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
