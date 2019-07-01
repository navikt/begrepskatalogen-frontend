import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/Store';
import { combineReducers, createStore } from '../../../../Library/Caches/typescript/3.5/node_modules/redux';
import searchReducer from './redux/reducers/SearchReducer';

const allReducers = combineReducers({
    search: searchReducer
})


console.log(store);
ReactDOM.render(
    <Provider store={ store } >
        <App/>
    </Provider>, 
    document.getElementById('app')
);
