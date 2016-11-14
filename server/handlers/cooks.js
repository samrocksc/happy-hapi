// Using lodash to make an easy combo string for both Browse and Read
const { assign } = require('lodash');
const db = require('../../lowdb');

const handlers = {
  index: (request, reply) => reply('success'),
  browse: (request, reply) => {
    const query = assign({}, request.query, request.params);
    reply('success').code(500);
  },
  read: (request, reply) => {
    console.log('trying read');
    const result = db.get('cooks')
      .find({id: 1})
      .value();
    console.log('results', result);
    reply('success').code(500);
  },
  edit: (request, reply) => reply('editing'),
  add: (request, reply) => reply('adding'),
  del: (request, reply) => reply('deleting'),
};

module.exports = handlers;
