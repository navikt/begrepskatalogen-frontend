import React from 'react';
import './Table.less';
import { Systemtittel, Normaltekst } from 'nav-frontend-typografi';
import FilterField from '../FilterSelectField/FilterField';
import SortField from '../SortSelectField/SortField';
import {connect } from 'react-redux';
import Fuse from 'fuse.js';
import { numOfApprovedTerms, numOfNotApprovedTerms } from '../../redux/actions/SearchAction';

class Table extends React.Component{

    constructor(props){
        super(props);
        this.renderTableData = this.renderTableData.bind(this);
        this.state = ({});
    }

    searchResult() {
        var options = {
            shouldSort: true,
            findAllMatches: true,
            threshold: 0.2,
            //score: true,
            location: 0,
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
        const resultTable = fuse.search(this.props.search)
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
        const approvedList = fuse.search("Godkjent begrep");
        this.props.dispatch(numOfApprovedTerms( approvedList.length ))
        return approvedList;
    }

    listToShow() {
        if ( this.props.hideNotApproved) {
            return this.godkjenteBegreper(this.searchResult())
        }
        const list = ((this.props.search == "" || this.props.seeAllTerms )? this.props.items : this.searchResult())
        return list;
    }

    renderTableData(){
        const list = this.listToShow()
        const approvedList = this.godkjenteBegreper(list)
        this.props.dispatch(numOfNotApprovedTerms( (list.length - approvedList.length) ));

        if(!this.props.items){
            return false;
        }
        
        return list.map((item) => {
            const {key,term,assignee,definisjon,oppdatert,status} = item
            return(
                <tr key= {key} className="definisjon">
                    <td><Normaltekst>{term}</Normaltekst></td>
                    <td><Normaltekst >{definisjon}</Normaltekst></td>
                    <td><Normaltekst>{status}</Normaltekst></td>
                    <td><Normaltekst>{assignee}</Normaltekst></td>
                    <td><Normaltekst>{oppdatert}</Normaltekst></td>
                </tr>
            );
        })
    }

    render(){
        return (
            <div className="altaltalt">
                <div className="altalt">
                    <div className="selectfields">
                            <FilterField/><SortField/>
                    </div>
                    <div className="altavtabell">
                        <table className="begreper">
                            <thead className="separator">

                            <tr>
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
                <div>
            </div>
            </div>
        );
    }
}

const mapStateToProps = (state, props) => {
    return {
        search: state.search,
        items: state.items,
        seeAllTerms: state.seeAllTerms,
        hideNotApproved: state.hideNotApproved,
    }
};

export default connect(mapStateToProps)(Table);
