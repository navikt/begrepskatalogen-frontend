import React from 'react';
import { Checkbox} from 'nav-frontend-skjema';
import './FilterSection.less';
import { Undertittel, Systemtittel } from 'nav-frontend-typografi';
import { connect } from 'react-redux';
import { hideNonApprovedTerms, hideNonUtkastTerms, hideNonAvvistTerms, selectFilter } from '../../redux/actions/SearchAction';
import { bindActionCreators } from 'redux';

class FilterSection extends React.Component{

    constructor(props) {
        super(props);
        this.state = {filterList: []}
        this.handleClick.bind(this);
    }
    handleClick(e) {
        console.log(e.value, e.checked);
        if(e.checked) {
            this.setState({
                filterList: [...this.state.filterList, e.value]
            });
        }
        else {
            this.setState({
                filterList: this.state.filterList.filter(function(status) {
                    return status !== e.value
                })
            });
        }  
        
    }

    filterStatus() {
        if(this.filterList != []) {
            const result = this.props.items.filter(({status}) => this.state.filterList.includes(status));
            return result;
        }
        
    }
    findDistinctStatuses() {
        const statuses = [...new Set(this.props.items.map( x => x.status))];
        return statuses.map((status) => {
            return (
                <Checkbox key={status} label={status} value={status} onChange={(e) => this.handleClick(e.target)}/>
            );
        });
    }

    findDistinctFagområder() {

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
                    {this.findDistinctStatuses()}{console.log(this.state.filterList)}
                </div>

                <div className="katergorioverskrift">
                    <Undertittel>Fagområder</Undertittel>
                </div>

                <div className="filtercheckbox">
                    <Checkbox label={"Fagområde1"}/>
                    <Checkbox label={"Fagområde2"}/>
                    <Checkbox label={"Fagområde3"}/>
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

const mapStateToProps = (state) =>{
    return{
        filterStatus: state.filterStatus,
        items: state.items,
        approvedTerms: state.approvedTerms,
        numNotApprovedTerms: state.numNotApprovedTerms,
        
    }
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({
        hideNonApprovedTerms: hideNonApprovedTerms,
        //start utkastdel
        hideNonUtkastTerms: hideNonUtkastTerms,
        //slutt utkastdel

        //start avvistdel
        hideNonAvvistTerms: hideNonAvvistTerms,
        //slutt avvistdel

        //start statelist
        selectFilter: selectFilter
        //slutt statelist

    }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(FilterSection);