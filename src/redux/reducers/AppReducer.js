const initialState = {
    fancy: false
};

function appReducer(state = initialState, action) {
    switch (action.type) {
    	case 'TOGGLE_FANCY': 
    		return Object.assign({}, state, { fancy: !state.fancy });
            break;
        case 'search:updateSearch':
            console.log(action)
            return Object.assign({}, state, { search: action.search });
        default:
            return state 
    }

    return state;
}

export default appReducer;