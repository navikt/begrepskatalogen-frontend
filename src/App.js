import React, { Component } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import Header from './composition/header/Header';
import './App.less'
import SearchBar from './components/SearchBar/SearchBar';
import Table from './components/table/Table';

class App extends Component{

    render(){
        return (
            <div className= "App">
                <Router>
                    <Header/>
                    <Table/>
                    <SearchBar/>
                </Router>
            </div>
        );
    }
}

export default App;