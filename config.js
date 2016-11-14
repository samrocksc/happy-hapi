module.exports = {
  env: process.env.NODE_ENV || 'development',
  connection: {
    host: 'localhost',
    port: 3001,
  },
  swaggerOptions: {
    basePath: '/api',
    pathPrefixSize: 2,
    info: {
      title: 'Happy Hapi API',
      version: '0.0.1',
    },
  },
  prefix: '/api',
};

