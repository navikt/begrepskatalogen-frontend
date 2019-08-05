import * as actions from '../redux/actions/AppActions';


//vet ikke om dette er riktig, men den blir godkjent.. 

describe('actions', () =>{

    it('should create an action to see all terms', () =>{
        const text = 'TOGGLE_SEE_ALL_TERMS'
        const expectedAction = {
            type: 'TOGGLE_SEE_ALL_TERMS',
            payload :{
                seeAllTerms: true,
            }
        }
        expect(actions.toggleSeeAllTerms(text)).toEqual(expectedAction);
    });

});