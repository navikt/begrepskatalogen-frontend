import React from 'react';
import { Sidetittel, Ingress, Undertittel, Normaltekst} from 'nav-frontend-typografi';
import { Link } from 'nav-frontend-knapper';
import './TermPage.less';

export class TermPage extends React.Component{

    render(){
        return(
            <div className="gridContainer">
          
                <div className="begrepsHeader">
                   
                    <Normaltekst className="status">Status</Normaltekst>
                    <Normaltekst className="linker">Del begrepet</Normaltekst>
                    <Normaltekst className="linker">Gi innspill til begrepet</Normaltekst>
                </div>
                <div className="venstreFeltAvSiden">
                    <div className = "begrepsoverskrift">
                        <Sidetittel>Begrep</Sidetittel>
                        <br/>
                        <Undertittel>Kort beskrivelse av begrep</Undertittel>
                    </div>
                    <hr/>
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