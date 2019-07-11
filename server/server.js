const express = require('express');
const path = require('path');
const app = express();

const distFolder = path.join(__dirname, 'dist');
app.use(express.static(distFolder));
/**
 * If we are running on NAIS use live data, if not use the mocked data.
 */
if (process.env.NAIS_NAMESPACE === 'default') {
  const mockApi = require('./test-data/mock');
  mockApi(app);
} else {
  const mockApi = require('./test-data/mock');
  mockApi(app);
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
