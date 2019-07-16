const express = require('express');
const path = require('path');
const routes = require('./routes');
const app = express();
const distFolder = path.join(__dirname, '..', 'dist');
console.log('Serving dist folder: ', distFolder);
app.use(express.static(distFolder));
/**
 * If we are running on NAIS use live data, if not use the mocked data.
 */
if (process.env.NAIS_NAMESPACE === 'default') {
  app.get(routes.API_ISSUES, require('./prod/issues'));
} else {
  app.get(routes.API_ISSUES, require('./mock/issues'));
}
app.get('/its-alive', function(req, res) {
  res.send({
    'its': 'alive',
  });
});
const port = process.env.PORT || 9090;
app.listen(port, () => {
  console.log('Listening to port ' + port);
});
