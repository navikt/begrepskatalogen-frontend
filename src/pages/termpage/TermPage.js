import React from 'react';
import {Element, Ingress, Normaltekst, Sidetittel, Undertittel} from 'nav-frontend-typografi';
import './TermPage.less';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {AlertStripeAdvarsel, AlertStripeFeil, AlertStripeSuksess} from 'nav-frontend-alertstriper';
import {bindActionCreators} from 'redux';
import {fetchItem} from '../../redux/actions/AppActions';
import JiraText from '../../components/JiraText';

export class TermPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {isFound: true};
  }

  componentWillMount() {
    const {id} = this.props.match.params;
    this.props.fetchItem(id);
  }

  componentWillReceiveProps(nextProps) {
    const {id} = nextProps.match.params;
    if (id !== this.props.match.params.id) {
      this.props.fetchItem(id);
    }
  }

  isGodkjent = () => {
    if (this.props.item.status === 'Godkjent begrep') {
      return <AlertStripeSuksess size="25">{this.props.item.status}</AlertStripeSuksess>;
    } else if (this.props.item.status === 'Utkast') {
      return <AlertStripeAdvarsel className="utkastBegrep" size="25">{this.props.item.status}</AlertStripeAdvarsel>;
    } else {
      return <AlertStripeFeil size="25">{this.props.item.status}</AlertStripeFeil>;
    }
  };

  formatDate = (string) => {
    const options = {year: 'numeric', month: 'long', day: 'numeric'};
    return new Date(string).toLocaleDateString([], options);
  };

  relationFinder = () => {
    const lengthRel = this.props.item.relasjoner.length;
    if (lengthRel === 0) {
      return <Normaltekst>Ingen relasjoner funnet.</Normaltekst>;
    } else {
      return (
          <div className="relasjonListe">
            {this.props.item.relasjoner.map(rel => (
                rel.hasOwnProperty('inwardIssue') ?
                    <React.Fragment key={rel.id}>
                      <Normaltekst className="capitalize">{rel.type.inward}
                        <Link className="relationWord"
                              to={`/begrepskatalogen/begrep/${rel.inwardIssue.key}`}>{rel.inwardIssue.fields.summary}</Link></Normaltekst>
                    </React.Fragment>
                    :
                    <React.Fragment key={rel.id}>
                      <Normaltekst className="capitalize">{rel.type.outward}
                        <Link className="relationWord"
                              to={`/begrepskatalogen/begrep/${rel.outwardIssue.key}`}>{rel.outwardIssue.fields.summary}</Link></Normaltekst>
                    </React.Fragment>
            ))}
          </div>
      );
    }
  };

  render() {
    if (!this.props.item) {
      return <div>Laster</div>;
    }
    return (
        <div className="gridContainer">
          <div className="begrepsHeader">
            <Link className="tilbake" to={'/begrepskatalogen'}><Element>⇦ Tilbake</Element></Link>
          </div>
          <div className="status">{this.isGodkjent()}</div>
          <div className="venstreFeltAvSiden">
            <div className="begrepsoverskrift">
              <Sidetittel>
                {this.props.item.term}
              </Sidetittel>
              <br/>
              <Undertittel>{this.props.item.key}</Undertittel>
            </div>

            <div className="begrepsforklaring">
              <Ingress>Definisjon</Ingress>
              <JiraText>{this.props.item.definisjon}</JiraText>
            </div>

            <div className="begrepsforklaring">
              <Ingress>Begrepsforklaring</Ingress>
              <JiraText>{this.props.item.begrepsforklaring}</JiraText>
            </div>

            <div className="eksempler">
              <Ingress>Eksempler</Ingress>
              <JiraText>{this.props.item.eksempel !== null
                  ? this.props.item.eksempel
                  : 'Ingen eksempler funnet.'}</JiraText>
            </div>

            <div className="kilde">
              <Ingress>Kilde</Ingress>
              <Normaltekst>
                {this.props.item.kilde !== '' ? this.props.item.kilde : 'Ingen funnet.'}
              </Normaltekst>
            </div>

            <div className="relasjoner">
              <Ingress>Relasjon til andre begreper</Ingress>
              {this.relationFinder()}{this.state.isFound ? '' :
                <AlertStripeFeil>Begrepet finnes ikke.</AlertStripeFeil>}
            </div>

            <div className="revidert">
              <Ingress>Sist Revidert</Ingress>
              <Normaltekst>{this.formatDate(this.props.item.oppdatert)}</Normaltekst>
            </div>
          </div>

          <div className="hoyreFeltAvSiden">
            <div className="beskrivelsestype">
              <Ingress>Skrevet av</Ingress>
              <Normaltekst>{this.props.item.assignee}</Normaltekst>
            </div>

            <div className="fagomraade">
              <Ingress>Fagområde</Ingress>
              <Normaltekst>
                {this.props.item.fagomrade !== '' ? this.props.item.fagomrade : 'Ingen funnet.'}
              </Normaltekst>
            </div>

            <div className="begrepseier">
              <Ingress>Begrepseier</Ingress>
              <Normaltekst>{this.props.item.begrepseier}<br/></Normaltekst>
            </div>
          </div>
        </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    termKey: state.termKey,
    items: state.items,
    item: state.item,
  };
};

function matchDispatchToProps(dispatch) {
  return bindActionCreators({
    fetchItem: fetchItem,
  }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(TermPage);
