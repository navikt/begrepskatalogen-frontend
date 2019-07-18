export const initialState= {
    search: '',
};

function searchReducer(state=initialState, action){
    switch (action.type) {
        case 'UPDATE_SEARCH':
            return Object.assign({}, state, { search: action.search });
        default:
            return state;
    }
}

export default searchReducer;