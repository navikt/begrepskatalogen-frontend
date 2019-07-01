const initialState = {
    fancy: false
};

function appReducer(state = initialState, action) {
    switch (action.type) {
    	case 'TOGGLE_FANCY': 
    		return Object.assign({}, state, { fancy: !state.fancy });
    		break;
        default:
            return state
    }

    return state;
}

export default appReducer;