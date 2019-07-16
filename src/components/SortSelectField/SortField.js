import React from 'react';
import { Select } from 'nav-frontend-skjema';
import { Normaltekst } from 'nav-frontend-typografi';
import './SortField.less';
import { connect } from 'react-redux';
import {sortBy} from '../../redux/actions/AppActions';

const SortField=({
    dispatch
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
                    onChange={(event)=> sortBy(event.target.value)(dispatch)} 
                    >
                        <option value=''>------</option>
                        <option value='Alfabetisk'>Alfabetisk</option>
                        <option value='Sist_Oppdatert'>Sist Oppdatert</option>
                        <option value='Begrepseier'>Begrepseier</option>
                </Select>
            </div>
        </div>

);

export default connect()(SortField);
