import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import * as reducers from './reducers'

export default () => {
  const logger = createLogger({ collapsed: true })
  const createReducer = () => combineReducers(reducers)

  return createStore(
    createReducer(),
    applyMiddleware(thunk, logger)
  )
}

