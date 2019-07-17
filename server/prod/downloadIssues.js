// https://docs.atlassian.com/software/jira/docs/api/REST/8.2.2/

const https = require('https');
const querystring = require('querystring');

const jiraSrcUrl = 'https://jira.adeo.no/rest/api/2/search';

module.exports = function downloadIssues(startAt, maxResults) {
  const srcOptions = {
    jql: 'project = BEGREP',
    startAt,
    maxResults,
  };
  const fullUrl = jiraSrcUrl + '?' + querystring.stringify(srcOptions);

  return new Promise(function(resolve, reject) {
    https.get(fullUrl, (resp) => {
      let data = '';

      // A chunk of data has been recieved.
      resp.on('data', (chunk) => {
        data += chunk;
      });

      // The whole response has been received. Print out the result.
      resp.on('end', () => {
        const jsonResponseData = JSON.parse(data);
        resolve(jsonResponseData);
      });

    }).on('error', (err) => {
      reject(err);
    });
  });

};
