import React from 'react';
import { Flatknapp } from 'nav-frontend-knapper';
import './Footer.less';
import ScrollUpButton from 'react-scroll-up-button';
import { Element } from 'nav-frontend-typografi';

class Footer extends React.Component {
    render() {

        return (

            //Todo: LEgge til router så knappene fungerer. 
            <div className="footer">
                <div className="footerElements">
                    <ScrollUpButton><Element className="element">Til toppen</Element></ScrollUpButton>
                    <Element className="element">Søk i katalogen</Element>
                    <Element className="element">Meld inn nytt begrep</Element>
                </div>
            </div>

        )
    }
}

export default Footer;