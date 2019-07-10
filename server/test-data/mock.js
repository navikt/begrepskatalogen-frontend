const jiraData = require('./jira');
const transform = require('../transform');
const data = transform(jiraData);
module.exports = function(app) {
  app.get('/api/issues', function(req, res) {
    res.send(data);
  });
};
