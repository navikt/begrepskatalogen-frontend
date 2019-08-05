import React from 'react';
import { Sidetittel, Ingress, Undertittel, Normaltekst, Element } from 'nav-frontend-typografi';
import './TermPage.less';
import { Link } from 'react-router-dom';
import { connect } from  'react-redux';
import { AlertStripeSuksess, AlertStripeFeil, AlertStripeAdvarsel} from 'nav-frontend-alertstriper';
import { bindActionCreators } from 'redux';
import { fetchItem } from '../../redux/actions/AppActions';

export class TermPage extends React.Component{

    constructor(props){
        super(props);
        this.state = {isFound: true}
    }

    componentWillMount() {
        const { id } = this.props.match.params;
        this.props.fetchItem(id);
        console.log("id", id);     
    }

    componentWillReceiveProps(nextProps) {
        const { id } = nextProps.match.params;
        console.log("nextprops id", id);
        if( id !== this.props.match.params.id) {
            this.props.fetchItem(id);
        }
    }

    isGodkjent = () => {
        if( this.props.item.status === 'Godkjent begrep') {
            return <AlertStripeSuksess size="25">Godkjent begrep</AlertStripeSuksess>;
        }
        else if(this.props.item.status === 'Utkast') {
            return <AlertStripeAdvarsel className="utkastBegrep" size="25">Utkast</AlertStripeAdvarsel>;
        }
        else {
            return <AlertStripeFeil size="25">Avvist begrep</AlertStripeFeil>;
        }
    }

    formatDate=(string)=> {
        var options = { year: 'numeric', month: 'long', day: 'numeric'};
        return new Date(string).toLocaleDateString([], options);
    }

    /*
    findTerm = (termName) => {
        var found = this.props.items.filter(function(item) {
            return item.key == termName;
        });
        if(found[0] == undefined) {
            this.setState({isFound: false})
        }
        else {
            this.setState({isFound: true})
        }
    }
*/
    relationFinder = () => {
        const lengthRel = this.props.item.relasjoner.length;
        
        if( lengthRel === 0 ) {
            return <Normaltekst>Ingen relasjoner funnet.</Normaltekst>;
        }
        else {
            return (
                <div className="relasjonListe">
                    {this.props.item.relasjoner.map( rel => (
                        rel.hasOwnProperty("inwardIssue") ?
                            <React.Fragment key={rel.id}>
                                <Normaltekst className="capitalize">{rel.type.inward}
                                    <Link to={`/begrepskatalogen/begrepsside/${rel.inwardIssue.key}`}>{rel.inwardIssue.fields.summary}</Link></Normaltekst>                    
                            </React.Fragment>
                            :
                            <React.Fragment key={rel.id}>
                                <Normaltekst className="capitalize">{rel.type.outward}
                                <Link to={`/begrepskatalogen/begrepsside/${rel.outwardIssue.key}`}>{rel.outwardIssue.fields.summary}</Link></Normaltekst>                       
                            </React.Fragment>
                    ))}
                </div>
            );
        }
    }
    
    render(){
        if(!this.props.item) {
            return <div>Laster</div>
        }
        return(
            <div className="gridContainer">
                <div className="begrepsHeader">
                    <Link className="tilbake" to={'/begrepskatalogen'}><Element>⇦ Tilbake</Element></Link>
                    <Link className="linker" to={'/begrepskatalogen'}><Element>Del begrepet</Element></Link>
                    <Link className="linker" to={'/begrepskatalogen'}><Element>Gi innspill til begrepet</Element></Link>
                </div>
                <div className="status">{this.isGodkjent()}</div>
                <div className="venstreFeltAvSiden">
                    <div className="begrepsoverskrift">
                        <Sidetittel>
                            {this.props.item.term}
                        </Sidetittel>
                        <br/>
                        <Undertittel>{this.props.item.key}</Undertittel>
                    </div>

                    <div className="begrepsforklaring">
                        <Ingress>Begrepsforklaring</Ingress>
                        <Normaltekst>{this.props.item.definisjon}</Normaltekst>
                    </div>

                    <div className="eksempler">
                        <Ingress>Eksempler</Ingress>
                        <Normaltekst>PLACEHOLDER PLACEHOLDER</Normaltekst>
                    </div>

                    <div className="kilde">
                        <Ingress>Kilde</Ingress>
                        <Normaltekst>
                            {this.props.item.kilde != "" ? this.props.item.kilde : "Ingen funnet."}
                        </Normaltekst>
                    </div>

                    <div className="relasjoner">
                        <Ingress>Relasjon til andre begreper</Ingress>
                        {this.relationFinder()}{this.state.isFound ? "" : <AlertStripeFeil>Begrepet finnes ikke.</AlertStripeFeil>}
                    </div>

                    <div className="revidert">
                        <Ingress>Sist Revidert</Ingress>
                        <Normaltekst>{this.formatDate(this.props.item.oppdatert)}</Normaltekst>
                    </div>
                </div>
                
                <div className="hoyreFeltAvSiden">
                    <div className="beskrivelsestype">
                        <Ingress>Skrevet av</Ingress>
                        <Normaltekst>{this.props.item.assignee}</Normaltekst>
                    </div>

                    <div className="fagomraade">
                        <Ingress>Fagområde</Ingress>
                        <Normaltekst>
                            {this.props.item.fagomrade != "" ? this.props.item.fagomrade : "Ingen funnet."}
                        </Normaltekst>
                    </div>

                    <div className="begrepseier">
                        <Ingress>Begrepseier</Ingress>
                        <Normaltekst>{this.props.item.begrepseier}<br/></Normaltekst>
                    </div>
                </div> 
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        termKey: state.termKey,
        items: state.items,
        item: state.item
    }
};

function matchDispatchToProps(dispatch){
    return bindActionCreators({
       fetchItem: fetchItem,
    }, dispatch);
}
export default connect(mapStateToProps, matchDispatchToProps)(TermPage);