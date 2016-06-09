import { render } from 'react-dom'

//----------------------------------------
// Actions
//----------------------------------------
const SET_CREATION = 'SET_CREATION'

function setCreation(creation) {
  return {
    type: SET_CREATION,
    creation: creation
  }
}

const SET_HEAD_MESSAGE = 'SET_HEAD_MESSAGE'

function setHeadMessage(message) {
  return {
    type: SET_HEAD_MESSAGE,
    headMessage: message
  }
}

//----------------------------------------
// Reducers
//----------------------------------------

//
// Top
//
function top(state = [], action) {
  console.log("top reducer action=%o", action)
  switch (action.type) {
  case SET_CREATION:
    return state
    case SET_HEAD_MESSAGE:
      return action.headMessage
    default:
      return state
  }
}

//
// creation
//
function creation(state = [], action) {
  switch (action.type) {
    case SET_CREATION:
      return action.creation
    default:
      return state
  }
}

//
// roodReducer
//
import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

const rootReducer = combineReducers({
  top: top,
  creation: creation,
  routing: routerReducer
})

//----------------------------------------
// Store
//----------------------------------------
import { createStore, applyMiddleware } from 'redux'
import createLogger from 'redux-logger'
import thunk from 'redux-thunk'

const logger = createLogger()

const createStoreWithMiddleware = applyMiddleware(
  thunk,
  logger
)(createStore)

function configureStore(initialState) {
  return createStoreWithMiddleware(rootReducer, initialState)
}

const store = configureStore()

//----------------------------------------
// function
//----------------------------------------
function fetchCreation(id) {
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
      console.log("CreationDetail json = %o", json)
      store.dispatch(setCreation(json))
    })
    .catch((error) => {
      console.warn(error)
    })
}

//----------------------------------------
// Components
//----------------------------------------
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

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

// 
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
    //fetchCreation(this.props.params.creation_id)
    console.log("CreationDetail componentWillmount")
    store.dispatch(setCreation({
      id: 1,
      creation_id: 1,
      title: 'たいとる',
      created_by: 'ゆーざ',
      published_at: 'いま',
      images: [
	{
	  key: 1,
	  id: 1,
	  image: '画像名.jpg',
	  url: 'http://aaaaaaaaaa.aaaa'
	}
      ]
    }))
  }

  render() {
    const { creation_id, title, created_by, published_at } = this.props.creation
    var images = this.props.creation.images || []
    
    return (
      <div>
	<h2>Creation {this.props.params.creation_id}</h2>
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
  handleLinkClick(id) {
    fetchCreation(id)
  }
  
  render() {
    const { creation } = this.props
    return (
      <div>
	<ul>
	  <li><Link to="/sample/show">Top</Link></li>
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
import { Provider } from 'react-redux'
import { IndexRoute, Link, Router, Route } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import { browserHistory } from 'react-router'

const history = syncHistoryWithStore(browserHistory, store)

export class SampleRoot extends Component {
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
	  <Route path="/sample/show" component={ App }>
            <IndexRoute component={ ConnectedTop } />
            <Route path="/creations/:creation_id" component={ ConnectedCreationDetail } onEnter={this.requireAuth} />
	    <Route path="/login" component={ Login } />
          </Route>
	</Router>
      </Provider>
    )
  }
}
