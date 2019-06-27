import React, { Component } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import Header from './composition/Header';
import './App.less'


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