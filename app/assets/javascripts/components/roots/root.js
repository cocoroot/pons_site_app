import { Component } from 'react'
import { Provider } from 'react-redux'

import { SiteRouter } from '../containers/site-router-container.js'

import { store } from '../store/store'

export class Root extends Component {
  render() {
    return(
      <Provider store={ store }>
	<SiteRouter store={ store } path={ this.props.path }/>
      </Provider>
    )
  }
}
