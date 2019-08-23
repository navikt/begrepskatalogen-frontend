import React from 'react';
import {Checkbox} from 'nav-frontend-skjema';
import './FilterSection.less';
import {Systemtittel, Undertittel} from 'nav-frontend-typografi';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {toggleFilter} from '../../redux/actions/AppActions';

class FilterSection extends React.Component {

  constructor(props) {
    super(props);
    this.handleClick.bind(this);
  }

  handleClick(category, target) {
    target.blur();
    this.props.toggleFilter(category, target.value, target.checked);
  }

  isChecked(category, value) {
    let checked = false;
    this.props.filters.forEach(filter => {
      if (filter.category === category && filter.value === value) {
        checked = true;
      }
    });
    return checked;
  }

  findDistinctStatuses() {
    return this.props.statuses.map((status) => {
      return (
          <Checkbox key={status} label={status} value={status}
                    checked={this.isChecked('status', status)}
                    onChange={(e) => this.handleClick('status', e.target)}/>
      );
    });
  }

  findDistinctFagomrader() {
    return this.props.fagomrader.map((fagomrade) => {
      if (fagomrade !== '') {
        return (
            <Checkbox key={fagomrade} label={fagomrade} value={fagomrade}
                      checked={this.isChecked('fagomrade', fagomrade)}
                      onChange={(e) => this.handleClick('fagomrade', e.target)}/>
        );
      }
    });
  }

  render() {
    return (
        <div className="filterwrapper">

          <div className="Overskrift">
            <Systemtittel>Filtrer etter kategori</Systemtittel>
          </div>

          <div className="katergorioverskrift">
            <Undertittel>Implisitt status</Undertittel>
          </div>
          <div className="filtercheckbox">
            {this.findDistinctStatuses()}
          </div>

          <div className="katergorioverskrift">
            <Undertittel>Fagområder</Undertittel>
          </div>

          <div className="filtercheckbox">
            {this.findDistinctFagomrader()}
          </div>
        </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    filters: state.filters,
  };
};

function matchDispatchToProps(dispatch) {
  return bindActionCreators({
    toggleFilter: toggleFilter,
  }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(FilterSection);
