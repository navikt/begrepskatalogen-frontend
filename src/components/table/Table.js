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
        this.renderTableData = this.renderTableData.bind(this);
        this.state = {};
    }

    componentDidMount(){
        fetch(API)
        .then(res => res.json())
        .then(data => this.setState({items: data}));
    }

    renderTableData(){
        if(!this.state.items){
            return false;
        }
        return this.state.items.map((item) => {
            const {key,term,assignee,definisjon,oppdatert} = item
            return(
                <tr key= {key}>
                    <td><Normaltekst>{term}</Normaltekst></td>
                    <td><Normaltekst>{definisjon}</Normaltekst></td>
                    <td><Normaltekst>{assignee}</Normaltekst></td>
                    <td><Normaltekst>{oppdatert}</Normaltekst></td>
                </tr>
            );
        })
        
    }

    render(){
        return (
            <div className="altavtabell">
                <table className="begreper">
                    <thead className="separator">
                    <tr>
                        <th><Systemtittel>Term</Systemtittel></th>
                        <th><Systemtittel>Definisjon</Systemtittel></th>
                        <th><Systemtittel>Begrepseier</Systemtittel></th>
                        <th><Systemtittel>Oppatert</Systemtittel></th>
        
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