// Using lodash to make an easy combo string for both Browse and Read
const { assign, isEmpty, find, push, pull } = require('lodash');

const recipes = [
  {
    id: 1,
    name: 'Pumpkin Pie',
  },
  {
    id: 2,
    name: 'Pot roast',
  },
  {
    id: 3,
    name: 'Chili'
  },
];

const handlers = {
  index: (request, reply) => reply('success'),
  browse: (request, reply) => {
    const query = assign({}, request.query, request.params);
    if (query.name) {
      console.log('query.name');
    }
    reply('success').code(500);
  },
  read: (request, reply) => {
    const query = assign({}, request.query, request.params);
    if (query.name) {
      console.log('query.name');
    }
    reply('success').code(500);
  },
  edit: (request, reply) => reply('editing'),
  add: (request, reply) => reply('adding'),
  del: (request, reply) => reply('deleting'),
}

module.exports = handlers;
