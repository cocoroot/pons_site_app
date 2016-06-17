import React, { Component, PropTypes } from 'react'
import { IndexRoute, Link, Router, Route } from 'react-router'

import { store, history } from '../store/store'

import Login from '../containers/login-container'
import Sorry from '../containers/sorry-container'

import Top from '../containers/top-container'
import TagWorkList from '../containers/tag-work-list-container'
import NewWorkList from '../containers/new-work-list-container'

import UserDetail from '../containers/user-detail-container'

import TestMe from '../containers/test-me-container'
import TestUser from '../containers/test-user-container'
import TestCreation from '../containers/test-creation-container'

import Header from '../components/common-header-component'
import Footer from '../components/common-footer-component'

import { Button, Navbar, Nav, NavItem } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

import Regist from '../containers/register-container'

class App extends Component {
  constructor() {
    super()
    this.onResetAccessToken = this.onResetAccessToken.bind(this)
  }

  // TODO: 開発用
  onResetAccessToken() {
    localStorage.access_token_bak = localStorage.access_token
    localStorage.access_token = 'ZGlvbC3EmXps7OsgAdq17Tsp6opGZ3-Xn5jUDgjdM_Q'
  }

  render() {
    return(
      <div>
        <div>

          <Navbar>
            <Navbar.Header>
              <Navbar.Brand>
                <Link to="/">Top</Link>
              </Navbar.Brand>
            </Navbar.Header>
            <Nav bsStyle="tabs">
              <LinkContainer to="/login"><NavItem>login</NavItem></LinkContainer>
              <LinkContainer to="/test-creations/1"><NavItem>creation: 1</NavItem></LinkContainer>
              <LinkContainer to="/test-creations/2"><NavItem>creation: 2</NavItem></LinkContainer>
              <LinkContainer to="/test-users/1"><NavItem>user: 1</NavItem></LinkContainer>
              <LinkContainer to="/test-users/2"><NavItem>user: 2</NavItem></LinkContainer>
              <LinkContainer to="/test-me"><NavItem>me</NavItem></LinkContainer>
              <LinkContainer to="/sorry"><NavItem>sorry</NavItem></LinkContainer>
              <LinkContainer to="/regist"><NavItem>regist</NavItem></LinkContainer>

            </Nav>
            <Nav pullRight>
              <NavItem><Button onClick={this.onResetAccessToken}>Reset Access Token</Button></NavItem>
            </Nav>
          </Navbar>
        </div>
        <Header />
        {this.props.children}
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

  onEnterTop(nextState, replace) { Top.onEnter(store.dispatch, nextState, replace) }
  onEnterTestMe(nextState, replace) { TestMe.onEnter(store.dispatch, nextState, replace) }
  onEnterTestUser(nextState, replace) { TestUser.onEnter(store.dispatch, nextState, replace) }
  onEnterTestCreation(nextState, replace) { TestCreation.onEnter(store.dispatch, nextState, replace) }

  onEnterRegist(nextState, replace) { Regist.onEnter(store.dispatch, nextState, replace) }

  render() {
    // console.log("SiteRouterComponent render props=%o", this.props)
    return(
      <Router history={ history }>
        <Route path="/login" component={ Login } />
        <Route path="/" component={ App }>
          <IndexRoute component={ Top } onEnter={ this.onEnterTop } />
          <Route path="/" component={ Top } onEnter={ this.onEnterTop }/>
          <Route path="/creators/:creator_id" component={ UserDetail } onEnter={this.requireAuth} />
          <Route path="/test-users/:user_id" component={ TestUser } onEnter={this.onEnterTestUser} />
          <Route path="/test-me" component={ TestMe } onEnter={this.onEnterTestMe} />
          <Route path="/test-creations/:creation_id" component={ TestCreation } onEnter={this.onEnterTestCreation} />
          <Route path="/sorry" component={ Sorry } />
          <Route path="/regist" component={ Regist } onEnter={ this.onEnterRegist }/>
        </Route>
      </Router>
    )
  }
}

// <route path="/tags/:tag_name/works" component={ TagWorkList } onEnter={ this.onEnterTagWorkList } />
//           <route path="/works/new" component={ NewWorkList } onEnter={ this.onEnterNewWorkList } />
