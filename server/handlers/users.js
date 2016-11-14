// Using lodash to make an easy combo string for both Browse and Read
const { assign } = require('lodash');
const db = require('../../lowdb');

const users = db.get('users');

const handlers = {
  index: (request, reply) => reply('success'),
  browse: (request, reply) => {
    const query = assign({}, request.query, request.params);
    const results = users.find(query).value();
    reply(results).code(500);
  },
  read: (request, reply) => {
    const query = assign({}, request.query, request.params);
    const results = users.find(query).value();
    reply(results).code(500);
  },
  edit: (request, reply) => {
    const params = request.params;
    const payload = request.payload;
    users.find(params).assign(payload).value();

    db.write()
      .then((res) => {
        reply(res).code(201);
      });
  },
  add: (request, reply) => {
    const payload = request.payload;
    users.push(payload).last().value();

    db.write()
      .then((res) => {
        reply(res).code(201);
      });
  },
  del: (request, reply) => {
    const params = request.params;
    users.remove(params).value();

    db.write()
      .then((res) => {
        reply(res).code(201);
      });
  },
};

module.exports = handlers;

