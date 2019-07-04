export function toggleFancy() {
    return {
        type: 'TOGGLE_FANCY'
    };
}

//.then(res => res.json()

export function fetchData(){
    return function(dispatch){
        dispatch({
            type: 'FETCH_DATA_BEGIN'
        });

        fetch(API)
        .then(function(response){
            dispatch({
                type: 'FETCH_DATA_COMPLETE',
                payload: ret = response.json()
            });
        });
    }
}