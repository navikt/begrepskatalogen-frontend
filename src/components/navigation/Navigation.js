import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Element } from 'nav-frontend-typografi';
import { Knapp, Flatknapp } from 'nav-frontend-knapper';
import 'nav-frontend-lenker-style'
import './Navigation.less'
import './HeaderButtons.less'

import { toggleFancy } from '../../redux/actions/AppActions';


class Navigation extends React.Component{
    handleClick = () => {
        this.props.dispatch(togggleFancy());
    }

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
                                    <Knapp onClick={this.handleClick}>Meld inn nytt begrep</Knapp>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                   
                </div>

        );
    }
}

export default connect()(Navigation);
