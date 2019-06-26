import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import NyttBegrep from './KontaktOss';

import { Flatknapp } from 'nav-frontend-knapper';
import KontaktOss from './KontaktOss';



class App extends Component{

    render(){

        return (
            <Router>
            <div className= "App">
                <h1>Hei</h1>
                <Flatknapp>Kontakt oss</Flatknapp>
                
        <Route path = "/KontaktOss" exact={true} render = {{props} => (<KontaktOss {...props}/>)/>
            </div>
            </Router>

        );
    }
}

export default App;