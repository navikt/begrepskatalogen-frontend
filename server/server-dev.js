const Bundler = require('parcel-bundler');
const app = require('express')();
const routes = require('./routes');
const file = 'src/index.html'; // Pass an absolute path to the entrypoint here
const options = {}; // See options section of api docs, for the possibilities

// Initialize a new bundler using a file and options
const bundler = new Bundler(file, options);

// Let express use the bundler middleware, this will let Parcel handle every request over your express server
app.get(routes.API_ISSUES, require('./mock/issues'));
app.use(bundler.middleware());

const port = process.env.PORT || 5113;
app.listen(port, () => {
  console.log('Listening to port ' + port);
});

