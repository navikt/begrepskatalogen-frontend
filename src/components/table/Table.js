import React from 'react';
import './Table.less';
import { Systemtittel, Normaltekst } from 'nav-frontend-typografi';
//import FilterField from '../FilterSelectField/FilterField';
import SortField from '../SortSelectField/SortField';
import {connect } from 'react-redux';
import Fuse from 'fuse.js';
import { numOfApprovedTerms, numOfNotApprovedTerms } from '../../redux/actions/SearchAction';
import { termKey } from '../../redux/actions/AppActions';
import { Link } from 'react-router-dom';




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
        
        const handleClick = (e) => {
            this.props.dispatch(termKey(e));
            console.log("klikk", e);
        }
        
        const formatDate=(string)=> {
            var options = { year: 'numeric', month: 'long', day: 'numeric'};
            return new Date(string).toLocaleDateString([], options);
        }
    
        return list.map((item) => {
            const {key,term,assignee,definisjon,oppdatert,status} = item
            return(
                <tr key= {key} className="definisjon">
                    <td><Link className="termKolonne" onClick={() => handleClick(item) }to={"/begrepsside"}>{term}</Link></td>
                    <td><Normaltekst >{definisjon}</Normaltekst></td>
                    <td><Normaltekst className="status">{status}</Normaltekst></td>
                    <td><Normaltekst>{assignee}</Normaltekst></td>
                    <td><Normaltekst>{formatDate(oppdatert)}</Normaltekst></td>
                </tr>
            );
        })
    }

    render(){
        return (
            <div className="altaltalt">
                
                <div className="altalt">
                    
                    <div className="selectfields">
                        <SortField/>
                    </div>
                        <div className="altavtabell">
                            <table className="begreper">
                                <col width="250"/>
                                <col width="500"/>
                                <col width="150"/>
                                <col width="180"/>
                                <col width="250"/>
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
        sort: state.sort
    }
};

export default connect(mapStateToProps)(Table);
