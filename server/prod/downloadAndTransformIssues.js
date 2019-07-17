const transform = require('../transform');
const downloadIssues = require('./downloadIssues');

module.exports = async function downloadAndTransformIssues() {
  const promises = [];
  let filteredData = [];
  promises.push(downloadIssues(0,1000));
  promises.push(downloadIssues(1000,1000));
  promises.push(downloadIssues(2000,1000));
  await Promise.all(promises).then(values => {
    values.forEach(jiraData => {
      filteredData = transform(jiraData, filteredData);
    });
  });
  return filteredData;
};
