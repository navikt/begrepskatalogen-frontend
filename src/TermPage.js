import React from 'react';
import { Sidetittel, Ingress, Undertittel, Normaltekst, Element } from 'nav-frontend-typografi';
import './TermPage.less';
import { Link } from 'react-router-dom';
import {connect} from  'react-redux';

export class TermPage extends React.Component{

    
    
    render(){
        
        return(
            <div className="gridContainer">
          
                <div className="begrepsHeader">
                    <Link className="tilbake" to ={'/'}><Element>⇦ Tilbake</Element></Link>
                    <Link className="linker" to={'/'}><Element>Del begrepet</Element></Link>
                    <Link className="linker" to ={'/'}><Element >Gi innspill til begrepet</Element></Link>
                </div>

                <div  className= "status"><Normaltekst>Godkjent / Ikke godkjent begrep</Normaltekst></div>

                <div className="venstreFeltAvSiden">

                    <div className = "begrepsoverskrift">
                    
                        <Sidetittel>
                            {this.props.items[0].term}
                        </Sidetittel>
                        <br/>
                        <Undertittel>{this.props.items[0].key}</Undertittel>
                    </div>

                    <div className = "begrepsforklaring">
                        <Ingress>Begrepsforklaring</Ingress>
                        <Normaltekst>{this.props.items[0].definisjon}</Normaltekst>
                    </div>

                    <div className = "eksempler">
                        <Ingress>Eksempler</Ingress>
                        <Normaltekst>Konkrete eksempler</Normaltekst>
                    </div>

                    <div className="kilde">
                        <Ingress>Kilde</Ingress>
                        <Normaltekst>{this.props.items[0].kilde}</Normaltekst>
                    </div>

                    <div className ="relasjoner">
                        <Ingress>Relasjon til andre begreper (Relasjonstre?)</Ingress>
                        <p>xxxxx . xxxxx</p>
                    </div>

                    <div className="revidert">
                        <Ingress>Sist Revidert</Ingress>
                        <p>{this.props.items[0].oppdatert}</p>
                    </div>
                </div>
                <div className = "hoyreFeltAvSiden">
                    <div className="beskrivelsestype">
                        <Ingress>Beskrivelsestype</Ingress>
                        <Normaltekst>Faglig definisjon</Normaltekst>
                    </div>

                    <div className = "fagomraade">
                        <Ingress>Fagområde</Ingress>
                        <Normaltekst>xxxxcccxcxcxxxxx</Normaltekst>
                    </div>

                    <div className = "begrepseier">
                        <Ingress>Begrepseier</Ingress>
                        <Normaltekst>{this.props.items[0].begrepseier}<br/> </Normaltekst>
                    </div>
                    
                </div> 
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        search: state.search,
        items: state.items,
        seeAllTerms: state.seeAllTerms,
        hideNotApproved: state.hideNotApproved,
        sort: state.sort
    }
};

export default connect(mapStateToProps)(TermPage);