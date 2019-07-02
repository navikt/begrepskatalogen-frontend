import { TERM, DEFINISJON, ASSIGNEE, OPPDATERT} from '../actions/types';

const initialState = {
    orderBy: "Term",
    order: 1

};

const sortReducer = (state = initialState, action) => {
    switch(action.type){
        case TERM:
            return{
                orderBy: "Term",
                order: 1

            };
        case DEFINISJON: 
            return{
                orderBy: "Definisjon",
                order: 1
            };

        case ASSIGNEE:
            return{
                orderBy: "Begrepseier",
                order: 1
            };
        
        case OPPDATERT:
            return{
                orderBy: "Sist endret",
                order: 1
            };
            
        
        default:
            return state;
    }
}