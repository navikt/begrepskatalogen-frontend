const fs = require('fs');
const path = require('path');
const searchResultFile = path.join(__dirname, "..",'tmp/result.json');
const outputFile = path.join(__dirname,'..', 'test-data/jira.json');
const firsts = [
  'Dolly',
  'Donald',
  'Dennis',
  'Dilbert',
  'Dagobert',
  'Dagny',
  'Donny',
  'Danika',
  'Dillum'];
const lasts = [
  'Duck',
  'Dingo',
  'Dalmatiner',
  'Dunk',
  'Dank',
  'Dillinger',
  'Dacota'];

function randomName(firsts, lasts) {
  const first = firsts[Math.floor(Math.random() * firsts.length)];
  const last = lasts[Math.floor(Math.random() * lasts.length)];
  return first + ' ' + last;
}

function anonymizeUser(userObj) {
  userObj.self = '';
  userObj.name = Math.random().toString(36).substring(7).toUpperCase();
  userObj.key = userObj.name;
  userObj.emailAddress = 'example@example.com';
  userObj.displayName = randomName(firsts, lasts);
  return userObj;
}

const contents = fs.readFileSync(searchResultFile).toString();
const jsonContent = JSON.parse(contents);
const notNullFields = {};
jsonContent.issues.forEach(issue => {
  Object.keys(issue.fields).forEach(function(fieldName) {
    if (issue.fields[fieldName] && issue.fields[fieldName].emailAddress) {
      issue.fields[fieldName] = anonymizeUser(issue.fields[fieldName]);
    }
    /**
     * Collect fields that is not null
     */
    if (issue.fields[fieldName] !== null) {
      notNullFields[fieldName] = true;
    }
  });
});

/**
 * Drop fields that always is null
 */
jsonContent.issues.forEach(issue => {
  const newFields = {};
  Object.keys(issue.fields).forEach(function(fieldName) {
    if (notNullFields[fieldName]) {
      newFields[fieldName] = issue.fields[fieldName];
    }
  });
  issue.fields = newFields;
});

fs.writeFileSync(outputFile, JSON.stringify(jsonContent));

