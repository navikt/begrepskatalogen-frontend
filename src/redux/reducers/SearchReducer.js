export const initialState= {
    search: '',
};

function searchReducer(state=initialState, action){
    switch (action.type){
        case 'UPDATE_SEARCH':
            return Object.assign({}, state, { search: action.search });
        /*
        case 'UPDATE_PAGE':
            return{
                ...state,
                query: action.payload
            }
        
        case 'UPDATE_QUERY':
            return{
                ...state,
                query: action.payload
            }
        
        case 'UPDATE_SORT':
            return{
                ...state,
                sort: action.payload
            }
        */
        default:
            return state;
    }
}

export default searchReducer;