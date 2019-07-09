import { updateSearchText } from "../actions/AppActions";

export const initialState = {
    fancy: false,
    loading: false,
    items: [],
    counter: 0,
    searchText: '',
};


function appReducer(state = initialState, action) {
    switch (action.type) {
    	case 'TOGGLE_FANCY': 
    		return Object.assign({}, state, { fancy: !state.fancy });

        case 'search:updateSearch':
            console.log(action)
            return Object.assign({}, state, { search: action.search });
        case 'FETCH_DATA_BEGIN':
            return Object.assign({}, state, { loading: true }); 
        case 'FETCH_DATA_COMPLETE':
            return Object.assign({}, state, { items: action.payload });
            
        case 'ADD_ONE':
            return Object.assign({},state, {counter: state.counter+1});

        case 'ADD_X':
            return Object.assign({},state, {counter: action.payload}); 
            
        default:
            return state; 
    }
}

export default appReducer;