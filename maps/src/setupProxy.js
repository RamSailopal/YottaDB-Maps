const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
	  app.use(
		      '/api',
		      createProxyMiddleware({
			            target: 'http://192.168.240.21:8080',
			            changeOrigin: true,
			          })
		    );
};
