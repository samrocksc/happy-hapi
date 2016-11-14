const cooks = require('./cooks');
const users = require('./users');
const recipes = require('./recipes');

const routes = [].concat(
  cooks,
  users,
  recipes
);

exports.register = (server, options, next) => {
  server.route(routes);
  next();
};

exports.register.attributes = {
  name: 'prefixed',
  version: '0.0.1',
};

