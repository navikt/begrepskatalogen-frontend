import React from 'react';
import './Table.less';
import {Normaltekst, Systemtittel} from 'nav-frontend-typografi';
import {connect} from 'react-redux';
import Fuse from 'fuse.js';
import {Link} from 'react-router-dom';
import JiraText from '../JiraText';

class Table extends React.Component {

  constructor(props) {
    super(props);
  }

  filterItems(items, filters) {
    const sortedFilters = {};
    filters.forEach(filter => {
      if (!sortedFilters[filter.category]) {
        sortedFilters[filter.category] = [];
      }
      sortedFilters[filter.category].push(filter.value);
    });
    const filteredList = items.filter(item => {
      let keepItem = true;
      Object.keys(sortedFilters).forEach(keyName => {
        if (!sortedFilters[keyName].includes(item[keyName])) {
          keepItem = false;
        }
      });
      return keepItem;
    });
    return filteredList;
  }

  searchResult(items, searchTerm) {
    const options = {
      shouldSort: true,
      findAllMatches: true,
      threshold: 0.2,
      //score: true,
      distance: 100,
      maxPatternLength: 32,
      minMatchCharLength: 1,
      keys: [
        {
          name: 'term',
          //weight: 0.9
        }, {
          mame: 'definisjon',
          //weight: 0.8
        },
        'begrepseier',
        'kilde',
      ],
    };
    const fuse = new Fuse(items, options);
    return fuse.search(searchTerm);
  }

  renderTableData() {
    if (!this.props.items) {
      return false;
    }

    const filteredList = this.filterItems(this.props.items, this.props.filters);
    const list = this.props.search === '' ? filteredList : this.searchResult(filteredList, this.props.search);

    const {sort} = this.props;
    if (sort) {
      console.log(`sorting ${sort}`);

      if (sort === 'Alfabetisk') {
        list.sort((a, b) => (sort === 'Alfabetisk') ?
            (a.term > b.term ? 1 : -1)
            : (a.term < b.term ? 1 : -1));
      }
      if (sort === 'Begrepseier') {
        list.sort((a, b) => (sort === 'Begrepseier') ?
            (a.assignee > b.assignee ? 1 : -1)
            : (a.assignee < b.assignee ? 1 : -1));
      }
      if (sort === 'Sist_Oppdatert') {
        list.sort((a, b) => (sort === 'Sist_Oppdatert') ?
            (a.oppdatert < b.oppdatert ? 1 : -1)
            : (a.oppdatert > b.oppdatert ? 1 : -1));
      }
    }

    const formatDate = (string) => {
      const options = {year: 'numeric', month: 'long', day: 'numeric'};
      return new Date(string).toLocaleDateString([], options);
    };

    const decideColorCode = (tekst) => {
      if (tekst === 'Godkjent begrep') {
        return 'statusFargeGodkjent';
      } else if (tekst === 'Utkast') {
        return 'statusFargeUtkast';
      } else if (tekst === 'Avvist') {
        return 'statusFargeAvvist';
      } else if (tekst === 'Revisjon') {
        return 'statusFargeRevisjon';
      } else if (tekst === 'Utgått') {
        return 'statusFargeAvvist';
      } else {
        return '';
      }
    };

    return list.map((item) => {
      const {key, term, assignee, definisjon, oppdatert, status} = item;
      return (
          <tr key={key} className="definisjon">
            <td><Link className="term_col" to={`/begrepskatalogen/begrep/${key}`}>{term}</Link></td>
            <td><JiraText>{definisjon}</JiraText></td>
            <td><Normaltekst className={decideColorCode(status)}>{status}</Normaltekst></td>
            <td><Normaltekst>{assignee}</Normaltekst></td>
            <td><Normaltekst>{formatDate(oppdatert)}</Normaltekst></td>
          </tr>
      );
    });
  }

  render() {
    return (
        <table className="terms">
          <colgroup>
            <col width="250"/>
            <col width="500"/>
            <col width="150"/>
            <col width="180"/>
            <col width="250"/>
          </colgroup>
          <thead className="separator">

          <tr className="tableHead">
            <th><Systemtittel>Term</Systemtittel></th>
            <th><Systemtittel>Definisjon</Systemtittel></th>
            <th><Systemtittel>Status</Systemtittel></th>
            <th><Systemtittel>Begrepseier</Systemtittel></th>
            <th><Systemtittel>Oppatert</Systemtittel></th>
          </tr>

          </thead>
          <tbody>
          {this.renderTableData()}
          </tbody>
        </table>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    search: state.search,
    items: state.items,
    seeAllTerms: state.seeAllTerms,
    hideNotApproved: state.hideNotApproved,
    filters: state.filters,
    sort: state.sort,
  };
};

export default connect(mapStateToProps)(Table);
