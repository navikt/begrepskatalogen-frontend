import React from 'react';
import './Table.less';
import { Systemtittel, Normaltekst } from 'nav-frontend-typografi';


/*const mockupData = [
    {navn: 'Foreldrepenger', definisjon: 'penger til foreldre', fagomraade: 'Placeholder', begrepseier: 'Dennis', oppdatert:'Placeholder'},
    {navn: 'Placeholder', definisjon: 'penger til foreldre', fagomraade: 'Placeholder', begrepseier: 'Dennis', oppdatert:'Placeholder'},
    {navn: 'Placeholder', definisjon: 'penger til foreldre', fagomraade: 'Placeholder', begrepseier: 'Dennis', oppdatert:'Placeholder'},
    {navn: 'Placeholder', definisjon: 'penger til foreldre', fagomraade: 'Placeholder', begrepseier: 'Dennis', oppdatert:'Placeholder'},
    {navn: 'Placeholder', definisjon: 'penger til foreldre', fagomraade: 'Placeholder', begrepseier: 'Dennis', oppdatert:'Placeholder'}
]*/

const API = 'http://localhost:8080/api/issues';
const DEFAULT_QUERY = 'redux';

class Table extends React.Component{

/*    constructor(props){
        super(props);
        this.state = {
            mockupData: [
                {navn: 'Foreldrepenger', definisjon: 'penger til foreldre ', fagomraade: 'Placeholder', begrepseier: 'Dennis', oppdatert:'Placeholder'},
                {navn: 'Placeholder', definisjon: 'penger til foreldrepenger til foreldrepenger til http://localhost:1234/http:/localhost:1234/foreldrepenger til foreldre', fagomraade: 'Placeholder', begrepseier: 'Dennis', oppdatert:'Placeholder'},
                {navn: 'Placeholder', definisjon: 'penger til foreldre', fagomraade: 'Placeholder', begrepseier: 'Dennis', oppdatert:'Placeholder'},
                {navn: 'Placeholder', definisjon: 'penger til foreldre', fagomraade: 'Placeholder', begrepseier: 'Dennis', oppdatert:'Placeholder'},
                {navn: 'Placeholder', definisjon: 'penger til foreldre', fagomraade: 'Placeholder', begrepseier: 'Dennis', oppdatert:'Placeholder'},
                {navn: 'Foreldrepenger', definisjon: 'penger til foreldre ', fagomraade: 'Placeholder', begrepseier: 'Dennis', oppdatert:'Placeholder'},
                {navn: 'Placeholder', definisjon: 'penger til foreldrepenger til foreldrepenger til http://localhost:1234/http:/localhost:1234/foreldrepenger til foreldre', fagomraade: 'Placeholder', begrepseier: 'Dennis', oppdatert:'Placeholder'},
                {navn: 'Placeholder', definisjon: 'penger til foreldre', fagomraade: 'Placeholder', begrepseier: 'Dennis', oppdatert:'Placeholder'},
                {navn: 'Placeholder', definisjon: 'penger til foreldre', fagomraade: 'Placeholder', begrepseier: 'Dennis', oppdatert:'Placeholder'},
                {navn: 'Placeholder', definisjon: 'penger til foreldre', fagomraade: 'Placeholder', begrepseier: 'Dennis', oppdatert:'Placeholder'},
                {navn: 'Foreldrepenger', definisjon: 'penger til foreldre ', fagomraade: 'Placeholder', begrepseier: 'Dennis', oppdatert:'Placeholder'},
                {navn: 'Placeholder', definisjon: 'penger til foreldrepenger til foreldrepenger til http://localhost:1234/http:/localhost:1234/foreldrepenger til foreldre', fagomraade: 'Placeholder', begrepseier: 'Dennis', oppdatert:'Placeholder'},
                {navn: 'Placeholder', definisjon: 'penger til foreldre', fagomraade: 'Placeholder', begrepseier: 'Dennis', oppdatert:'Placeholder'},
                {navn: 'Placeholder', definisjon: 'penger til foreldre', fagomraade: 'Placeholder', begrepseier: 'Dennis', oppdatert:'Placeholder'},
                {navn: 'Placeholder', definisjon: 'penger til foreldre', fagomraade: 'Placeholder', begrepseier: 'Dennis', oppdatert:'Placeholder'},
                {navn: 'Foreldrepenger', definisjon: 'penger til foreldre ', fagomraade: 'Placeholder', begrepseier: 'Dennis', oppdatert:'Placeholder'},
                {navn: 'Placeholder', definisjon: 'penger til foreldrepenger til foreldrepenger til http://localhost:1234/http:/localhost:1234/foreldrepenger til foreldre', fagomraade: 'Placeholder', begrepseier: 'Dennis', oppdatert:'Placeholder'},
                {navn: 'Placeholder', definisjon: 'penger til foreldre', fagomraade: 'Placeholder', begrepseier: 'Dennis', oppdatert:'Placeholder'},
                {navn: 'Placeholder', definisjon: 'penger til foreldre', fagomraade: 'Placeholder', begrepseier: 'Dennis', oppdatert:'Placeholder'},
                {navn: 'Placeholder', definisjon: 'penger til foreldre', fagomraade: 'Placeholder', begrepseier: 'Dennis', oppdatert:'Placeholder'},{navn: 'Placeholder', definisjon: 'penger til foreldrepenger til foreldrepenger til http://localhost:1234/http:/localhost:1234/foreldrepenger til foreldre', fagomraade: 'Placeholder', begrepseier: 'Dennis', oppdatert:'Placeholder'},
                {navn: 'Placeholder', definisjon: 'penger til foreldre', fagomraade: 'Placeholder', begrepseier: 'Dennis', oppdatert:'Placeholder'},
                {navn: 'Placeholder', definisjon: 'penger til foreldre', fagomraade: 'Placeholder', begrepseier: 'Dennis', oppdatert:'Placeholder'},
                {navn: 'Placeholder', definisjon: 'penger til foreldre', fagomraade: 'Placeholder', begrepseier: 'Dennis', oppdatert:'Placeholder'},{navn: 'Placeholder', definisjon: 'penger til foreldrepenger til foreldrepenger til http://localhost:1234/http:/localhost:1234/foreldrepenger til foreldre', fagomraade: 'Placeholder', begrepseier: 'Dennis', oppdatert:'Placeholder'},
                {navn: 'Placeholder', definisjon: 'penger til foreldre', fagomraade: 'Placeholder', begrepseier: 'Dennis', oppdatert:'Placeholder'},
                {navn: 'Placeholder', definisjon: 'penger til foreldre', fagomraade: 'Placeholder', begrepseier: 'Dennis', oppdatert:'Placeholder'},
                {navn: 'Placeholder', definisjon: 'penger til foreldre', fagomraade: 'Placeholder', begrepseier: 'Dennis', oppdatert:'Placeholder'}
            ]
        }
    }*/

    

