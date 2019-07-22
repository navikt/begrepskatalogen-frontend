import React from 'react';
import { Sidetittel, Ingress, Undertittel, Normaltekst, Element } from 'nav-frontend-typografi';
import './TermPage.less';
import { Link } from 'react-router-dom';
import { connect } from  'react-redux';
import { AlertStripeSuksess, AlertStripeFeil, AlertStripeAdvarsel, AlertStripe} from 'nav-frontend-alertstriper';
import Fuse from 'fuse.js';
import { termKey } from './redux/actions/AppActions';

export class TermPage extends React.Component{

    constructor(props){
        super(props);
    }

    isGodkjent = () => {
        if( this.props.termKey.status === 'Godkjent begrep') {
            return <AlertStripeSuksess size="25">Godkjent begrep</AlertStripeSuksess>;
        }
        else if(this.props.termKey.status === 'Utkast') {
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

    findTerm = (termName) =>{
        var options = {
            threshold: 0,
            shouldSort: true,
            keys: ["term"
                ]
        }
        console.log("terkey", this.props.items);
        var fuse = new Fuse(this.props.items, options);
        console.log("finn", termName);
        const res = fuse.search(termName);
        console.log("finn", res);
        this.props.dispatch(termKey(res));
        }

    relationFinder = () => {
        const length = this.props.termKey.relasjoner.length;
        if( length == 0 ) {
            return <Normaltekst>Ingen relasjoner funnet.</Normaltekst>;
        }
        return (
            <div className="relasjonListe">
                {this.props.termKey.relasjoner.map( rel => (
                    rel.hasOwnProperty("inwardIssue") ?
                        <React.Fragment key={rel.id}>
                            <Normaltekst>{rel.type.inward}</Normaltekst>
                            <Link to={'/begrepsside'} onClick={() => this.findTerm(rel.inwardIssue.fields.summary)}>{rel.inwardIssue.fields.summary}</Link>
                            {console.log("sum", rel.inwardIssue.fields.summary)}
                        </React.Fragment>
                        :
                        <React.Fragment key={rel.id}>
                            <Normaltekst>{rel.type.outward}</Normaltekst>
                            <Link to={'/begrepsside'} onClick={() => this.findTerm(rel.outwardIssue.fields.summary)}>{rel.outwardIssue.fields.summary}</Link>
                        </React.Fragment>
                ))}
            </div>
        );

    }
    
    render(){
        return(
            <div className="gridContainer">
                <div className="begrepsHeader">
                    <Link className="tilbake" to={'/søketabell'}><Element>⇦ Tilbake</Element></Link>
                    <Link className="linker" to={'/'}><Element>Del begrepet</Element></Link>
                    <Link className="linker" to={'/'}><Element>Gi innspill til begrepet</Element></Link>
                </div>
                <div className="status">{this.isGodkjent()}</div>
                <div className="venstreFeltAvSiden">
                    <div className="begrepsoverskrift">
                        <Sidetittel>
                            {this.props.termKey.term}
                        </Sidetittel>
                        <br/>
                        <Undertittel>{this.props.termKey.key}</Undertittel>
                    </div>

                    <div className="begrepsforklaring">
                        <Ingress>Begrepsforklaring</Ingress>
                        <Normaltekst>{this.props.termKey.definisjon}</Normaltekst>
                    </div>

                    <div className="eksempler">
                        <Ingress>Eksempler</Ingress>
                        <Normaltekst>PLACEHOLDER PLACEHOLDER</Normaltekst>
                    </div>

                    <div className="kilde">
                        <Ingress>Kilde</Ingress>
                        <Normaltekst>{this.props.termKey.kilde}</Normaltekst>
                    </div>

                    <div className="relasjoner">
                        <Ingress>Relasjon til andre begreper</Ingress>
                        {this.relationFinder()}
                    </div>

                    <div className="revidert">
                        <Ingress>Sist Revidert</Ingress>
                        <p>{this.formatDate(this.props.termKey.oppdatert)}</p>
                    </div>
                </div>
                <div className="hoyreFeltAvSiden">
                    <div className="beskrivelsestype">
                        <Ingress>Skrevet av</Ingress>
                        <Normaltekst>{this.props.termKey.assignee}</Normaltekst>
                    </div>

                    <div className="fagomraade">
                        <Ingress>Fagområde</Ingress>
                        <Normaltekst>PLACEHOLDER</Normaltekst>
                    </div>

                    <div className="begrepseier">
                        <Ingress>Begrepseier</Ingress>
                        <Normaltekst>{this.props.termKey.begrepseier}<br/></Normaltekst>
                    </div>
                </div> 
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        termKey: state.termKey,
        items: state.items
    }
};

export default connect(mapStateToProps)(TermPage);