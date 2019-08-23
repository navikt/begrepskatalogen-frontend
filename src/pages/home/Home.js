import React, {Component} from 'react';
import Table from '../../components/table/Table';
import './Home.less';
import {connect} from 'react-redux';
import {toggleSeeAllTerms} from '../../redux/actions/AppActions';
import {bindActionCreators} from 'redux';
import {hideNonApprovedTerms} from '../../redux/actions/SearchAction';
import SortField from '../../components/SortSelectField/SortField';
import FilterSection from '../../components/FilterSection/FilterSection';

export class Home extends Component {
  constructor(props) {
    super(props);
  }

  toggleHidden() {
    this.props.toggleSeeAllTerms();
  }

  findDistinct(category) {
    return this.props.items.map(x => x[category]).filter((item, i, ar) => ar.indexOf(item) === i);
  }

  render() {
    return (
        <div>
          <div className="table_content">
            <div className="selectfields">
              <SortField/>
            </div>
            <div className="table">
              <FilterSection statuses={this.findDistinct('status')}
                             fagomrader={this.findDistinct('fagomrade')}/>
              <Table/>
            </div>
          </div>
        </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    search: state.search,
    approvedTerms: state.approvedTerms,
    numNotApprovedTerms: state.numNotApprovedTerms,
    isHiddenTable: state.isHiddenTable,
    items: state.items,
  };
};

function matchDispatchToProps(dispatch) {
  return bindActionCreators({
    toggleSeeAllTerms: toggleSeeAllTerms,
    hideNonApprovedTerms: hideNonApprovedTerms,
  }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Home);
