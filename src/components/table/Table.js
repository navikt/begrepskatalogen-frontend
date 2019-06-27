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

class Table extends React.Component{

    constructor(props){
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
                {navn: 'Placeholder', definisjon: 'penger til foreldre', fagomraade: 'Placeholder', begrepseier: 'Dennis', oppdatert:'Placeholder'}
            ]
        }
    }

/*    constructor(props){
        super(props);
        this.row = this.row.bind(this);
    }*/

  /*  row = (item) => {
        console.log(item)
        return(
        <tr>
        <td>{item.navn}</td>
        <td>{item.definisjon}</td>
        <td>{item.fagomraade}</td>
        <td>{item.begrepseier}</td>
        <td>{item.oppdatert}</td>
        </tr>
        )
    }*/

    renderTableData(){
        return this.state.mockupData.map((item,index)=>{
            const {navn,definisjon,fagomraade,begrepseier,oppdatert} = item
            return(
                
                <tr key = {`${navn}${index}`}>
                <td><Normaltekst>{navn}</Normaltekst></td>
                <td><Normaltekst>{definisjon}</Normaltekst></td>
                <td><Normaltekst>{fagomraade}</Normaltekst></td>
                <td><Normaltekst>{begrepseier}</Normaltekst></td>
                <td><Normaltekst>{oppdatert}</Normaltekst></td>
                </tr>
                
            );
        })
    }

    render(){
        return (
            <div>
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