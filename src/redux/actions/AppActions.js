
export function fetchData(){
    const API = '/api/issues';
    return function(dispatch){
        dispatch({
            type: 'FETCH_DATA_BEGIN'
        });

        fetch(API)
        .then(function(response){
            response.json()
            .then((items) =>
            dispatch({
                type: 'FETCH_DATA_COMPLETE',
                items: items
            }));
        });
    }
}

export function toggleHiddenTable() {
    return {
        type: 'TOGGLE_HIDDEN_TABLE',
        seeAllTerms: true
    };
}

//sort by category in progress
export const sortCategories = (category, updated) =>(dispatch) =>{
    return dispatch({
        type: 'SORT_BY',
        payload: {
            updated: updated,
            items: updated === '' ? category: category.filter(a => a.updated.indexOf(updated.valueOf() >= 0))  //mulig denne valueOf må endres, avh hva dato måles på
        }
    });
}

export const sortBy = (sort) => (dispatch) =>{    
    return dispatch({
        type: 'ORDER_BY_ALPH',
        payload: {
            sort: sort
        }
    });
}

export const termKey = (newKey) => {
    return {
        type: 'TERM_KEY',
        termKey: newKey, 
    };
}



