

export const UPDATE_SEARCH = 'search:updateSearch';

export const updateSearch = (newSearch) => {
    return{
        type: UPDATE_SEARCH,
        search: newSearch
    }
};
