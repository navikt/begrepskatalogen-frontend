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
                        <option value=''>Eskil</option>
                        <option value='Alfabetisk'>Alfabetisk</option>
                        <option value='Dato'>Dato</option>
                        <option value='Kategori'>Kategori</option>
                        <option value='Innhold'>Innhold</option>
                </Select>
            </div>
        </div>
    );
}

export default SortField;