const Bundler = require('parcel-bundler');
const app = require('express')();
const mockApi = require('./test-data/mock');
const file = 'src/index.html'; // Pass an absolute path to the entrypoint here
const options = {}; // See options section of api docs, for the possibilities

// Initialize a new bundler using a file and options
const bundler = new Bundler(file, options);

// Let express use the bundler middleware, this will let Parcel handle every request over your express server

mockApi(app);
app.use(bundler.middleware());
// Listen on port 1234
app.listen(8080);
