import React from 'react';
import { Link } from 'react-router-dom';
import { Element } from 'nav-frontend-typografi';
import { Knapp, Flatknapp } from 'nav-frontend-knapper';
import 'nav-frontend-lenker-style'
import './Navigation.less'
import './HeaderButtons.less'

import KontaktOss from '../../KontaktOss';
import Home from '../../Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class Navigation extends React.Component{
   

    render(){
        return (

                <div>
                    <nav className="navStyle">
                        <ul className="navStyle__navLinks">
                            <li>
                            <Link to = {"/"} className ="navStyle__navLink lenke"> 
                                <Element >Om begrepskatalogen</Element>
                            </Link>
                            </li>
                            <li> 
                                <Link to = {"/kontaktoss"}  className ="navStyle__navLink lenke">
                                    <Element>Kontakt oss</Element>
                                </Link>
                            </li>
                            <li>  <Link to = {""} className ="navStyle__navLink lenke">
                                    <Knapp>Meld inn nytt begrep</Knapp>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                    <hr/>
                </div>

        );
    }
}

export default Navigation;
