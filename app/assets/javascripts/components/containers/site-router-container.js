import React, { Component, PropTypes } from 'react'
import { IndexRoute, Link, Router, Route } from 'react-router'

import { store, history } from '../store/store'

import Login from '../containers/login-container'
import Sorry from '../containers/sorry-container'

import Top from '../containers/top-container'
import TagWorkList from '../containers/tag-work-list-container'
import NewWorkList from '../containers/new-work-list-container'

import UserDetail from '../containers/user-detail-container'
import WorkDetail from '../containers/work-detail-container'

import TestMe from '../containers/test-me-container'
import TestUser from '../containers/test-user-container'
import TestWork from '../containers/test-work-container'
import TestApiCalls from '../containers/test-api-calls-container'

import Header from '../containers/header-container'
import Footer from '../components/common-footer-component'

import { Button, Navbar, Nav, NavItem } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

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
              <LinkContainer to="/users/1"><NavItem>user: 1</NavItem></LinkContainer>
              <LinkContainer to="/users/2"><NavItem>user: 2</NavItem></LinkContainer>
              <LinkContainer to="/works/1"><NavItem>work: 1</NavItem></LinkContainer>
              <LinkContainer to="/works/2"><NavItem>work: 2</NavItem></LinkContainer>
              <LinkContainer to="/test-users/1"><NavItem>test user: 1</NavItem></LinkContainer>
              <LinkContainer to="/test-users/2"><NavItem>test user: 2</NavItem></LinkContainer>
              <LinkContainer to="/test-me"><NavItem>me</NavItem></LinkContainer>
              <LinkContainer to="/test-api-calls"><NavItem>API Test</NavItem></LinkContainer>
              <LinkContainer to="/sorry"><NavItem>sorry</NavItem></LinkContainer>
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

  onEnterRoot(nextState, replace) { Header.onEnter(store.dispatch, nextState, replace) }
  onEnterTop(nextState, replace) { Top.onEnter(store.dispatch, nextState, replace) }
  onEnterUserDetail(nextState, replace) { UserDetail.onEnter(store.dispatch, nextState, replace) }
  onEnterWorkDetail(nextState, replace) { WorkDetail.onEnter(store.dispatch, nextState, replace) }

  // TODO: 要削除　テスト用
  onEnterTestMe(nextState, replace) { TestMe.onEnter(store.dispatch, nextState, replace) }
  onEnterTestUser(nextState, replace) { TestUser.onEnter(store.dispatch, nextState, replace) }
  onEnterTestWork(nextState, replace) { TestWork.onEnter(store.dispatch, nextState, replace) }
  onEnterTestApiCalls(nextState, replace) { TestApiCalls.onEnter(store.dispatch, nextState, replace) }

  render() {
    // console.log("SiteRouterComponent render props=%o", this.props)
    return(
      <Router history={ history }>
        <Route path="/login" component={ Login } />
        <Route path="/" component={ App } onEnter={ this.onEnterRoot }>
          <IndexRoute component={ Top } onEnter={ this.onEnterTop } />
          <Route path="/" component={ Top } onEnter={ this.onEnterTop }/>
          <Route path="/users/:user_id" component={ UserDetail } onEnter={this.onEnterUserDetail} />
          <Route path="/works/:work_id" component={ WorkDetail } onEnter={this.onEnterWorkDetail} />
          <Route path="/test-users/:user_id" component={ TestUser } onEnter={this.onEnterTestUser} />
          <Route path="/test-me" component={ TestMe } onEnter={this.onEnterTestMe} />
          <Route path="/test-works/:work_id" component={ TestWork } onEnter={this.onEnterTestWork} />
          <Route path="/test-api-calls" component={ TestApiCalls } onEnter={this.onEnterTestApiCalls} />
          <Route path="/sorry" component={ Sorry } />
        </Route>
      </Router>
    )
  }
}
