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
/*
export function fetchData() {
    const API = 'http://localhost:8080/api/issues';
    return dispatch =>{
        dispatch(fetchProductsBegin());
        return fetch(API)
        .then(handleErrors)
        .then(res => res.json())
        .then(json =>{
            dispatch(fetchProdctsSuccess(json.API));
            return json.API;
        })
        .catch(error => dispatch(fetchProductsFailure(error)));
    };
}

//function for handling http errors
function handleErrors(response){
    if(!response.ok){
        throw Error(response.statusText);
    }
    return response;
}

export const fetchProductsBegin = () =>({
    type: 'FETCH_PRODUCTS_BEGIN'
});

export const fetchProdctsSuccess = API => ({
    type: 'FETCH_PRODUCT_SUCCESS',
    payload: { API }
});

export const fetchProductsFailure = error => ({
    type: FETCH_PRODUCTS_FAILURE,
    payload: { error }
});*/

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

//tar opp listen med alle elementer, og kategori du filtrerer ved
/*export const filterCategory = category => (dispatch)=> {
    return dispatch({
        type: FILTRER_KATEGORI,
        payload: category
    })
}*/