import React, { Component } from 'react';
import Table from './components/table/Table';
import { Ingress } from 'nav-frontend-typografi';
import './Home.less';
import {connect} from 'react-redux';
import { toggleHiddenTable } from './redux/actions/AppActions';
import { bindActionCreators } from 'redux';
import { hideNonApprovedTerms } from './redux/actions/SearchAction';


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
            isHidden: false
        });
    }

    render() {
        return (
            <div>
                {this.state.isHidden ? 
                    <Ingress className="seAlleBegrepText">Søk etter et begrep, stykkord eller
                        <button onClick={ this.toggleHidden.bind(this) }>
                            se alle begrepene.
                        </button> 
                    </Ingress> 
                    : 
                    <div className="afterSearch">
                        <Ingress>
                            Viser { this.props.approvedTerms } godkjente begreper relevant til ditt søk.<br/>
                            Viser { this.props.numNotApprovedTerms } ikke-godkjente begreper.<button onClick={ this.props.hideNonApprovedTerms }>Vil du skjule dem?</button><br/>
                            Eller vil du se<button onClick={ this.toggleHidden.bind(this) }>alle begrepene i katalogen?</button>
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
        approvedTerms: state.approvedTerms,
        numNotApprovedTerms: state.numNotApprovedTerms,
    }
};

function matchDispatchToProps(dispatch) {
    return bindActionCreators({ toggleHiddenTable: toggleHiddenTable, hideNonApprovedTerms: hideNonApprovedTerms }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Home);
