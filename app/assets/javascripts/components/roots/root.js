import { Component } from 'react'
import { Provider } from 'react-redux'
import { IndexRoute, Link, Router, Route } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import { browserHistory } from 'react-router'
import configureStore from '../store/configure-store'

import Login from '../containers/login-container'
import Top from '../containers/top-container'
import UserDetail from '../containers/user-detail-container'

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
  
  render() {
    return(
      <Provider store={ store }>
        <Router history={ history }>
          <Route path="/site_app/index" component={ Top }>
            <IndexRoute component={ Top } />
            <Route path="/creators/:creator_id" component={ UserDetail } onEnter={this.requireAuth} />
            <Route path="/login" component={ Login } />
          </Route>
        </Router>
      </Provider>
    )
  }
}
