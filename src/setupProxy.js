const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function(app){
    app.use(
        createProxyMiddleware('/notifications', {
            target: process.env.REACT_APP_PROXY,
            changeOrigin: true
            }
        ))
}