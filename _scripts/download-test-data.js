// https://docs.atlassian.com/software/jira/docs/api/REST/8.2.2/

const https = require('https');
const querystring = require('querystring');

const jiraSrcUrl = 'https://jira.adeo.no/rest/api/2/search';
const srcOptions = {
  jql: 'project = BEGREP',
  startAt: 0,
};


const downloadIssues = function(startAt){

  const fullUrl = jiraSrcUrl + "?" + querystring.stringify(srcOptions);
  https.get(fullUrl, (resp) => {
    console.log("Reading from: ", fullUrl);
    let data = '';

    // A chunk of data has been recieved.
    resp.on('data', (chunk) => {
      data += chunk;
    });

    // The whole response has been received. Print out the result.
    resp.on('end', () => {
      //const jsonResponse = JSON.parse(data);
      console.log("end",data);
    });

  }).on('error', (err) => {
    console.log('Error: ' + err.message);
  });
}
