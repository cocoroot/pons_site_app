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
// Login
//
class Login extends Component {
  render() {
    return <div>Login</div>
  }
}

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

class Image extends Component {
  render() {
    var image = this.props.image
    if (image == null) return null
    return (
      <li>{ image.url }, { image.image_name_for_user }</li>
    )
  }
}
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
    var images = this.props.creation.images || []
    console.log("CreationDetail images=%o", images)
    
    return (
      <div>
        <h3>{title}</h3>
        <ul>
          <li>id: {creation_id}</li>
          <li>created by: {created_by}</li>
          <li>published at: {published_at}</li>
          <li>
            <ul>{ images.map((image) => { return <Image key={image.key} image={image} /> }) } </ul>
          </li>
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
  requireAuth(nextState, replace) {
    localStorage.access_token = 'dummy-token'
    if (!localStorage.access_token) {
      replace({
	pathname: '/login',
	state: {
	  nextPathname: nextState.location.pathname
	}
      })
    }
  }
  
  render() {
    return(
      <Provider store={ store }>
	<Router history={ history }>
	  <Route path="/top/index" component={ App }>
            <IndexRoute component={ ConnectedTop } />
            <Route path="/creations/:creation_id" component={ ConnectedCreationDetail } onEnter={this.requireAuth} />
	    <Route path="/login" component={ Login } />
          </Route>
	</Router>
      </Provider>
    )
  }
}
