import React from 'react';
import { Sidetittel, Ingress, Undertittel, Normaltekst, Element } from 'nav-frontend-typografi';
import './TermPage.less';
import { Link } from 'react-router-dom';
import {connect} from  'react-redux';

export class TermPage extends React.Component{

    constructor(props){
        super(props);
    }


    isGodkjent = () => {
        return (this.props.termKey.status === 'Godkjent begrep');
    }

    
    
    render(){
        
        return(
            <div className="gridContainer">
          
                <div className="begrepsHeader">
                    <Link className="tilbake" to ={'/'}><Element>⇦ Tilbake</Element></Link>
                    <Link className="linker" to={'/'}><Element>Del begrepet</Element></Link>
                    <Link className="linker" to ={'/'}><Element >Gi innspill til begrepet</Element></Link>
                </div>

                <div className = "status">
                <div className = {this.isGodkjent() ? "statusGodkjent" : "statusAvvist"}><Normaltekst> {console.log(this.isGodkjent())}{this.props.termKey.status}</Normaltekst></div>
                </div>
                <div className="venstreFeltAvSiden">

                    <div className = "begrepsoverskrift">
                    
                        <Sidetittel>
                        {this.props.termKey.term}
                        </Sidetittel>
                        <br/>
                        <Undertittel>{this.props.termKey.key}</Undertittel>
                    </div>

                    <div className = "begrepsforklaring">
                        <Ingress>Begrepsforklaring</Ingress>
                        <Normaltekst>{this.props.termKey.definisjon}</Normaltekst>
                    </div>

                    <div className = "eksempler">
                        <Ingress>PLACEHOLDER</Ingress>
                        <Normaltekst>PLACEHOLDER PLACEHOLDER</Normaltekst>
                    </div>

                    <div className="kilde">
                        <Ingress>Kilde</Ingress>
                        <Normaltekst>{this.props.termKey.kilde}</Normaltekst>
                    </div>

                    <div className ="relasjoner">
                        <Ingress>Relasjon til andre begreper (Relasjonstre?)</Ingress>
                        <p>PLACEHOLDER . PLACEHOLDER</p>
                    </div>

                    <div className="revidert">
                        <Ingress>Sist Revidert</Ingress>
                        <p>{this.props.termKey.oppdatert}</p>
                    </div>
                </div>
                <div className = "hoyreFeltAvSiden">
                    <div className="beskrivelsestype">
                        <Ingress>Skrevet av</Ingress>
                        <Normaltekst>{this.props.termKey.assignee}</Normaltekst>
                    </div>

                    <div className = "fagomraade">
                        <Ingress>Fagområde</Ingress>
                        <Normaltekst>PLACEHOLDER</Normaltekst>
                    </div>

                    <div className = "begrepseier">
                        <Ingress>Begrepseier</Ingress>
                        <Normaltekst>{this.props.termKey.begrepseier}<br/> </Normaltekst>
                    </div>
                    
                </div> 
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        termKey: state.termKey
    }
};

export default connect(mapStateToProps)(TermPage);