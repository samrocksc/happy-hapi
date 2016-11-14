const Joi = require('joi');

const handlers = require('../handlers/recipes');


module.exports = [
  {
    method: 'GET',
    path: '/recipes',
    handler: handlers.browse,
    config: {
      description: 'Browse Recipes',
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
    path: '/recipes/{id}',
    handler: handlers.read,
    config: {
      description: 'Read Recipe',
      notes: 'Looks up a cook by their ID',
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
    path: '/recipes/{id}',
    handler: handlers.edit,
    config: {
      description: 'Edit Recipe',
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
    path: '/recipes',
    handler: handlers.add,
    config: {
      description: 'Add Recipe',
      notes: 'Adds a new cook',
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
    path: '/recipes/{id}',
    handler: handlers.del,
    config: {
      description: 'Delete Recipe',
      notes: 'Params deliver a recipe to be deleted',
      tags: ['api'],
      validate: {
        params: {
          id: Joi.number(),
        },
      },
    },
  },
];
