import { get } from 'lodash';
import { types } from 'util';


export function setSortParams(sortKey, sortType){
    return (dispatch, getState) =>{
        const { sortParams } = getState().app;
        const order =get(sortParams, "order");
        dispatch({
            type: 'SET_SORT_PARAM',
            payload:{
                data:{
                    key: sortKey,
                    order: order === "desc" ? "asc" : "desc",
                    type: sortType
                }
            }
        });
    };
}

export function clearSortParams(){
    return{
        type: 'SET_SORT_PARAM',
        payload: {
            data: undefined
        }
    }
}