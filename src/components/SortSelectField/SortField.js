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
                        <option value='Alfabetisk' onSelect={() => setSortParams("Alfabetisk")}>Alfabetisk</option>
                        <option value='Sist_Oppdatert' onSelect={() => setSortParams("Sist_Oppdatert")}>Sist Oppdatert</option>
                        <option value='Begrepseier'onSelect={() => setSortParams("Begrepseier")}>Begrepseier</option>
                </Select>
            </div>
        </div>
    );
}

export default SortField;