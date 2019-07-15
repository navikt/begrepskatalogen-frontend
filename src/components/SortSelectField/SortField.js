import React from 'react';
import { Select } from 'nav-frontend-skjema';
import { Normaltekst } from 'nav-frontend-typografi';
import './SortField.less';
import { connect } from 'react-redux';
import {sortAlphabetically} from '../../redux/actions/AppActions';

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
                    onChange={(event)=>this.props.sortAlphabetically(event.target.value)} 
                    >
                        <option value=''>------</option>
                        <option value='Alfabetisk'>Alfabetisk</option>
                        <option value='Sist_Oppdatert'>Sist Oppdatert</option>
                        <option value='Begrepseier'>Begrepseier</option>
                </Select>
            </div>
        </div>

);

const mapStateToProps = state =>({
    sort: state.category.sort
})




export default connect(mapStateToProps, {sortAlphabetically})(SortField);