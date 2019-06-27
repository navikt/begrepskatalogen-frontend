import React from 'react';
import { Flatknapp, Knapp } from 'nav-frontend-knapper';
import { Link } from 'react-router-dom';


function Navigation(){
    return (
        <nav style = {navStyle}>
            <ul style = {navLinks}>
                <Link to = "">
                <li><Flatknapp>Om begrepskatalogen</Flatknapp></li>
                </Link>
                <Link to= "/KontaktOss">
                <li><Flatknapp>Kontakt oss</Flatknapp></li>
                </Link>
                <Link  to = "">
                <li><Knapp>MELD INN NTT BEGREP</Knapp></li>
                </Link>
            </ul>
        </nav>

    )
}

export default Navigation;

const navStyle = {
    display: 'flex',
    alignItems: 'right',
    minHeight: '10vh'
}

const navLinks = {
    width: '40%',
    display: 'flex',
    justfyContent: 'space-around',
    alignItems: 'right',
    listStyle: 'none'
}