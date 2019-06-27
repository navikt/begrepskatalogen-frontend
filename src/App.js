import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Navigation from './components/Navigation';
import KontaktOss from './KontaktOss';
import Home from './Home';


class App extends Component{

    render(){
        return (
            <Router>
            <div className= "App">
                <Navigation/>
                <Route path="/" exact component={Home}/>
                <Route path="/kontaktOss" component = {KontaktOss}/>
            </div>
            </Router>
        );
    }
}

export default App;