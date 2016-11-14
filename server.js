const addCorsHeaders = require('hapi-cors-headers');
const Blipp = require('blipp'); 
const config = require('./config');
const Hapi = require('hapi');
const HapiSwagger = require('hapi-swagger');
const Inert = require('inert');
const routes = require('./server/routes');
const Vision = require('vision');
const CookieAuth = require('hapi-auth-cookie');

const server = new Hapi.Server();

// Start Hapi connection
server.connection(config.connection);

// add cors headers
server.ext('onPreResponse', addCorsHeaders);

// Register Hapi Plugins
server.register([
  CookieAuth,
  Inert,
  Vision,
  Blipp,
  {
    register: HapiSwagger,
    options: config.swaggerOptions,
  },
], err => err);

const cache = server.cache({ segment: 'sessions', expiresIn: 3 * 24 * 60 * 60 * 1000 });
server.app.cache = cache;

// Set up Auth Strategies
server.auth.strategy('session', 'cookie', true, {
  password: 'password-should-be-32-characters',
  cookie: 'hh',
  redirectTo: '/',
  isSecure: false,
});

// Prefix Routes with prefix plugin
server.register({ register: routes }, {
  routes: {
    prefix: '/api',
  },
}, (err) => {
  if (err) {
    throw err;
  }
});

server.start();

module.exports = server;

