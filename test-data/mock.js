const jiraData = require('./jira');
module.exports = function(app) {
  app.get('/api/issues', function(req, res) {
    const responseData = [];
    jiraData.issues.forEach(issue => {
      responseData.push({
        key: issue.key,
        term: issue.fields.summary,
        assignee: issue.fields.assignee !== null
            ? issue.fields.assignee.displayName
            : '',
      });
    });
    res.send(responseData);
  });
};