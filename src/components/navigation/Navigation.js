import React from 'react';
import { Link } from 'react-router-dom';
import { Element } from 'nav-frontend-typografi';
import { Knapp } from 'nav-frontend-knapper';
import 'nav-frontend-lenker-style'
import './Navigation.less'
import './HeaderButtons.less'

function Navigation(){
    return (
        <nav className="navStyle">
            <ul className="navStyle__navLinks">
                <Link className="navStyle__navLink lenke"  to="">
                <li className="header-button"><Element>Om begrepskatalogen</Element></li>
                </Link>
                <Link className="navStyle__navLink lenke" to="/KontaktOss">
                <li className="header-button"><Element>Kontakt oss</Element></li>
                </Link>
                <Link to="">
                <li className="header-button"><Knapp>MELD INN NYTT BEGREP</Knapp></li>
                </Link>
            </ul>
        </nav>
    );
}

export default Navigation;
