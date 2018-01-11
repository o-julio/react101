/* eslint-disable global-require */

module.exports = (app) => {
  const webpackConfig = require('../../webpack.config.js')('development');
  const addDevMiddlewares = require('./addDevMiddlewares');
  addDevMiddlewares(app, webpackConfig);
  return app;
};
