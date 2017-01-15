// Using lodash to make an easy combo string for both Browse and Read
const { assign } = require('lodash');
const db = require('../../lowdb');
const { iterate } = require('../lib/lowHelp');

const cooks = db.get('cooks');

const handlers = {
  browse: (request, reply) => {
    const query = assign({}, request.query, request.params);
    const results = cooks.find(query).value();
    reply(results).code(500);
  },
  read: (request, reply) => {
    const query = assign({}, request.query, request.params);
    const results = cooks.find(query).value();
    reply(results).code(500);
  },
  edit: (request, reply) => {
    const params = request.params;
    const payload = request.payload;
    cooks.find(params).assign(payload).value();

    db.write()
      .then((res) => {
        reply(res).code(201);
      });
  },
  add: (request, reply) => {
    const data = request.payload;
    const payload = iterate('cooks', data);
    console.log('payload', payload);
    cooks.push(payload).last().value();

    db.write()
      .then((res) => {
        reply(res).code(201);
      });
  },
  del: (request, reply) => {
    const params = request.params;
    cooks.remove(params).value();

    db.write()
      .then((res) => {
        reply(res).code(201);
      });
  },
};

module.exports = handlers;

