import React, { Component } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import Header from './composition/Header';

class App extends Component{

    render(){
        return (
            <div className= "App">
                <Router>
                    <Header/>
                </Router>
            </div>
        );
    }
}

export default App;