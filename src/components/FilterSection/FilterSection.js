import React from 'react';
import { Checkbox} from 'nav-frontend-skjema';
import './FilterSection.less';
import { Undertittel, Systemtittel } from 'nav-frontend-typografi';
import { connect } from 'react-redux';
import Fuse from 'fuse.js';
import { hideNonApprovedTerms } from '../../redux/actions/SearchAction';
import { bindActionCreators } from '../../../../../AppData/Local/Microsoft/TypeScript/3.5/node_modules/redux';


class FilterSection extends React.Component{

    constructor(props){
        super(props);
    }

    filterResult(){
        var options={keys:[{
            name: "status"
            }]
        }
        var fuse = new Fuse(this.props.items, options);
        const filterStatus = fuse.search(this.props.alternatives)
        return filterStatus;
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
                    <Checkbox onClick={this.props.hideNonApprovedTerms} label={"Godkjente"}/>
                    <Checkbox label={"Utkast"}/>
                    <Checkbox label={"Avviste"}/>
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
        
        approvedTerms: state.approvedTerms,
        numNotApprovedTerms: state.numNotApprovedTerms
    }
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({hideNonApprovedTerms: hideNonApprovedTerms}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(FilterSection);