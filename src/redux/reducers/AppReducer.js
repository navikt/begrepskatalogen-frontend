
export const initialState = {
    fancy: false,
    loading: false,
    items: [],
    counter: 0,
    search: '',
    seeAllTerms: false,
    approvedTerms: 0,
    numNotApprovedTerms: 0,
    hideNotApproved: false,
};


function appReducer(state = initialState, action) {
    switch (action.type) {
    	case 'TOGGLE_FANCY': 
    		return Object.assign({}, state, { fancy: !state.fancy });
        /*
        case 'search:updateSearch':
            console.log(action)
            return Object.assign({}, state, { search: action.search });
        */
        case 'FETCH_DATA_BEGIN':
            return Object.assign({}, state, { loading: true }); 
        case 'FETCH_DATA_COMPLETE':
            return Object.assign({}, state, { loading: false, items: action.items });
        
        case 'UPDATE_SEARCH':
            return Object.assign({}, state, { search: action.search, seeAllTerms: false });
        case 'TOGGLE_HIDDEN_TABLE':
            return Object.assign({}, state, { seeAllTerms: true, hideNotApproved: false });
        case 'NUM_APPROVED_TERMS':
            return Object.assign({}, state, { approvedTerms: action.approvedTerms });
        case 'NOT_APPROVED_TERMS':
                return Object.assign({}, state, { hideNotApproved: true });
        case 'NUM_NOT_APPROVED_TERMS':
                return Object.assign({}, state, { numNotApprovedTerms: action.numNotApprovedTerms });
        case 'ADD_ONE':
            return Object.assign({},state, {counter: state.counter+1});

        case 'ADD_X':
            return Object.assign({},state, {counter: action.payload}); 
            
        default:
            return state; 
    }
}

export default appReducer;