import React, {Component} from 'react';
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom';
import Header from './composition/header/Header';
import './App.less';
import Footer from './composition/footer/Footer';
import {connect} from 'react-redux';
import Home from './pages/home/Home';
import KontaktOss from './pages/kontaktoss/KontaktOss';
import OmBegrepskatalogen from './pages/omBegrepskatalogen/OmBegrepskatalogen';
import TermPage from './pages/termpage/TermPage';
import Table from './components/table/Table';
import {fetchData} from './redux/actions/AppActions';

class App extends Component {

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
            <Switch>
              <Route exact path='/'><Redirect to="/begrepskatalogen"/></Route>
              <Route exact path='/begrepskatalogen' component={Home}/>
              <Route exact path='/begrepskatalogen/om-begrepskatalogen' component={OmBegrepskatalogen}/>
              <Route exact path='/begrepskatalogen/kontakt-oss' component={KontaktOss}/>
              <Route exact path='/begrepskatalogen/begrep/:id' component={TermPage}/>
              <Route exact path='/begrepskatalogen/søketabell' component={Table}/>
            </Switch>
            <Footer/>
          </Router>
        </div>
    );
  }
}

const mapStateToProps = (store) => ({
  loading: store.loading,
  counter: store.counter,
  items: store.items,
});

export default connect(mapStateToProps)(App);
