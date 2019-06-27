import React from 'react';
import { Flatknapp } from 'nav-frontend-knapper';
import './Footer.less';

class Footer extends React.Component {
    render() {

        return (

            //Todo: LEgge til router så knappene fungerer. 
            <div className="footer">
                
                <Flatknapp>Til toppen</Flatknapp>
                <Flatknapp>Søk i katalogen</Flatknapp>
                <Flatknapp>Meld inn nytt begrep</Flatknapp>
            </div>

        )
    }
}

export default Footer;