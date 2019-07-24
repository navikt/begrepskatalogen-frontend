export const initialState = {
    loading: false,
    items: [],
    search: '',
    filteredItems:[],
    hideNotApproved: false,
    //start utkastdel
    utkastTerms: 0,
    hideNotUtkast: false,
    //slutt utkastdel
    //start avvistdel
    avvistTerms: 0,
    hideNotAvvist: false,
    //slutt avvustdel

    //start statelist
    initialBlankList: [],
    //slutt statelist
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
                return Object.assign({}, state, { numNotApprovedTerms: action.numNotApprovedTerms });
        
        case 'ORDER_BY_ALPH':
            return Object.assign({}, state, { sort:  action.payload.sort});
        case 'ORDER_BY_BEGREPSEIER':
            return Object.assign({}, state, { sort: action.payload.sort});
        case 'TERM_KEY':
            return Object.assign({}, state, { termKey: action.payload.termKey });

        //start utkastdel
        case 'NUM_UTKAST_TERMS':
            return Object.assign({}, state, { utkastTerms: action.utkastTerms });
        
        case 'NOT_UTKAST_TERMS':
            return Object.assign({}, state, { hideNotUtkast: !state.hideNotUtkast });
        //slutt utkastdel

        //start avvistdel
        case 'NUM_AVVIST_TERMS':
            return Object.assign({}, state, { avvistTerms: action.avvistTerms });
        
        case 'NOT_AVVIST_TERMS':
            return Object.assign({}, state, { hideNotAvvist: !state.hideNotAvvist });
        //slutt avvustdel



        //start statelist
        case 'SELECT_FILTER':
            return Object.assign({}, state, {initialBlankList: action.initialBlankList})
        //slutt statelist


        default:
            return state; 
    }
}

export default appReducer;
