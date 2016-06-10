import React, { Component, PropTypes } from 'react'
import { IndexRoute, Link, Router, Route } from 'react-router'

import { store, history } from '../store/store'

import Login from '../containers/login-container'
import Sorry from '../containers/sorry-container'
import Top from '../containers/top-container'
import UserDetail from '../containers/user-detail-container'
import TestCreation from '../containers/test-creation-container'

class App extends Component {
  render() {
    return(
      <div>
        <div>
          <ul>
            <li><Link to="/login">login</Link></li>
            <li><Link to="/test-creations/1">creation: 1</Link></li>
            <li><Link to="/test-creations/2">creation: 2</Link></li>
            <li><Link to="/sorry">sorry</Link></li>
          </ul>
        </div>
        <div>
          {this.props.children}
        </div> 
      </div>
    )
  }
}

export class SiteRouter extends Component {
  componentWillMount() {
    if (this.props.path) {
      history.push(`/${this.props.path}`)
    }
  }
  
  requireAuth(nextState, replace) {
    if (!localStorage.access_token) {
      replace({
        pathname: '/login',
        state: {
          nextPathname: nextState.location.pathname
        }
      })
    }
  }

  enterTestCreation(nextState, replace) {
    // console.log("SiteRouterComponent enterTestCreation nextState=%o, this.props", nextState, this.props)
    TestCreation.onEnter(store.dispatch, nextState, replace)
  }
  
  render() {
    // console.log("SiteRouterComponent render props=%o", this.props)
    return(
      <Router history={ history }>
        <Route path="/" component={ App }>
          <IndexRoute component={ TestCreation } />
          <Route path="/creators/:creator_id" component={ UserDetail } onEnter={this.requireAuth} />
          <Route path="/test-creations/:creation_id" component={ TestCreation } onEnter={this.enterTestCreation} />
          <Route path="/login" component={ Login } />
          <Route path="/sorry" component={ Sorry } />
        </Route>
      </Router>
    )
  }
}
