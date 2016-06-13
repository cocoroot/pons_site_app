import React, { Component } from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import TopContainer from '../containers/top-container'
import { store } from '../store/store'

import {setBanners,setPickupCreations,setTags,setNewCreations} from "../actions/top-action"

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
