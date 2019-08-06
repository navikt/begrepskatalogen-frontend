import * as actions from '../redux/actions/AppActions';


//vet ikke om dette er riktig, men den blir godkjent.. 

describe('actions', () =>{

    it('should create an action to see all terms', () =>{
        const text = 'TOGGLE_SEE_ALL_TERMS'
        const expectedAction = {
            type: text,
            payload :{
                seeAllTerms: true,
            }
        }
        expect(actions.toggleSeeAllTerms(text)).toEqual(expectedAction);
    });

    it('should add filter for filtering terms', () =>{
        const type = 'ADD_FILTER';
        const filter = 'Alfabetisk';
        const expectedAction = {
            type: type,
            payload: {
                newFilter: filter
            }
        }
        expect(actions.addFilter(filter)).toEqual(expectedAction);
    });

    it('should remove filter for filtering terms', () =>{
        const type = 'REMOVE_FILTER';
        const filter = 'Alfabetisk';
        const expectedAction = {
            type: type,
            payload: {
                oldFilter: filter
            }
        }
        expect(actions.removeFilter(filter)).toEqual(expectedAction);
    });
});