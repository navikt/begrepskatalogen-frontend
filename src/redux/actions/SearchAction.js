
export const updateSearch = (newSearch) => {
    return {
        type: 'UPDATE_SEARCH',
        search: newSearch
    }
};

export function hideNonApprovedTerms() {
    return {
        type: 'NOT_APPROVED_TERMS',
        //hideNotApproved: true
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

//start utkastdel
export const numOfUtkastTerms = (newNum) =>{
    return{
        type: 'NUM_UTKAST_TERMS',
        utkastTerms: newNum
    }
};

export function hideNonUtkastTerms(){
    return{
        type: 'NOT_UTKAST_TERMS',
    }
};

//slutt utkastdel