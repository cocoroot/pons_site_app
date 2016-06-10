import { Component } from 'react'
import { Provider } from 'react-redux'
import { IndexRoute, Link, Router, Route } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import { browserHistory } from 'react-router'
import configureStore from '../store/configure-store'

import Login from '../containers/login-container'
import Top from '../containers/top-container'
import UserDetail from '../containers/user-detail-container'
import TestCreation from '../containers/test-creation-container'

import * as Actions from '../actions/core-api-action'

const store = configureStore()
const history = syncHistoryWithStore(browserHistory, store)

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

  componentWillReceiveProps(nextProps) {
    if (nextProps.requireLogin) {
      this.props.history.push('/login')
    }
  }

  enterCreation(nextState, replace) {
    console.log("Root enterCreation nextState=%o", nextState)
    // var creation_id
    // if (!nextState.params.creation_id) {
    //   creation_id = 0
    // } else {
    //   creation_id = nextState.params.creation_id
    // }
    store.dispatch(Actions.loadCreation(nextState.params.creation_id || 0))
  }
  
  render() {
    return(
      <Provider store={ store }>
        <Router history={ history }>
          <Route path="/site_app/index" component={ TestCreation }>
            <IndexRoute component={ TestCreation } />
            <Route path="/creators/:creator_id" component={ UserDetail } onEnter={this.requireAuth} />
            <Route path="/test-creations/:creation_id" component={ TestCreation } onEnter={this.enterCreation} />
            <Route path="/login" component={ Login } />
          </Route>
        </Router>
      </Provider>
    )
  }
}


import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { requireLogin } from '../actions/core-api-action'

function mapStateToProps(state) {
  return {
    
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    requireLogin
  }, dispatch)
}

connect(mapStateToProps, mapDispatchToProps)(Root)
