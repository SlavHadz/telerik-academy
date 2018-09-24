const path = require('path');
const rootPath = path.normalize(__dirname + '/..');
const env = process.env.NODE_ENV || 'development';

const config = {
  development: {
    root: rootPath,
    app: {
      name: 'express-demo'
    },
    port: process.env.PORT || 3000,
    db: {db: 'express-demo_development'}
  },

  test: {
    root: rootPath,
    app: {
      name: 'express-demo'
    },
    port: process.env.PORT || 3000,
    db: {db: 'express-demo_test'}
  },

  production: {
    root: rootPath,
    app: {
      name: 'express-demo'
    },
    port: process.env.PORT || 3000,
    db: {db: 'express-demo_production'}
  }
};

module.exports = config[env];
