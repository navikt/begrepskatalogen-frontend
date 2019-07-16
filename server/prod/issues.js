const downloadAndTransformIssues = require('./downloadAndTransformIssues');
let data = [];
let timeoutHandle;
const synchronizeInterval = 60;
const synchronize = async function() {
  data = await downloadAndTransformIssues();
  console.log('Synchronized ' + data.length + ' issues.');
  clearTimeout(timeoutHandle); // avoid duplicated
  timeoutHandle = setTimeout(synchronize, 1000 * 60 * synchronizeInterval);
};

synchronize();

module.exports = function(req, res) {
  res.send(data);
};
