import React, { Component } from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import AppConnectorCreationDetail from './AppConnectorCreationDetail'
import configureStore from '../store/configureStore'
import { setCreation } from '../actions/creation'

const store = configureStore()

export class RootCreationDetail extends Component {

  componentWillMount() {
    //store.dispatch(attachNote(this.props.note))
    fetch('/api/creations/1', {
      method: 'GET',
      headers: {
	//'Accept': 'application/json',
	'Content-Type': 'application/json',
	'access_token': 'ZGlvbC3EmXps7OsgAdq17Tsp6opGZ3-Xn5jUDgjdM_Q'
      }
    })
      .then((response) => response.text())
      .then((responseText) => {
	console.log(responseText)
      })
      .catch((error) => {
	console.warn(error)
      })
    
    store.dispatch(setCreation(this.props.creation))
    console.log("RootCreationDetail this.proprs.creation = %o", this.props.creation)
  }

  render() {
    return (
	<Provider store={store}>
        <AppConnectorCreationDetail />
	</Provider>
    )
  }
}
