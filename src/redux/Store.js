import logger from 'redux-logger';
import { applyMiddleware, createStore } from 'redux';
import appReducer from './reducers/AppReducer';

const store = createStore(appReducer, applyMiddleware(logger));
export default store;