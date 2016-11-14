const Joi = require('joi');

const handlers = require('../handlers/users');


module.exports = [
  {
    method: 'GET',
    path: '/users',
    handler: handlers.browse,
    config: {
      description: 'Browse Users',
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
    path: '/users/{id}',
    handler: handlers.read,
    config: {
      description: 'Read User',
      notes: 'Looks up a user by their ID',
      tags: ['api'], // ADD THIS TAG
      validate: {
        params: {
          id: Joi.number(),
        },
      },
    },
  },
  {
    method: 'PUT',
    path: '/users/{id}',
    handler: handlers.edit,
    config: {
      description: 'Edit User',
      notes: 'Update a user by their ID',
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
    path: '/users',
    handler: handlers.add,
    config: {
      description: 'Add Users',
      notes: 'Adds a new user',
      tags: ['api'],
      validate: {
        payload: {
          name: Joi.string(),
          id: Joi.number(),
        },
      },
    },
  },
  {
    method: 'DELETE',
    path: '/users/{id}',
    handler: handlers.del,
    config: {
      description: 'Delete a User',
      notes: 'Params deliver a user to be deleted',
      tags: ['api'],
      validate: {
        params: {
          id: Joi.number(),
        },
      },
    },
  },
];
