import React, { Component } from 'react';
import Table from './components/table/Table';
import { Ingress } from 'nav-frontend-typografi';
import './Home.less';
import {connect} from 'react-redux';
import { toggleHiddenTable } from './redux/actions/AppActions';
import { bindActionCreators } from '../../../Library/Caches/typescript/3.5/node_modules/redux';

export class Home extends Component {
    constructor(){
        super();
        this.state = {
            isHidden: true //true når tabellen skal være skjult 
        }
    }
    
    
    toggleHidden(){
        this.props.toggleHiddenTable()
        this.setState({
            isHidden: !this.state.isHidden
        });
    }

    render() {
        return (
            <div>
                {this.state.isHidden ? 
                    <Ingress className="seAlleBegrepText">Søk etter et begrep, stykkord eller 
                        <button onClick={ this.toggleHidden.bind(this) }>
                            se alle begrepene
                        </button> 
                    </Ingress> 
                    : 
                    <div className="afterSearch">
                        <Ingress>
                            Viser XX godkjente begreper relevant til ditt søk.<br/>
                            Viser XX ikke-godkjente begreper. <button>Vil du skjule dem?</button> <br/>
                            Eller vil du se <button /*onclick*/>alle begrepene i katalogen?</button>
                        </Ingress> 
                    </div>
                }
                {(this.state.isHidden && (this.props.search == ""))? 
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

const mapStateToProps = (state) => {
    return {
        search: state.search,
    }
};

function matchDispatchToProps(dispatch) {
    return bindActionCreators({ toggleHiddenTable: toggleHiddenTable }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Home);
