//import { FILTRER_KATEGORI } from "./types";

export function toggleFancy() {
    return {
        type: 'TOGGLE_FANCY'
    };
}

//.then(res => res.json()

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

/* eksempel
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
}*/

//tar opp listen med alle elementer, og kategori du filtrerer ved
/*export const filterCategory = category => (dispatch)=> {
    return dispatch({
        type: FILTRER_KATEGORI,
        payload: category
    })
}*/