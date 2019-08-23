import React from 'react';
import {Link} from 'react-router-dom';
import {Element} from 'nav-frontend-typografi';
import 'nav-frontend-lenker-style';
import './Navigation.less';
import './HeaderButtons.less';

class Navigation extends React.Component {

  render() {
    return (
        <div>
          <nav className="navStyle">
            <ul className="navStyle__navLinks">
              <li>
                <Link to={'/begrepskatalogen/om-begrepskatalogen'} id="omBegrepeskatalog"
                      className="navStyle__navLink lenke">
                  <Element>Om begrepskatalogen</Element>
                </Link>
              </li>
              <li>
                <Link to={'/begrepskatalogen/kontakt-oss'} id="kontaktOss" className="navStyle__navLink lenke">
                  <Element>Kontakt oss</Element>
                </Link>
              </li>
              <li>
                <a target="_blank"
                   href={'http://jira.adeo.no/secure/CreateIssueDetails!init.jspa?pid=10550&issuetype=47&summary=Term&customfield_15719=18010'}
                   id="meldInnNyttBegrep"
                   className="navStyle__navLink lenke">
                  <Element>Meld inn nytt begrep</Element>
                </a>
              </li>
            </ul>
          </nav>
        </div>
    );
  }
}

export default Navigation;
