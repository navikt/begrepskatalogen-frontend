import React from 'react';
import { Link } from 'react-router-dom';
import { Element } from 'nav-frontend-typografi';
import 'nav-frontend-lenker-style';
import './Navigation.less';
import './HeaderButtons.less';

class Navigation extends React.Component{
    
    render() {
        return (
            <div>
                <nav className="navStyle">
                    <ul className="navStyle__navLinks">
                        <li>
                            <Link to={"/ombegrepskatalogen"} id="omBegrepeskatalog" className="navStyle__navLink lenke"> 
                                <Element>Om begrepskatalogen</Element>
                            </Link>
                        </li>
                        <li> 
                            <Link to={"/kontaktoss"} id="kontaktOss" className="navStyle__navLink lenke">
                                <Element>Kontakt oss</Element>
                            </Link>
                        </li>
                        <li>  
                            <Link to={'/meld-inn-nytt-begrep'} id="meldInnNyttBegrep" className="navStyle__navLink lenke">
                                <Element>Meld inn nytt begrep</Element>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        );
    }
}

export default Navigation;
