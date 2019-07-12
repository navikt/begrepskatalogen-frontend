import React from 'react';
import {connect} from 'react-redux';
import Fuse from 'fuse.js';
import { numOfApprovedTerms } from '../../redux/actions/AppActions';

class ResultList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {} 
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
        console.log("score lit", resultTable)
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
        const list = ((this.props.search == "" || this.props.seeAllTerms )? this.props.items : this.searchResult())
        return list;
    }
}

const mapStateToProps = (state, props) => {
    console.log("reult list  props", props);
    return {
        search: state.search,
        items: state.items,
        seeAllTerms: state.seeAllTerms
    }
};

export default connect(mapStateToProps)(ResultList);


// ikke i bruk, vurderer å erstatte denne med noe av koden som ligger i Table