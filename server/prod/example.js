const downloadAndTransformIssues = require('./downloadAndTransformIssues');
/**
 * Dette er egentlig ikke en skikkelig test, men heller ett eksemple på bruk
 */
const run_test = async function() {
  let data;
  data = await downloadAndTransformIssues();
  console.log(data.length);
};

run_test();
