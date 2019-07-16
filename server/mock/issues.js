const jiraData = require('./jira.json');
const transform = require('../transform');
const data = transform(jiraData);
module.exports = function(req, res) {
  res.send(data);
};
