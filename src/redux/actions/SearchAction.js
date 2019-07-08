import { async } from "q";

export const UPDATE_SEARCH = 'search:updateSearch';

export function updateSearch(newSearch){
    return{
        type: UPDATE_SEARCH,
        search: newSearch
    }
}
