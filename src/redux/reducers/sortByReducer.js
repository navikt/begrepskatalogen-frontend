//import { TERM, DEFINISJON, ASSIGNEE, OPPDATERT} from '../actions/types';

export const initialState = {
    /*orderBy: "Term",
    order: 1*/
    sortBy: 'id',
    order: 'asc'

};

function sortReducer = (state = initialState, action) => {
    switch(action.type){
        /*case TERM:
            return{
                orderBy: "Kategori",
                order: 1

            };
        case DEFINISJON: 
            return{
                orderBy: "Innhold",
                order: 1
            };

        case ASSIGNEE:
            return{
                orderBy: "Begrepseier Alfabetisk",
                order: 1
            };
        
        case OPPDATERT:
            return{
                orderBy: "Sist endret",
                order: 1
            };*/
        
        case 'SORT_BY_SELECTED':
            return{
                ...state,
                sortBy: action.selected
            };

        default:
            return state;
    }
}

export default sortByReducer;