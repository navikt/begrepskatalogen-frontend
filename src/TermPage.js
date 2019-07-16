import React from 'react';
import { Sidetittel, Ingress, Undertittel, Normaltekst, Element } from 'nav-frontend-typografi';
import './TermPage.less';
import { Link } from 'react-router-dom';

export class TermPage extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="gridContainer">
          
                <div className="begrepsHeader">
                    <Link className="tilbake" to ={'/'}><Element>⇦ Tilbake</Element></Link>
                    <Link className="linker" to={'/'}><Element>Del begrepet</Element></Link>
                    <Link className="linker" to ={'/'}><Element >Gi innspill til begrepet</Element></Link>
                </div>

                <div  className= {"status" + (this.HERSKALDETSOMSKALBRUKESINN==='HVAENNDETSKALSTÅ' ? "Godkjent" : "Avvist")}><Normaltekst>Godkjent / Ikke godkjent begrep</Normaltekst></div>

                <div className="venstreFeltAvSiden">

                    <div className = "begrepsoverskrift">
                        <Sidetittel>Begrep</Sidetittel>
                        <br/>
                        <Undertittel>Kort beskrivelse av begrep</Undertittel>
                    </div>

                    <div className = "begrepsforklaring">
                        <Ingress>Begrepsforklaring</Ingress>
                        <Normaltekst>Konkret forklaring på begrepet</Normaltekst>
                    </div>

                    <div className = "eksempler">
                        <Ingress>Eksempler</Ingress>
                        <Normaltekst>Konkrete eksempler</Normaltekst>
                    </div>

                    <div className="kilde">
                        <Ingress>Kilde</Ingress>
                        <Normaltekst>xxxx</Normaltekst>
                    </div>

                    <div className ="relasjoner">
                        <Ingress>Relasjon til andre begreper (Relasjonstre?)</Ingress>
                        <p>xxxxx . xxxxx</p>
                    </div>

                    <div className="revidert">
                        <Ingress>Revidert</Ingress>
                        <p>xxx-xxxx-xxxxxx-o</p>
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
                        <Normaltekst>Avdeling osv .. <br/> med mer</Normaltekst>
                    </div>
                    
                </div> 
            </div>
        );
    }
}

export default TermPage;