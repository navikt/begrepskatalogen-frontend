import React from 'react';
import './Table.less';
import { Systemtittel, Normaltekst } from 'nav-frontend-typografi';
import FilterField from '../FilterSelectField/FilterField';
import SortField from '../SortSelectField/SortField';
import {connect} from 'react-redux';
import Fuse from 'fuse.js';


class Table extends React.Component{

    constructor(props){
        super(props);
        this.renderTableData = this.renderTableData.bind(this);
        this.state = ({ list: [] });
    }

    searchResult() {
        var options = {
            shouldSort: true,
            findAllMatches: true,
            threshold: 0,
            //includeScore: true,
            location: 0,
            distance: 100,
            maxPatternLength: 32,
            minMatchCharLength: 1,
            keys: [
                "term"
            ]
        };
        var fuse = new Fuse(this.props.items, options);
        const resultTable = fuse.search(this.props.search)
        console.log("Fuse res", resultTable);
        return resultTable;
    }

    renderTableData(){
        const list = this.searchResult();
        console.log("liste som skal rendres", this.state.list)
        console.log("items listen", this.props.items)
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
                            {"search prop table" + this.props.search} 
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
    console.log("table props", props);
    return {
        search: state.search,
        items: state.items
    }
};

export default connect(mapStateToProps)(Table);