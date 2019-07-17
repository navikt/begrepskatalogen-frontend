export const initialState = {
    loading: false,
    items: [],
    search: '',
    seeAllTerms: false,
    approvedTerms: 0,
    numNotApprovedTerms: 0,
    hideNotApproved: false,
    filteredItems:[],
    updated: "",
    termKey: []
};

function appReducer(state = initialState, action) {
    switch (action.type) {
        case 'FETCH_DATA_BEGIN':
            return Object.assign({}, state, { loading: true }); 
        case 'FETCH_DATA_COMPLETE':
            return Object.assign({}, state, { loading: false, items: action.items });
        case 'UPDATE_SEARCH':
            return Object.assign({}, state, { search: action.search, seeAllTerms: false, hideNotApproved:false });
        case 'TOGGLE_SEE_ALL_TERMS':
            return Object.assign({}, state, { seeAllTerms: true, hideNotApproved: false });
        case 'NUM_APPROVED_TERMS':
            return Object.assign({}, state, { approvedTerms: action.approvedTerms });
        case 'NOT_APPROVED_TERMS':
                return Object.assign({}, state, { hideNotApproved: true });
        case 'NUM_NOT_APPROVED_TERMS':
                return Object.assign({}, state, { numNotApprovedTerms: action.numNotApprovedTerms });
        case 'SORT_BY':
            return{
                ...state,
                filteredItems : action.payload.items,
                updated: action.payload.updated
            };
        case 'ORDER_BY_ALPH':
            return Object.assign({}, state, { sort:  action.payload.sort});
        case 'ORDER_BY_BEGREPSEIER':
            return Object.assign({}, state, { sort: action.payload.sort});
        case 'TERM_KEY':
            return Object.assign({}, state, { termKey: action.termKey });
        default:
            return state; 
    }
}

export default appReducer;
