// Using lodash to make an easy combo string for both Browse and Read
const { assign, isEmpty, find, push, pull } = require('lodash');

const cooks = [
  {
    id: 1,
    name: 'Bob Johnson',
  },
  {
    id: 2,
    name: 'Edna Garrow',
  },
  {
    id: 'Tim Ferrel',
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
