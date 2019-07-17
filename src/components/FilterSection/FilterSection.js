import React from 'react';
import { Checkbox} from 'nav-frontend-skjema';
import { Normaltekst } from 'nav-frontend-typografi';


function FilterSection(){
    return(
        <div className="wrapper">
            
            <div>
                <Normaltekst>Implisitt status</Normaltekst>
            </div>

            <div>
                <Checkbox label={"Godkjente"}/>
                <Checkbox label={"Utkast"}/>
                <Checkbox label={"Avviste"}/>
            </div>

            <div>
                <Normaltekst>Begrepseier</Normaltekst>
            </div>

            <div>
                <Checkbox label={"Begrepsier1'"}/>
                <Checkbox label={"Begrepsier2'"}/>
                <Checkbox label={"Begrepsier3'"}/>
            </div>
            
            <div>
                <Normaltekst>Fagområder</Normaltekst>
            </div>

            <div>
                <Checkbox label={"Fagområde1'"}/>
                <Checkbox label={"Fagområde2'"}/>
                <Checkbox label={"Fagområde3'"}/>
            </div>

            <div>
                <Normaltekst>Kildetype</Normaltekst>
            </div>

            <div>
                <Checkbox label={"Kildetype1'"}/>
                <Checkbox label={"Kildetype2'"}/>
                <Checkbox label={"Kildetype3'"}/>
            </div>


            <div>
                <Normaltekst>Ekstern eierskap?</Normaltekst>
            </div>

            <div>
                <Checkbox label={"Ja'"}/>
                <Checkbox label={"Nei"}/>
            </div>


            <div>
                <Normaltekst>Offentlig Status</Normaltekst>
            </div>

            <div>
                <Checkbox label={"Ja'"}/>
                <Checkbox label={"Nei"}/>
            </div>



        </div>
    );
}

export default FilterSection;