    constructor(props){
        super(props);
        this.state = {};
    }

    componentDidMount(){
        console.log("Halla")
        fetch(API)
        .then(res => res.json())
        .then(data => this.setState({items: data}));
    }

    renderTableData = () => {
        console.log(this.state)

        if (this.state['items']) {
            console.log('yes');
        }
        
        /*
        if(!this.state["hits"]){
            return false;
        }
            const { hits } = this.state;
            console.log("HER"+hits);
            return(
                <tr>
                    {hits.map(hit =>
                        <td key={hit.key}>
                            <p>{ hit.term }</p>
                       
                        </td>
                    )}
                </tr>
                
            );
            */
    }

    render(){
        return (
            <div className="altavtabell">
                <table className="begreper">
                    <thead className="separator">
                    <tr>
                    
                        <th><Systemtittel>Term</Systemtittel></th>
                        <th><Systemtittel>Definisjon</Systemtittel></th>
                        <th><Systemtittel>Fagområde</Systemtittel></th>
                        <th><Systemtittel>Begrepseier</Systemtittel></th>
                        <th><Systemtittel>Oppdatert</Systemtittel></th>
                    </tr>
                    
                    </thead>

                    <tbody>
                    {this.renderTableData()}
                    </tbody>
                </table>

            </div>

        );
    }
}

export default Table;