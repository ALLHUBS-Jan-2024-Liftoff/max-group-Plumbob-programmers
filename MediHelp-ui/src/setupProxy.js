const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://data.cms.gov',
      changeOrigin: true,
      pathRewrite: {
        '^/api': '/provider-data/api/1/datastore/query/xubh-q36u/0',
      },
    })
  );
};