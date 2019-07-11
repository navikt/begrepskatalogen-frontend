

export function toggleFancy() {
    return {
        type: 'TOGGLE_FANCY'
    };
}

export function fetchData(){
    const API = 'http://localhost:8080/api/issues';
    return function(dispatch){
        dispatch({
            type: 'FETCH_DATA_BEGIN'
        });

        fetch(API)
        .then(function(response){
            response.json()
            .then((r) => 
            dispatch({
                type: 'FETCH_DATA_COMPLETE',
                items: r
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
