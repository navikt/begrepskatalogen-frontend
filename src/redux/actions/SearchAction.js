
export const updateSearch = (newSearch) => {
    return {
        type: 'UPDATE_SEARCH',
        search: newSearch
    }
};

export function hideNonApprovedTerms() {
    return {
        type: 'NOT_APPROVED_TERMS',
        hideNotApproved: true
    }
}

export const numOfApprovedTerms = ( newNum ) => {
    return{
        type: 'NUM_APPROVED_TERMS',
        approvedTerms: newNum
    }
};

export const numOfNotApprovedTerms = ( newNum ) => {
    return{
        type: 'NUM_NOT_APPROVED_TERMS',
        numNotApprovedTerms: newNum
    }
};