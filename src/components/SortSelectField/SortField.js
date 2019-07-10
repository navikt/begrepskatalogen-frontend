import React from 'react';
import { Select } from 'nav-frontend-skjema';
import { Normaltekst } from 'nav-frontend-typografi';
import './SortField.less'

function SortField(){
    return(
        <div className="wrapper">
            <div className="sortertekst">
                <Normaltekst >
                    Sorter etter: 
                </Normaltekst>
            </div>

            <div className="sorterselect">
                <Select     
                    bredde="m"
                    >
                        <option value='Alfabetisk'>Alfabetisk</option>
                        <option value='Dato'>Sist Oppdatert</option>
                        <option value='Begrepseier'>Begrepseier</option>
                </Select>
            </div>
        </div>
    );
}

export default SortField;