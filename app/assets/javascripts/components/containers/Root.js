import React, { Component } from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import AppConnector from './AppConnector'
import configureStore from '../store/configureStore'
import { setCreation } from '../actions/creation'
import { Creation } from '../components/Creation'
import { CreationList } from '../components/CreationList'

import { Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

const store = configureStore()

const history = syncHistoryWithStore(browserHistory, store)

export class Root extends Component {

  componentWillMount() {
    //store.dispatch(attachNote(this.props.note))
    store.dispatch(setCreation(this.props.creation))
  }
  render() {
    return (
      <Provider store={store}>
	<Router history={history}>
	  <Route path="/" component="{App}">
	    <Route path="/creantion" component={Creation} />
	    <Route path="/creation-list" component={CreationList} />
	  </Route>
	</Router>
        <AppConnector />
      </Provider>
    )
  }
}
