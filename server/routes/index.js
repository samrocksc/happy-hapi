const Joi = require('joi');

const handlers = require('../handlers');


module.exports = [{
  method: 'GET',
  path: '/products',
  config: {
    description: 'Get A List of Products', 
    notes: 'Returns a todo item by the id passed in the path',
    tags: ['api'], // ADD THIS TAG
    validate: {
      query: {
        name: Joi.string(),
      },
    },
    handler: handlers.getProducts,
  },
}, {
  method: 'GET',
  path: '/products/{id}',
  handler: handlers.getProduct,
}, {
  method: 'POST',
  path: '/products',
  config: {
    validate: {
      payload: { name: Joi.string().required().min(3) },
    },
    handler: handlers.addProduct,
  },
}];
