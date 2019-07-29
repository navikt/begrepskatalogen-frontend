export const initialState = {
    loading: false,
    items: [],
    search: '',
    filteredItems:[],
    hideNotApproved: false,
    filterList: [],
    isHiddenTable: true
};

function appReducer(state = initialState, action) {
    switch (action.type) {
        case 'FETCH_DATA_BEGIN':
            return Object.assign({}, state, { loading: true }); 
        case 'FETCH_DATA_COMPLETE':
            return Object.assign({}, state, { loading: false, items: action.items });
        case 'UPDATE_SEARCH':
            return Object.assign({}, state, { search: action.payload.search, seeAllTerms: false, hideNotApproved: false });
        case 'TOGGLE_SEE_ALL_TERMS':
            return Object.assign({}, state, { seeAllTerms: true, hideNotApproved: false, isHiddenTable: !state.isHiddenTable });
        case 'NUM_APPROVED_TERMS':
            return Object.assign({}, state, { approvedTerms: action.payload.approvedTerms });
        case 'NOT_APPROVED_TERMS':
                return Object.assign({}, state, { hideNotApproved: !state.hideNotApproved });
        case 'NUM_NOT_APPROVED_TERMS':
                return Object.assign({}, state, { numNotApprovedTerms: action.payload.numNotApprovedTerms });
        case 'ADD_FILTER':
            return {
                ...state,
                filterList: [...state.filterList, action.payload.newFilter]
            }
        case 'REMOVE_FILTER':
            return {
                ...state,
                filterList: state.filterList.filter(function(status) {
                    return status !== action.payload.oldFilter
                })
            }
        case 'ORDER_BY_ALPH':
            return Object.assign({}, state, { sort:  action.payload.sort});
        case 'ORDER_BY_BEGREPSEIER':
            return Object.assign({}, state, { sort: action.payload.sort});
        case 'TERM_KEY':
            return Object.assign({}, state, { termKey: action.payload.termKey });
        default:
            return state; 
    }
}

export default appReducer;
