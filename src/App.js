import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './composition/header/Header';
import './App.less';
import SearchBar from './components/SearchBar/SearchBar';
import FilterField from './components/FilterSelectField/FilterField';
import SortField from './components/SortSelectField/SortField';
import Footer from './components/footer/Footer';
import Table from './components/table/Table';
import { connect } from 'react-redux';
import Home from './Home';
import KontaktOss from './KontaktOss';
import TermPage from './TermPage';

import { fetchData, addOne, addX, searchResult } from './redux/actions/AppActions';

const mapStateToProps = (store) => ({
    fancy: store.fancy,
    loading: store.loading,
    counter: store.counter,
    
    /*
    API: store.API.items,
    loading: store.API.loading,
    error: store.API.error*/
});


class App extends Component{

    constructor(props) {
        super(props);

    }

    componentDidMount(){
        console.log("funker");
        this.props.dispatch(fetchData());
        this.props.dispatch(addOne());
        this.props.dispatch(addX(5));
    }
   

    render(){
        return (
            <div className="App">
                { this.props.fancy && <div id="fancy" /> }
                <Router>
                    <Header/>
            
                    <Route exact path = '/' component = {Home} />
                    <Route exact path='/kontaktoss' component = {KontaktOss}/>
                    <Route exact path = '/begrepsside' component = {TermPage}/>
                    <Route exact path = '/meld-inn-nytt-begrep' component ={() => {
                        window.location.href = 'http://jira.adeo.no/secure/CreateIssueDetails!init.jspa?pid=10550&issuetype=47&summary=Term&customfield_15719=18010'; return null;
                    }}/>
                    <Footer/>

                </Router>
            </div>
        );
    }
}

export default connect(mapStateToProps)(App);