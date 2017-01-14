const Joi = require('joi');

const handlers = require('../handlers/cooks');

module.exports = [
  {
    method: 'GET',
    path: '/cooks',
    handler: handlers.browse,
    config: {
      description: 'Browse Cooks',
      notes: 'Returns a 200',
      tags: ['api'],
      validate: {
        query: {
          name: Joi.string(),
        },
      },
    },
  },
  {
    method: 'GET',
    path: '/cooks/{id}',
    handler: handlers.read,
    config: {
      description: 'Read Cooks',
      notes: 'Looks up a cook by their ID',
      tags: ['api'],
      validate: {
        params: {
          id: Joi.number(),
        },
      },
    },
  },
  {
    method: 'PUT',
    path: '/cooks/{id}',
    handler: handlers.edit,
    config: {
      description: 'Edit Cooks',
      notes: 'Update a cook by their ID',
      tags: ['api'],
      validate: {
        params: {
          id: Joi.number(),
        },
        payload: {
          name: Joi.string(),
        },
      },
    },
  },
  {
    method: 'POST',
    path: '/cooks',
    handler: handlers.add,
    config: {
      description: 'Add Cooks',
      notes: 'Adds a new cook',
      tags: ['api'],
      validate: {
        payload: {
          name: Joi.string(),
        },
      },
    },
  },
  {
    method: 'DELETE',
    path: '/cooks/{id}',
    handler: handlers.del,
    config: {
      description: 'Delete a cook',
      notes: 'Parmas deliver an ID to be deleted',
      tags: ['api'],
      validate: {
        params: {
          id: Joi.number(),
        },
      },
    },
  },
];
