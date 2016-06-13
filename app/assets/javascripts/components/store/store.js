import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { apiMiddleware } from 'redux-api-middleware'
import createLogger from 'redux-logger'
import rootReducer from '../reducers'

const logger = createLogger()

const createStoreWithMiddleware = applyMiddleware(
  apiMiddleware,
  thunk,
  logger
)(createStore)


function configureStore(initialState) {
  return createStoreWithMiddleware(rootReducer, initialState, window.devToolsExtension ? window.devToolsExtension() : f => f)
}

export const store = configureStore()


import { syncHistoryWithStore } from 'react-router-redux'
import { browserHistory } from 'react-router'

export const history = syncHistoryWithStore(browserHistory, store)
