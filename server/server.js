const express = require('express');
const path = require('path');
const routes = require('./routes');
const app = express();
const distFolder = path.join(__dirname, '..', 'dist');
console.log('Serving dist folder: ', distFolder);
app.use('/begrepskatalogen', express.static(distFolder));

/**
 * If we are running on NAIS use live data, if not use the mocked data.
 */
if (process.env.NAIS_NAMESPACE === 'default') {
  app.get(routes.API_ISSUES, require('./prod/issues'));
} else {
  app.get(routes.API_ISSUES, require('./mock/issues'));
}

app.get(routes.ITS_ALIVE, function(req, res) {
  res.send({
    'its': 'alive',
  });
});
app.get('/begrepskatalogen/*', function(req, res) {
  res.sendFile(path.resolve(distFolder, 'index.html'));
});
const port = process.env.PORT || 9090;
app.listen(port, () => {
  console.log('Listening to port ' + port);
});
