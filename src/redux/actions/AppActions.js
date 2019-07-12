
export function toggleFancy() {
    return {
        type: 'TOGGLE_FANCY'
    };
}

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
    console.log("clicked on vis alle begrep");
    return {
        type: 'TOGGLE_HIDDEN_TABLE',
        seeAllTerms: true
    };
}
