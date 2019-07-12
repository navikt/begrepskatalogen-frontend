import React from 'react';
import { Select } from 'nav-frontend-skjema';
import { Normaltekst } from 'nav-frontend-typografi';
import './SortField.less'

const SortField=({
    sortKey,
    type,
    sort,
    onSort,
})=>(
    <div className="wrapper">
            <div className="sortertekst">
                <Normaltekst >
                    Sorter etter: 
                </Normaltekst>
            </div>

            <div className="sorterselect">
                <Select     
                    label = ""
                    bredde="m"
                    onChange={() => onSort(sortKey, type)}
                    dir={(sort && sort.key === sortKey && sort.order) || undefined}
                    >
                        <option value='Alfabetisk'>Alfabetisk</option>
                        <option value='Sist_Oppdatert'>Sist Oppdatert</option>
                        <option value='Begrepseier'>Begrepseier</option>
                </Select>
            </div>
        </div>

);




export default SortField;