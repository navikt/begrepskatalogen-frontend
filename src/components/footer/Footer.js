import React from 'react';
import { Flatknapp } from 'nav-frontend-knapper';
import './Footer.less';
import ScrollUpButton from 'react-scroll-up-button';

class Footer extends React.Component {
    render() {

        return (

            //Todo: LEgge til router så knappene fungerer. 
            <div className="footer">
                <div className="footerElements">
                    <ScrollUpButton><Flatknapp>Til toppen</Flatknapp></ScrollUpButton>
                    <Flatknapp>Søk i katalogen</Flatknapp>
                    <Flatknapp>Meld inn nytt begrep</Flatknapp>
                </div>
            </div>

        )
    }
}

export default Footer;