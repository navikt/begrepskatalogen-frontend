
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
    filteredItems:[],
    updated: "",
    termKey: []
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
            return Object.assign({}, state, { search: action.search, seeAllTerms: false, hideNotApproved:false });
        case 'TOGGLE_HIDDEN_TABLE':
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
            return Object.assign({}, state, {sort:  action.payload.sort});

        case 'ORDER_BY_BEGREPSEIER':
            return Object.assign({}, state, {sort: action.payload.sort});
        case 'TERM_KEY':
            return Object.assign({}, state, { termKey: action.termKey });
            
            // const items = state.items

            // if(sort!=''){
            //     console.log(`sorting ${sort}`)
            //     items.sort((a,b)=>(sort ==='Alfabetisk')?
            //     (a.term > b.term? 1:-1)
            //     : (a.term < b.term ? 1:-1))
            // } else{
            //     items.sort((a,b) =>(a.id>b.id ? 1: -1));
            // }
            // return {
            //     ...state, items, sort
            // }
            
        default:
            return state; 
    }
}

export default appReducer;
