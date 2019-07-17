import { get } from 'lodash';

export function setSortParams(sortKey, sortType="string"){
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

