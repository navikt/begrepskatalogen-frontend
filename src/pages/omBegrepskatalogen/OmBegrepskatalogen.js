import React from 'react';
import "./OmBegrepskatalogen.less"

function OmBegrepskatalogen(){
    return (
        <div className="omBegrepsKatalogen">
            <h1>Om Begrepskatalogen</h1>

            <p>Begrepskatalogen i NAV skal samle NAVs viktigste begreper på ett sted og være kilde for NAVs forståelse av termer og begreper. 
                Målet er å standardisere begrepsbruken internt og synliggjøre likheter og forskjeller i informasjonen vi bruker.
                Begrepskatalogen vil også kunne gi enkle juridiske avklaringer. 
                Sammen med Felles informasjonsmodell (FIM) og ny kodeverksløsning med mer er Begrepskatalogen en sentral del av IKT-grunnmuren for moderniserte løsninger.
                Informasjonen i katalogen lagres med metadata som gjør det mulig å se sammenhenger mellom begreper for både menneske og maskin. 
                Dette kan tydeliggjøre avvik i begrepsbruk og bidra til å analysere konsekvenser av endringer i IKT-systemene våre.
            </p>
        </div>
    );
}

export default OmBegrepskatalogen;