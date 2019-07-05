import React, { Component } from 'react';
import Table from './components/table/Table';
import { Ingress } from 'nav-frontend-typografi';
import './Home.less';


export class Home extends Component {
    constructor(){
        super();
        this.state = {
            isHidden: true //true når tabellen skal være skjult 
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

                {this.state.isHidden ? 
                <Ingress className="seAlleBegrepText">Søk etter et begrep, stykkord eller 
                    <button onClick = {this.toggleHidden.bind(this)}>
                        se alle begrepene</button> </Ingress> 
                        : 
                        <div className="afterSearch">
                            <Ingress>Viser XX godkjente begreper relevant til ditt søk.</Ingress> 
                        </div>
                    }
                
                {this.state.isHidden ?
                    <div className="beforeSearch">
                    <Ingress>Katalogen skal vises etter du har søkt etter term, eller valgt å vise <br/>  alle begrepene i katalogen</Ingress> 
                    </div>
                    :
                    <Table/>
                }
                
                

            </div>
        );
    }
}

export default Home;
