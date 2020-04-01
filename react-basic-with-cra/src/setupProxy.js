// const proxy = require('http-proxy-middleware');
const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function (app) {
    // app.use(
    //     '/api', createProxyMiddleware({
    //         target: 'http://127.0.0.1:3100/api',
    //         changeOrigin: true
    //     })
    // );
    // app.use(
    //     'http://127.0.0.1:3000/login', createProxyMiddleware({
    //         target: 'http://127.0.0.1:3100/xxx',
    //         changeOrigin: true
    //     })
    // );
    app.use(
        '/login', createProxyMiddleware({
            target: 'http://127.0.0.1:7001',
            changeOrigin: true,
        })
    );
    // app.use(
    //     '/', createProxyMiddleware({
    //         target: 'http://localhost:3100/login',
    //         changeOrigin: true
    //     })
    // );
};