export const initialState= {
    query: " "
};

function searchReducer(state=initialState, action){
    switch (action.type){
        case 'UPDATE_SEARCH':
            return payload;
        
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

        default:
            return state;
    }
}

export default searchReducer;