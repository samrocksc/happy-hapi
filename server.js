const Hapi = require('hapi');
const Inert = require('inert');
const Vision = require('vision');
const HapiSwagger = require('hapi-swagger');
const Pack = require('./package');
const Blipp = require('blipp');
const routes = require('./server/routes');
const addCorsHeaders = require('hapi-cors-headers');

const server = new Hapi.Server();

server.connection({
  host: 'localhost',
  port: 3000,
});

server.ext('onPreResponse', addCorsHeaders);

server.route(routes);

const options = {
  info: {
    title: 'Happy Hapi Examples',
    version: Pack.version,
  },
};

server.register([
  Inert,
  Vision,
  {
    register: HapiSwagger,
    options,
  }], (err) => {
  server.start(() => {
    if (err) {
      console.log(err);
    } else {
      console.log('Server running at:', server.info.uri);
    }
  });
});

server.register({
  register: Blipp, options: {},
}, () => {
  server.start();
});
