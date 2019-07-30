import React from 'react';
import { Select } from 'nav-frontend-skjema';
import { Normaltekst } from 'nav-frontend-typografi';
import './FilterField.less'

function FilterField(){
    return(
        <div className="wrapper">
            
            <div className="filtertekst">
                <Normaltekst >
                    Filtrer etter: 
                </Normaltekst>
            </div>

            <div className="filterselect">
                <Select label="" bredde="m">
                    <option value='Begrepseier'>Begrepseier</option>
                    <option value='Implisitt_Status'>Implisitt status</option>
                    <option value='Fagområder'>Fagområder</option>
                    <option value='Brukerrettede_begreper'>Brukerrettede begreper</option>
                    <option value='Kildetype'>Kildetype</option>
                    <option value='Ekstern_eierskap'>Ekstern eierskap</option>
                    <option value='Offentlig_tilgjengelig'>Offentlig tilgjengelig</option>
                </Select>
            </div>
        </div>
    );
}

export default FilterField;