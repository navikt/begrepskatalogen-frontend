
//export const UPDATE_SEARCH = 'search:updateSearch';

export const updateSearch = (newSearch) => {
    return {
        type: 'UPDATE_SEARCH',
        search: newSearch
    }
};

export function hideNonApprovedTerms() {
    console.log("gjemme ikke godkjente begreper")
    return {
        type: 'NOT_APPROVED_TERMS',
        hideNotApproved: true
    }
}

export const numOfApprovedTerms = ( newNum ) => {
    console.log("num godkjente");
    return{
        type: 'NUM_APPROVED_TERMS',
        approvedTerms: newNum
    }
};

export const numOfNotApprovedTerms = ( newNum ) => {
    console.log("num ikke-godkjente");
    return{
        type: 'NUM_NOT_APPROVED_TERMS',
        numNotApprovedTerms: newNum
    }
};