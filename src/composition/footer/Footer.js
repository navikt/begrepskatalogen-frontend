import React from 'react';
import './Footer.less';
import ScrollUpButton from 'react-scroll-up-button';
import { Element } from 'nav-frontend-typografi';
import { Link } from 'react-router-dom';

class Footer extends React.Component {
    
    render() {
        return (
            //Todo: LEgge til router så knappene fungerer. 
            <div className="footer">
                <div className="footerElements">
                    <ScrollUpButton>
                        <Element className="element">Til toppen</Element>
                    </ScrollUpButton>
                    <Element className="element">Søk i katalogen</Element>
                    <Link to={'/meld-inn-nytt-begrep'}><Element className="element">Meld inn nytt begrep</Element></Link>
                </div>
            </div>
        );
    }
}

export default Footer;