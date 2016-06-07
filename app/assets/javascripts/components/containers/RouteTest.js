import React, { Component } from 'react'
import { render } from 'react-dom'
import { IndexRoute, Link, Router, Route, browserHistory } from 'react-router'
import { bindActionCreators } from 'redux'
import { Provider, connect } from 'react-redux'
import { syncHistoryWithStore } from 'react-router-redux'
import configureStore from '../store/configureStore'

import * as Actions from '../actions'

const store = configureStore()

const history = syncHistoryWithStore(browserHistory, store)

//----------------------------------------
// Components
//----------------------------------------

//
// Top
//
class Top extends Component {
  render() {
    return <div>Top</div>
  }
}

const setHeadMessage = Actions.setHeadMessage
var ConnectedTop = connect((state) => {
  return {
    headMessage: state.headMessage
  }
}, (dispatch) => {
  return bindActionCreators({
    setHeadMessage
  }, dispatch)
})(Top)


//
// CreationDetail
//
class CreationDetail extends Component {

  componentWillMount() {
    this.fetchCreation(this.props.params.creation_id)
  }
  
  fetchCreation(id) {
    fetch('/api/creations/' + id, {
      method: 'GET',
      headers: {
	'Accept': 'application/json',
	'Content-Type': 'application/json',
	'access_token': 'ZGlvbC3EmXps7OsgAdq17Tsp6opGZ3-Xn5jUDgjdM_Q'
      }
    })
      .then((response) => response.json())
      .then(json => {
	//console.log(responseText)
	//var json = JSON.parse(responseText)
	console.log("CreationDetail json = %o", json)
	store.dispatch(setCreation(json))
      })
      .catch((error) => {
	console.warn(error)
      })
  }
  
  render() {
    console.log("CreationDetail props=%o", this.props)
    const { creation_id, title, created_by, published_at } = this.props.creation
    return (
      <div>
        <h3>{title}</h3>
        <ul>
          <li>id: {this.props.params.creation_id}</li>
          <li>created by: {created_by}</li>
          <li>published at: {published_at}</li>
        </ul>
      </div>
    )
  }
}

const setCreation = Actions.setCreation
var ConnectedCreationDetail = connect((state) => {
  return {
    creation: state.creation
  }
}, (dispatch) => {
  return bindActionCreators({
    setCreation
  }, dispatch)
})(CreationDetail)


//----------------------------------------
// App
//----------------------------------------
class App extends Component {
  render() {
    const { creation } = this.props
    return (
      <div>
	<ul>
	  <li><Link to="/top/index">Top</Link></li>
	  <li><Link to="/creations/1">creation 1</Link></li>
	  <li><Link to="/creations/2">creation 2</Link></li>
	</ul>
	<div>
	  {
	    this.props.children
	  }
	</div>
      </div>
    )
  }
}


//----------------------------------------
// Root
//----------------------------------------
export class Root extends Component {
  // componentWillMount() {
  //   store.dispatch(Actions.setCreation(this.props.creation))
  // }
  
  render() {
    return(
      <Provider store={ store }>
	<Router history={ history }>
	  <Route path="/top/index" component={ App }>
            <IndexRoute component={ ConnectedTop } />
            <Route path="/creations/:creation_id" component={ ConnectedCreationDetail } />
          </Route>
	</Router>
      </Provider>
    )
  }
}
