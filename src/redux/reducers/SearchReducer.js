import { UPDATE_SEARCH } from '../actions/SearchAction';

export default function searchReducer(state='HALLA',{type,payload}){
    switch (type){
        case UPDATE_SEARCH:
            return payload;
        default:
            return search;
    }
}