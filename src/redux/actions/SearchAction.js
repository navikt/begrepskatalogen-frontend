import { async } from "q";

export const UPDATE_SEARCH = 'search:updateSearch';

export function updateSearch(newSearch){
    return{
        type: UPDATE_SEARCH,
        search: newSearch
    }
}

//sort page func
export const sortItems = (page, sort) => async dispatch =>{
    dispatch({type: 'UPDATE_SORT', payload: sort});
    dispatch({type: 'UPDATE_PAGE', payload: page});
}
