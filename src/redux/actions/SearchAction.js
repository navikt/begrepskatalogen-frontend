
export const updateSearch = (newSearch) => {
    return {
        type: 'UPDATE_SEARCH',
        payload: {
            search: newSearch
        }
    }
};

export function hideNonApprovedTerms() {
    return {
        type: 'NOT_APPROVED_TERMS',
        //hideNotApproved: true
    }
}

export const numOfApprovedTerms = ( newNum ) => {
    return {
        type: 'NUM_APPROVED_TERMS',
        payload: {
            approvedTerms: newNum
        }
    }
};

export const numOfNotApprovedTerms = ( newNum ) => {
    return {
        type: 'NUM_NOT_APPROVED_TERMS',
        payload: {
            numNotApprovedTerms: newNum
        }
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

//start avvistdel
export const numOfAvvistTerms = (newNum) =>{
    return{
        type: 'NUM_AVVIST_TERMS',
        avvistTerms: newNum
    }
};

export function hideNonAvvistTerms(){
    return{
        type: 'NOT_AVVIST_TERMS',
    }
};
//slutt avvistdel
