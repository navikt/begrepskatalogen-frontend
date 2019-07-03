import React, { Component } from 'react';
import Table from './components/table/Table';
import { Ingress } from 'nav-frontend-typografi';
import FilterField from './components/FilterSelectField/FilterField';
import SortField from './components/SortSelectField/SortField';
import './Home.less';


export class Home extends Component {
    constructor(){
        super();
        this.state = {
            isHidden: true
        }
    }
    
    toggleHidden(){
        this.setState({
            isHidden: !this.state.isHidden
        })
    }

    render() {
        return (
            <div>

                <Ingress>Søk etter et begrep, stykkord eller 
                    <button onClick = {this.toggleHidden.bind(this)}>
                        se alle begrepene</button> </Ingress>
                <br/>
                
                {this.state.isHidden ? <p>hei</p>:<Table/>}
                
                

            </div>
        );
    }
}

export default Home;
