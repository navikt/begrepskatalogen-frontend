import React from 'react';
import { Checkbox} from 'nav-frontend-skjema';
import './FilterSection.less';
import { Undertittel, Systemtittel } from 'nav-frontend-typografi';
import { connect } from 'react-redux';
import { hideNonApprovedTerms, hideNonUtkastTerms, hideNonAvvistTerms, selectFilter } from '../../redux/actions/SearchAction';
import { bindActionCreators } from 'redux';
import { addFilter, removeFilter } from '../../redux/actions/AppActions';

class FilterSection extends React.Component{

    constructor(props) {
        super(props);
        this.handleClick.bind(this);
        this.state = {statuses: [], fagomrade: []}
    }

    componentWillMount() {
        this.setState({
            statuses: [...new Set(this.props.items.map( x => x.status))],
            fagomrader: [...new Set(this.props.items.map( x => x.fagomrade))]
        });
    }
    handleClick(e) {
        console.log(e.value, e.checked);
        if(e.checked) {
            this.props.addFilter(e.value);
        }
        else {
            this.props.removeFilter(e.value);
        }  
    }

    findDistinctStatuses() {
        return this.state.statuses.map((status) => {
            return (
                <Checkbox key={status} label={status} value={status} onChange={(e) => this.handleClick(e.target)}/>
            );
        });
    }

    findDistinctFagområder() {
        return this.state.fagomrader.map((fagomrade) => {
            if(fagomrade != "") {
                return (
                    <Checkbox key={fagomrade} label={fagomrade} value={fagomrade}/>
                );
            }
        });
    }

    render(){
        return(
            <div className="filterwrapper">
                
                <div className="Overskrift">
                    <Systemtittel>Filtrer etter kategori</Systemtittel>
                </div>

                <div className="katergorioverskrift">
                    <Undertittel>Implisitt status</Undertittel>
                </div>
                <div className="filtercheckbox">
                    {this.findDistinctStatuses()}
                </div>

                <div className="katergorioverskrift">
                    <Undertittel>Fagområder</Undertittel>
                </div>

                <div className="filtercheckbox">
                    {this.findDistinctFagområder()}
                </div>

                <div className="katergorioverskrift">
                    <Undertittel>Kildetype</Undertittel>
                </div>

                <div className="filtercheckbox">
                    <Checkbox label={"Kildetype1"}/>
                    <Checkbox label={"Kildetype2"}/>
                    <Checkbox label={"Kildetype3"}/>
                </div>


                <div className="katergorioverskrift">
                    <Undertittel>Ekstern eierskap?</Undertittel>
                </div>

                <div className="filtercheckbox">
                    <Checkbox label={"Ja"}/>
                    <Checkbox label={"Nei"}/>
                </div>


                <div className="katergorioverskrift">
                    <Undertittel>Offentlig Status</Undertittel>
                </div>

                <div className="filtercheckbox">
                    <Checkbox label={"Ja"}/>
                    <Checkbox label={"Nei"}/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        filterStatus: state.filterStatus,
        items: state.items,
        approvedTerms: state.approvedTerms,
        numNotApprovedTerms: state.numNotApprovedTerms,
    }
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({
        addFilter: addFilter,
        removeFilter: removeFilter,
        hideNonApprovedTerms: hideNonApprovedTerms,
    }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(FilterSection);