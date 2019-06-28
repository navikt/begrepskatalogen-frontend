import React, { Component } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import Header from './composition/header/Header';
import './App.less'
import SearchBar from './components/SearchBar/SearchBar';
import FilterField from './components/FilterSelectField/FilterField';
import SortField from './components/SortSelectField/SortField';
import Footer from './components/footer/Footer';



import Table from './components/table/Table';

class App extends Component{

    render(){
        return (
            <div className= "App">
                <Router>
                    <Header/>
                    <SearchBar/>
                    <FilterField/><SortField/>
                    <Table/>
                    <Footer/>
                </Router>
            </div>
        );
    }
}

export default App;