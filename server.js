const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 3001;
const { createProxyMiddleware } = require('http-proxy-middleware');

app.use(
    '/api',
    createProxyMiddleware({
        target: 'https://ecommerce-pizza.herokuapp.com',
        changeOrigin: true
    })
);

app.use('/', express.static(path.join(__dirname, 'build')));

app.listen(port, () => console.log("Listening on Port", port));
