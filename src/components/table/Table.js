import React from 'react';
import './Table.less';
import { Systemtittel, Normaltekst } from 'nav-frontend-typografi';
import FilterSection from '../FilterSection/FilterSection';
import SortField from '../SortSelectField/SortField';
import {connect } from 'react-redux';
import Fuse from 'fuse.js';
import { numOfApprovedTerms, numOfNotApprovedTerms } from '../../redux/actions/SearchAction';
import { Link } from 'react-router-dom';

class Table extends React.Component{

    constructor(props){
        super(props);
        this.renderTableData = this.renderTableData.bind(this);
    }

    searchResult() {
        var options = {
            shouldSort: true,
            findAllMatches: true,
            threshold: 0.2,
            //score: true,
            distance: 100,
            maxPatternLength: 32,
            minMatchCharLength: 1,
            keys: [ {
                name: "term",
                //weight: 0.9
            }, { 
                mame: "definisjon",
                //weight: 0.8 
            },
                "begrepseier",
                "kilde",
            ]
        };
        var fuse = new Fuse(this.props.items, options);
        const resultTable = fuse.search(this.props.search);
        return resultTable;
    }

    godkjenteBegreper(list) {
        const allTerms = list
        var options = {
            shouldSort: true, 
            findAllMatches: true,
            threshold:0, 
            location: 0,
            maxPatternLength: 32,
            minMatchCharLength: 1,
            keys: [ 
                "status"
            ]
        }
        var fuse = new Fuse(allTerms, options);
        const result = fuse.search("Godkjent begrep");
        this.props.dispatch(numOfApprovedTerms( result.length ));
        return result;
    }

    listToShow(list) {
        if( this.props.hideNotApproved ) {
            return this.godkjenteBegreper(list);
        }
        if(this.props.filters.length != 0) {
            return this.filterStatus(list);
        }
        return list;
    }

    filterStatus(list) {
        const result = list.filter(({status}) => this.props.filters.includes(status));
        return result;
    }

    renderTableData(){
        const list = ((this.props.search == "" || this.props.seeAllTerms) ? this.props.items : this.searchResult())
        const resList = this.listToShow(list);
        const approvedList = this.godkjenteBegreper(resList);
        this.props.dispatch(numOfNotApprovedTerms( (resList.length - approvedList.length) ));
      
        if(!this.props.items){
            return false;
        }

        const { sort } = this.props
        if(sort){
            console.log(`sorting ${sort}`)

            if (sort ==='Alfabetisk'){
                list.sort((a,b)=>(sort ==='Alfabetisk')?
                (a.term > b.term? 1:-1)
                : (a.term < b.term ? 1:-1))
            }
            if(sort === 'Begrepseier'){
                list.sort((a,b)=>(sort ==='Begrepseier')?
                (a.assignee > b.assignee? 1:-1)
                : (a.assignee < b.assignee ? 1:-1))
            }
            if(sort === 'Sist_Oppdatert'){
                list.sort((a,b)=>(sort ==='Sist_Oppdatert')?
                (a.oppdatert < b.oppdatert? 1:-1)
                : (a.oppdatert > b.oppdatert ? 1:-1))
            }
        }
        
        const formatDate = (string) => {
            var options = { year: 'numeric', month: 'long', day: 'numeric'};
            return new Date(string).toLocaleDateString([], options);
        }

        const decideColorCode =(tekst) => {
            if(tekst === 'Godkjent begrep'){
                return 'statusFargeGodkjent';
            }
            if (tekst === 'Utkast'){
                return 'statusFargeUtkast';
            }
            if(tekst === 'Avvist'){
                return 'statusFargeAvvist';
            }
            if(tekst === 'Revisjon'){
                return 'statusFargeRevisjon'
            }
            if(tekst === 'Utgått'){
                return 'statusFargeAvvist'
            }
            return "";
        }
        
    
        return resList.map((item) => {
            const {key,term,assignee,definisjon,oppdatert,status,relasjoner} = item
            return(
                <tr key={key} className="definisjon">
                    <td><Link className="term_col" to={`/begrepskatalogen/Begrepsside/${key}`}>{term}</Link></td>
                    <td><Normaltekst>{definisjon}</Normaltekst></td>

                    <td><Normaltekst className = {decideColorCode(status)}>
                    {status}
                    </Normaltekst></td>


                    <td><Normaltekst>{assignee}</Normaltekst></td>
                    <td><Normaltekst>{formatDate(oppdatert)}</Normaltekst></td>
                </tr>
            );
        })
    }

    render() {
        return (
                <div className="table_content">
                    <div className="selectfields">
                        <SortField/>
                    </div>
                    <div className="table">
                        <FilterSection/>
                        <table className="terms">
                            <colgroup>
                                <col width="250"/>
                                <col width="500"/>
                                <col width="150"/>
                                <col width="180"/>
                                <col width="250"/>
                            </colgroup>
                            <thead className="separator">

                            <tr className="tableHead">
                                <th><Systemtittel>Term</Systemtittel></th>
                                <th ><Systemtittel>Definisjon</Systemtittel></th>
                                <th><Systemtittel>Status</Systemtittel></th>
                                <th><Systemtittel>Begrepseier</Systemtittel></th>
                                <th><Systemtittel>Oppatert</Systemtittel></th>   
                            </tr>

                            </thead>
                            <tbody>
                                {this.renderTableData()}
                            </tbody>
                        </table>
                    </div>
                </div>

        );
    }
}

const mapStateToProps = (state) => {
    return {
        search: state.search,
        items: state.items,
        seeAllTerms: state.seeAllTerms,
        hideNotApproved: state.hideNotApproved,
        filters: state.filters,
        sort: state.sort,
    }
};

export default connect(mapStateToProps)(Table);
