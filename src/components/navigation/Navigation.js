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
                            <Link to={"/begrepskatalogen/ombegrepskatalogen"} id="omBegrepeskatalog" className="navStyle__navLink lenke"> 
                                <Element>Om begrepskatalogen</Element>
                            </Link>
                        </li>
                        <li> 
                            <Link to={"/begrepskatalogen/kontaktoss"} id="kontak-tOss" className="navStyle__navLink lenke">
                                <Element>Kontakt oss</Element>
                            </Link>
                        </li>
                        <li>  
                            <Link to={'/begrepskatalogen/Meld-inn-nytt-begrep'} id="meldInnNyttBegrep" className="navStyle__navLink lenke">
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
