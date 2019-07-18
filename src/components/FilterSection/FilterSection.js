import React from 'react';
import { Checkbox} from 'nav-frontend-skjema';
import './FilterSection.less';
import { Undertittel, Systemtittel } from 'nav-frontend-typografi';


function FilterSection(){
    return(
        <div className="filterwrapper">
            
            <div className="Overskrift">
                <Systemtittel>Filtrer etter kategori</Systemtittel>
            </div>

            <div className="katergorioverskrift">
                <Undertittel>Implisitt status</Undertittel>
            </div>

            <div className="filtercheckbox">
                <Checkbox label={"Godkjente"}/>
                <Checkbox label={"Utkast"}/>
                <Checkbox label={"Avviste"}/>
            </div>

            <div className="katergorioverskrift">
                <Undertittel>Fagområder</Undertittel>
            </div>

            <div className="filtercheckbox">
                <Checkbox label={"Fagområde1"}/>
                <Checkbox label={"Fagområde2"}/>
                <Checkbox label={"Fagområde3"}/>
            </div>

            <div className="katergorioverskrift">
                <Undertittel>Kildetype</Undertittel>
            </div>

            <div className="filtercheckbox">
                <Checkbox label={"Kildetype1"}/>
                <Checkbox label={"Kildetype2"}/>
                <Checkbox label={"Kildetype3"}/>
            </div>


            <div className="katergorioverskrift">
                <Undertittel>Ekstern eierskap?</Undertittel>
            </div>

            <div className="filtercheckbox">
                <Checkbox label={"Ja"}/>
                <Checkbox label={"Nei"}/>
            </div>


            <div className="katergorioverskrift">
                <Undertittel>Offentlig Status</Undertittel>
            </div>

            <div className="filtercheckbox">
                <Checkbox label={"Ja"}/>
                <Checkbox label={"Nei"}/>
            </div>



        </div>
    );
}

export default FilterSection;