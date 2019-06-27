import React from 'react';
import { Select } from 'nav-frontend-skjema';
import { Normaltekst } from 'nav-frontend-typografi';
import './FilterField.less'

function FilterField(){
    return(
        <div class="wrapper">
            
            <div className="filtertekst">
                <Normaltekst >
                    Filtrer etter: 
                </Normaltekst>
            </div>

            <div className="filterselect">
                <Select     
                    bredde="m"
                    >
                        <option value=''>Tema</option>
                        <option value='Tema_1'>Tema 1</option>
                        <option value='Tema_2'>Tema 2</option>
                        <option value='Tema_3'>Tema 3</option>
                </Select>
            </div>
        </div>
    );
}

export default FilterField;