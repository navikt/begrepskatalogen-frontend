import React from 'react';
import { Checkbox} from 'nav-frontend-skjema';
import './FilterSection.less';
import { Normaltekst } from 'nav-frontend-typografi';


function FilterSection(){
    return(
        <div className="filterwrapper">
            
            <div className="overskrift">
                <Normaltekst>Implisitt status</Normaltekst>
            </div>

            <div>
                <Checkbox label={"Godkjente"}/>
                <Checkbox label={"Utkast"}/>
                <Checkbox label={"Avviste"}/>
            </div>

            <div className="overskrift">
                <Normaltekst>Fagområder</Normaltekst>
            </div>

            <div>
                <Checkbox label={"Fagområde1'"}/>
                <Checkbox label={"Fagområde2'"}/>
                <Checkbox label={"Fagområde3'"}/>
            </div>

            <div className="overskrift">
                <Normaltekst>Kildetype</Normaltekst>
            </div>

            <div>
                <Checkbox label={"Kildetype1'"}/>
                <Checkbox label={"Kildetype2'"}/>
                <Checkbox label={"Kildetype3'"}/>
            </div>


            <div className="overskrift">
                <Normaltekst>Ekstern eierskap?</Normaltekst>
            </div>

            <div>
                <Checkbox label={"Ja'"}/>
                <Checkbox label={"Nei"}/>
            </div>


            <div className="overskrift">
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