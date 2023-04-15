import {legacy_createStore,applyMiddleware} from 'redux'
import rootReducer from './reducers/index'
import {logger} from 'redux-logger'
const mystore=legacy_createStore(rootReducer,applyMiddleware(logger))
export default mystore;