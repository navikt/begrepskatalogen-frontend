import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Navigation from './components/Navigation';
import KontaktOss from './KontaktOss';
import Home from './Home';
import Table from './components/table/Table';
import './App.less'
import SearchBar from './components/SearchBar/SearchBar';
import Footer from './components/footer/Footer';




class App extends Component{

    render(){

        return (
            <Router>
            <div className= "App">

                <Navigation/>
                <Route path="/" exact component={Home}/>
                <Route path="/kontaktOss" component = {KontaktOss}/>
                <Table/>
                <SearchBar/>
                <Footer/>
            </div>
            </Router>

        );
    }
}

export default App;