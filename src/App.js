import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './composition/header/Header';
import './App.less'
import SearchBar from './components/SearchBar/SearchBar';
import FilterField from './components/FilterSelectField/FilterField';
import SortField from './components/SortSelectField/SortField';
import Footer from './components/footer/Footer';
import Table from './components/table/Table';
import { connect } from 'react-redux';
import Home from './Home';
import KontaktOss from './KontaktOss';

const mapStateToProps = (store) => ({
    fancy: store.fancy
});


class App extends Component{

    constructor(props) {
        super(props);

    }

  

    render(){
        return (
            <div className="App">
                { this.props.fancy && <div id="fancy" /> }
                <Router>
                    <Header/>
                    <SearchBar/>
                    <Route exact path = '/' component = {Home} />
                    <Route exact path='/kontaktoss' component = {KontaktOss}/>
                    <Footer/>

                </Router>
            </div>
        );
    }
}

export default connect(mapStateToProps)(App);