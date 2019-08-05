export const initialState = {
    loading: false,
    items: [],
    search: '',
    hideNotApproved: false,
    filters: [],
    isHiddenTable: true,
    item: undefined
};

function appReducer(state = initialState, action) {
    switch (action.type) {
        case 'FETCH_DATA_BEGIN':
            return Object.assign({}, state, { loading: true }); 
        case 'FETCH_DATA_COMPLETE':
            return Object.assign({}, state, { loading: false, items: action.items });
        case 'FETCH_ITEM_BEGIN':
            return Object.assign({}, state, { loading: true }); 
        case 'FETCH_ITEM_COMPLETE':
            return Object.assign({}, state, { loading: false, item: action.item });
        case 'UPDATE_SEARCH':
            return Object.assign({}, state, { search: action.payload.search, seeAllTerms: false, hideNotApproved: false });
        case 'TOGGLE_SEE_ALL_TERMS':
            return Object.assign({}, state, { seeAllTerms: true, hideNotApproved: false, isHiddenTable: false });
        case 'NUM_APPROVED_TERMS':
            return Object.assign({}, state, { approvedTerms: action.payload.approvedTerms });
        case 'NOT_APPROVED_TERMS':
                return Object.assign({}, state, { hideNotApproved: !state.hideNotApproved });
        case 'NUM_NOT_APPROVED_TERMS':
                return Object.assign({}, state, { numNotApprovedTerms: action.payload.numNotApprovedTerms });
        case 'ADD_FILTER':
            return {
                ...state,
                filters: [...state.filters, action.payload.newFilter]
            }
        case 'REMOVE_FILTER':
            return {
                ...state,
                filters: state.filters.filter(function(status) {
                    return status !== action.payload.oldFilter
                })
            }
        case 'ORDER_BY_ALPH':
            return Object.assign({}, state, { sort:  action.payload.sort});
        case 'ORDER_BY_BEGREPSEIER':
            return Object.assign({}, state, { sort: action.payload.sort});
        default:
            return state; 
    }
}

export default appReducer;
