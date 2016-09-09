const handlers = {};

handlers.getProducts = function (request, reply) {
  if (request.query.name) {
    return reply(handlers.findProducts(request.query.name));
  }
  reply(handlers.products);
};

handlers.findProducts = function (name) {
  return handlers.products.filter((product) => {
    return product.name.toLowerCase() === name.toLowerCase();
  });
};

handlers.getProduct = function (request, reply) {
  const filtered = handlers.products.filter((product) => {
    return product.id === parseInt(request.params.id, 10);
  }).pop();

  reply(filtered);
};

handlers.addProduct = function (request, reply) {
  const product = {
    id: handlers.products[handlers.products.length - 1].id + 1,
    name: request.payload.name,
  };

  handlers.products.push(product);

  reply(product).created('/products/' + product.id);
};

handlers.products = [
  {
    id: 1,
    name: 'baseball bats',
  },
  {
    id: 2,
    name: 'oven mitts',
  },
];


module.exports = handlers;
