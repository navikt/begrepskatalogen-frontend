import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Navigation from './components/Navigation';
import KontaktOss from './KontaktOss';
import Home from './Home';
import SearchBar from './components/SearchBar/SearchBar';




class App extends Component{

    render(){

        return (
            <Router>
            <div className= "App">

                <Navigation/>
                <Route path="/" exact component={Home}/>
                <Route path="/kontaktOss" component = {KontaktOss}/>
                <SearchBar/>

            </div>
            </Router>

        );
    }
}

export default App;