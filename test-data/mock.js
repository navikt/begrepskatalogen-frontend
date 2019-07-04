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
        status: issue.fields.status.name,
        definisjon: issue.fields.customfield_10610,
        oppdatert: issue.fields.updated !== null ? issue.fields.updated : "",
        begrepseier: issue.fields.customfield_12712 !== null ? issue.fields.customfield_12712.value : "",


        
      });
    });
    res.send(responseData);
  });
};
