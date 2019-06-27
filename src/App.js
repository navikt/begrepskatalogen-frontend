import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Navigation from './components/Navigation';
import KontaktOss from './KontaktOss';
import Home from './Home';
<<<<<<< HEAD
import Table from './components/table/Table';
import './App.less'
=======
import SearchBar from './components/SearchBar/SearchBar';
>>>>>>> f7dd7d9083406839c66e52913a3b5ca537735f4c




class App extends Component{

    render(){

        return (
            <Router>
            <div className= "App">

                <Navigation/>
                <Route path="/" exact component={Home}/>
                <Route path="/kontaktOss" component = {KontaktOss}/>
<<<<<<< HEAD
                <Table/>
=======
                <SearchBar/>
>>>>>>> f7dd7d9083406839c66e52913a3b5ca537735f4c

            </div>
            </Router>

        );
    }
}

export default App;