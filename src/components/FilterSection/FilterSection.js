import React from 'react';
import { Checkbox} from 'nav-frontend-skjema';
import './FilterSection.less';
import { Undertittel, Systemtittel } from 'nav-frontend-typografi';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { toggleFilter } from '../../redux/actions/AppActions';

class FilterSection extends React.Component{

    constructor(props) {
        super(props);
        this.handleClick.bind(this);
        this.state = {statuses: [], fagomrader: []}
    }

    componentWillMount() {
        this.setState({
            statuses: [...new Set(this.props.items.map( x => x.status))],
            fagomrader: [...new Set(this.props.items.map( x => x.fagomrade))]
        });
    }
    handleClick(category, e) {
        this.props.toggleFilter(category, e.value, e.checked);
    }

    findDistinctStatuses() {
        return this.state.statuses.map((status) => {
            return (
                <Checkbox key={status} label={status} value={status} onChange={(e) => this.handleClick("status", e.target)}/>
            );
        });
    }

    findDistinctFagomrader() {
        return this.state.fagomrader.map((fagomrade) => {
            if (fagomrade !== "") {
                return (
                    <Checkbox key={fagomrade} label={fagomrade} value={fagomrade} onChange={(e) => this.handleClick("fagomrade", e.target)}/>
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
                    {this.findDistinctFagomrader()}
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
        items: state.items,
    }
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({
        toggleFilter: toggleFilter,
    }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(FilterSection);