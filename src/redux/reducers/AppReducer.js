import { updateSearchText } from "../actions/AppActions";

export const initialState = {
    fancy: false,
    loading: false,
    items: [],
    counter: 0,
    //error: null

    searchText: '',
};


function appReducer(state = initialState, action) {
    switch (action.type) {
    	case 'TOGGLE_FANCY': 
    		return Object.assign({}, state, { fancy: !state.fancy });
            break;
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
            

            /*
        case 'FETCH_PRODUCTS_BEGIN':
            //mark state as "loading" for spinner. + reset errors for fresh start
            return{
                ...state,
                loading: true,
                error: null
            };
        
        case 'FETCH_PRODUCTS_SUCCESS':
            //When loading done, set to "loading to false"
            //replace items with the ones form server
            return{
                ...state,
                loading: false,
                items: action.payload.API
            }

        case 'FETCH_PRODUCTS_FAILURE':
            return{
                ...state,
                loading: false,
                error: action.payload.error,
                items: []
            }
*/


        case 'UPDATE_SEARCHTEXT':
            return Object.assign({}, state, {searchText: action.payload});
    

        default:
            return state; 
    }
}

export default appReducer;