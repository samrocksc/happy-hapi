const Joi = require('joi');

const handlers = require('../handlers');


module.exports = [
  {
    method: 'GET',
    path: '/',
    config: {
      description: 'Base Route',
      notes: 'Returns a 200',
      tags: ['api'],
    },
    handler: handlers.index,
  },
  {
    method: 'GET',
    path: '/bling',
    config: {
      description: 'Get A List of Icey Things',
      notes: 'Returns a todo item by the id passed in the path',
      tags: ['api'], // ADD THIS TAG
      validate: {
        query: {
          name: Joi.string(),
        },
      },
      handler: handlers.getProducts,
    },
  },
  {
    method: 'GET',
    path: '/bling/{id}',
    handler: handlers.getProduct,
    config: {
      description: 'Get Ice by ID',
      notes: 'Returns a Icey Product by delivering id as a parameter',
      tags: ['api'],
    },
  },
  {
    method: 'POST',
    path: '/products',
    config: {
      validate: {
        payload: { name: Joi.string().required().min(3) },
      },
      handler: handlers.addProduct,
      description: 'Add some Ice',
      notes: 'Takes a payload and adds Ice',
      tags: ['api'],
    },
  },
];
