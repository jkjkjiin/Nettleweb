const express = require('express');
const cors = require('cors');
const { createProxyMiddleware } = require('http-proxy-middleware');

const PORT = process.env.PORT || 8080;
// Target to proxy to, e.g. http://localhost:3000
const PROXY_TARGET = process.env.PROXY_TARGET || 'http://localhost:3000';
// Path to match for proxying
const PROXY_PATH = process.env.PROXY_PATH || '/api';

const app = express();

app.use(cors());

app.get('/', (req, res) => {
  res.send('Nettleweb proxy server running. Proxying ' + PROXY_PATH + ' -> ' + PROXY_TARGET);
});

app.use(PROXY_PATH, createProxyMiddleware({
  target: PROXY_TARGET,
  changeOrigin: true,
  logLevel: 'warn',
  onProxyReq(proxyReq, req, res) {
    // You can add headers or logging here if needed
  },
}));

app.listen(PORT, () => {
  console.log(`Proxy server listening on http://0.0.0.0:${PORT}`);
  console.log(`Proxying ${PROXY_PATH} -> ${PROXY_TARGET}`);
});

// Graceful shutdown
process.on('SIGINT', () => process.exit());
