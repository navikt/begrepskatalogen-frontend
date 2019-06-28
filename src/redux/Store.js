import logger from 'redux-logger';
import { applyMiddelware, createStore } from 'redux';
import reducers from './reducers';

const store = createStore(reducers, applyMiddelware(logger));
export default store;