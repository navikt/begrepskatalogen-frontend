import { createLogger } from 'redux-logger';
import { applyMiddleware, createStore, combineReducers } from 'redux';
import thunk  from 'redux-thunk';
import promise from 'redux-promise-middleware';
import appReducer from './reducers/AppReducer';
import searchReducer from './reducers/SearchReducer';

const logger = createLogger();
const middleware = applyMiddleware(promise, thunk, logger);
/*const reducers = combineReducers({
    searchReducer,
    appReducer
})*/

const store = createStore(appReducer, middleware);
console.log("Store state", store.getState());
export default store;