import { combineReducers } from 'redux';
import sample from './SampleReducers';

// combineReducers: helper function that turns an object into a single reducing function you can pass to createStore
const reducers = combineReducers({ sample });
export default reducers;



