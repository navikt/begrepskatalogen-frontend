

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
            dispatch({
                type: 'FETCH_DATA_COMPLETE',
                payload: response.json()
            });
        });
    }
}


export function addOne(){
    return{
        type: 'ADD_ONE'  
    };
}

export function addX(addX){
    return{
        type: 'ADD_X',
        payload: addX
    }
}
