const handlers = {
  index: (request, reply) => reply('success'),
  getProducts: (request, reply) => {
    if (request.query.name) {
      return reply(handlers.findProducts(request.query.name));
    }
    return reply(handlers.products);
  },
  getProduct: (name) => handlers.products.filter((product) => product.name.toLowerCase() === name.toLowerCase()),
  findProducts: (name) => handlers.products.filter((product) => product.name.toLowerCase() === name.toLowerCase()),
  findProduct: (request, reply) => {
    const filtered = handlers.products.filter((product) => product.id === parseInt(request.params.id, 10)).pop();
    reply(filtered);
  },
  addProduct: (request, reply) => {
    const product = {
      id: handlers.products[handlers.products.length - 1].id + 1,
      name: request.payload.name,
    };
    handlers.products.push(product);
    reply(product).created('/products/' + product.id);
  },
};

handlers.products = [
  {
    id: 1,
    name: 'Phrozen.js',
  },
  {
    id: 2,
    name: 'Rawr.js',
  },
  {
    id: 'All of the IOT',
  },
];


module.exports = handlers;
