import logger from 'redux-logger';
import { applyMiddleware, createStore } from 'redux';
import reducers from './reducers/RootReducer';

const store = createStore(reducers, applyMiddleware(logger));
export default store;