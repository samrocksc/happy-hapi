module.exports = {
  env: process.env.NODE_ENV || 'development',
  connection: {
    host: '0.0.0.0',
    port: 8080,
  },
  swaggerOptions: {
    basePath: '/api',
    pathPrefixSize: 2,
    info: {
      title: 'Happy Hapi API 3',
      version: '0.0.1',
    },
  },
  prefix: '/api',
};

