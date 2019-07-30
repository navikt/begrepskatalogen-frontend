import React from 'react';
import { Sidetittel, Ingress, Undertittel, Normaltekst, Element } from 'nav-frontend-typografi';
import './TermPage.less';
import { Link } from 'react-router-dom';
import { connect } from  'react-redux';
<<<<<<< HEAD:src/TermPage.js
import { AlertStripeSuksess, AlertStripeFeil, AlertStripeAdvarsel, AlertStripe} from 'nav-frontend-alertstriper';
import { bindActionCreators } from 'redux';
import { termKeyFinder } from './redux/actions/AppActions';
=======
import { AlertStripeSuksess, AlertStripeFeil, AlertStripeAdvarsel} from 'nav-frontend-alertstriper';
import { bindActionCreators } from 'redux';
import { termKeyFinder } from '../../redux/actions/AppActions';
>>>>>>> 618826f516151f00d7b824f3d12c2e0556e99e57:src/pages/termpage/TermPage.js

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

    findTerm = (termName) => {
        var found = this.props.items.filter(function(item) {
<<<<<<< HEAD:src/TermPage.js
            return item.term == termName;
        });
        this.props.termKeyFinder(found[0]);
    }

=======
            return item.key == termName;
        });
        this.props.termKeyFinder(found[0]);
    }
>>>>>>> 618826f516151f00d7b824f3d12c2e0556e99e57:src/pages/termpage/TermPage.js

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
<<<<<<< HEAD:src/TermPage.js
                            <Normaltekst>{rel.type.inward}</Normaltekst>
                            <button onClick={() => this.findTerm(rel.inwardIssue.fields.summary)}>{rel.inwardIssue.fields.summary}</button>                        </React.Fragment>
                        :
                        <React.Fragment key={rel.id}>
                            <Normaltekst>{rel.type.outward}</Normaltekst>
                            <button onClick={() => this.findTerm(rel.outwardIssue.fields.summary)}>{rel.outwardIssue.fields.summary}</button>
=======
                            <Normaltekst className="capitalize">{rel.type.inward}
                                <button onClick={() => this.findTerm(rel.inwardIssue.key)}>{rel.inwardIssue.fields.summary}</button></Normaltekst>                        
                        </React.Fragment>
                        :
                        <React.Fragment key={rel.id}>
                            <Normaltekst className="capitalize">{rel.type.outward}
                            <button onClick={() => this.findTerm(rel.outwardIssue.key)}>{rel.outwardIssue.fields.summary}</button></Normaltekst>
>>>>>>> 618826f516151f00d7b824f3d12c2e0556e99e57:src/pages/termpage/TermPage.js
                        </React.Fragment>
                ))}
            </div>
        );
    }
    
    render(){
        return(
            <div className="gridContainer">
                <div className="begrepsHeader">
                    <Link className="tilbake" to={'/'}><Element>⇦ Tilbake</Element></Link>
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
                        <Normaltekst>
                            {this.props.termKey.kilde != "" ? this.props.termKey.kilde : "Ingen funnet."}
                        </Normaltekst>
                    </div>

                    <div className="relasjoner">
                        <Ingress>Relasjon til andre begreper</Ingress>
                        {this.relationFinder()}
                    </div>

                    <div className="revidert">
                        <Ingress>Sist Revidert</Ingress>
                        <Normaltekst>{this.formatDate(this.props.termKey.oppdatert)}</Normaltekst>
                    </div>
                </div>
                
                <div className="hoyreFeltAvSiden">
                    <div className="beskrivelsestype">
                        <Ingress>Skrevet av</Ingress>
                        <Normaltekst>{this.props.termKey.assignee}</Normaltekst>
                    </div>

                    <div className="fagomraade">
                        <Ingress>Fagområde</Ingress>
                        <Normaltekst>
                            {this.props.termKey.fagomrade != "" ? this.props.termKey.fagomrade : "Ingen funnet."}
                        </Normaltekst>
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

function matchDispatchToProps(dispatch){
    return bindActionCreators({
       termKeyFinder: termKeyFinder
    }, dispatch);
}
export default connect(mapStateToProps, matchDispatchToProps)(TermPage);