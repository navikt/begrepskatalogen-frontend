import React from 'react';
import {Link} from 'react-router-dom';
import {Normaltekst} from 'nav-frontend-typografi';

class JiraText extends React.Component {
  constructor(props) {
    super(props);
  }

  isString = (str) => {
    return (typeof str === 'string' || str instanceof String);
  };
  txt = (text) => {
    if (typeof text === 'string' || text instanceof String) {
      text = this.nlToBreak(text);
      text.forEach((element, i) => {

        if (element && this.isString(element.props.children)) {
          text[i] = React.cloneElement(element, element.props, this.jiraLinkReplacer(element.props.children));
        }
      });
    }
    return text;
  };

  nlToBreak = (text) => {
    return text.split('\n').map((str, i) => {
      if (str) {
        return <Normaltekst key={'jira_text_' + i}>{str}</Normaltekst>;
      }
    });
  };

  jiraLinkReplacer = (text) => {
    const jira_matcher = /\[([^|]+)\|([A-Z]{1,10}-\d+)\]/g;
    const matches = text.match(jira_matcher);
    if (matches) {
      const parts = [];
      let textToTheRight = text;
      matches.forEach((match, i) => {
        if (this.isString(textToTheRight)) {
          const textParts = textToTheRight.split(match, 2);
          parts.push(textParts[0]);
          const matchParts = match.slice(0, -1).substr(1).split('|');
          parts.push(<Link key={'jira_link_' + i}
                           to={'/begrepskatalogen/begrep/' + matchParts[1]}>{matchParts[0]}</Link>);
          textToTheRight = textParts[1];
        }
      });
      parts.push(textToTheRight);
      return parts;
    } else {
      return [text];
    }
  };

  render() {
    return (
        <div>
          {this.txt(this.props.children)}
        </div>
    );
  }
}

export default JiraText;
