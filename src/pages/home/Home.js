import React, { Component } from 'react';
import Table from '../../components/table/Table';
import { Ingress } from 'nav-frontend-typografi';
import './Home.less';
import { connect } from 'react-redux';
import { toggleSeeAllTerms } from '../../redux/actions/AppActions';
import { bindActionCreators } from 'redux';
import { hideNonApprovedTerms } from '../../redux/actions/SearchAction';

export class Home extends Component {
    constructor(props){
        super(props);
    }
    
    toggleHidden(){
        this.props.toggleSeeAllTerms()
    }
//Eller vil du se<button onClick={ this.toggleHidden.bind(this) }>alle begrepene i katalogen?</button>
    render() {
        return (
            <div>
                { (this.props.isHiddenTable && (this.props.search == "")) ? 
                    <Ingress className="seAlleBegrepText">Søk etter ett begrep, stikkord eller
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
                {(this.props.isHiddenTable && (this.props.search == "")) ? 
                    <div className="beforeSearch">
                        <Ingress>Katalogen skal vises etter du har søkt etter en term, eller valgt å vise<br/>alle begrepene i katalogen</Ingress> 
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
        isHiddenTable: state.isHiddenTable
    }
};

function matchDispatchToProps(dispatch) {
    return bindActionCreators({ 
        toggleSeeAllTerms: toggleSeeAllTerms, 
        hideNonApprovedTerms: hideNonApprovedTerms 
    }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Home);
