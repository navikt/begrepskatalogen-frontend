import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from './composition/header/Header';
import './App.less';
import Footer from './composition/footer/Footer';
import { connect } from 'react-redux';
import Home from './pages/home/Home';
import KontaktOss from './pages/kontaktoss/KontaktOss';
import OmBegrepskatalogen from './pages/omBegrepskatalogen/OmBegrepskatalogen';
import TermPage from './pages/termpage/TermPage';
import Table from './components/table/Table';
import { fetchData } from './redux/actions/AppActions';


class App extends Component{

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.dispatch(fetchData());
    }
   
    render() { 
        return (
            <div className="App">
                <Router>
                    <Header/>
                    <div className="body">
                        <Route exact path='/begrepskatalogen' component={Home}/>
                        <Route exact path='/ombegrepskatalogen' component={OmBegrepskatalogen}/>
                        <Route exact path='/kontaktoss' component={KontaktOss}/>
                        <Route exact path='/begrepsside' component={TermPage}/>
                        <Route exact path='/søketabell' component={Table}/>
                        <Route exact path='/meld-inn-nytt-begrep' component={() => {
                            window.location.href='http://jira.adeo.no/secure/CreateIssueDetails!init.jspa?pid=10550&issuetype=47&summary=Term&customfield_15719=18010'; 
                            return null;
                        }}/>
                    </div>
                    <Footer/>
                </Router>
            </div>
        );
    }
}

const mapStateToProps = (store) => ({
    loading: store.loading,
    counter: store.counter, 
    items: store.items
});

export default connect(mapStateToProps)(App);