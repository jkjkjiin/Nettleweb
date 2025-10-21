const express = require('express');
const path = require('path');
const cors = require('cors');
const { createProxyMiddleware } = require('http-proxy-middleware');

const PORT = process.env.PORT || 8080;
// Target to proxy to, e.g. http://localhost:3000
const PROXY_TARGET = process.env.PROXY_TARGET || 'http://localhost:3000';
// Path to match for proxying
const PROXY_PATH = process.env.PROXY_PATH || '/api';

const app = express();

app.use(cors());

// Log incoming requests for debugging
app.use((req, res, next) => {
  console.log('[REQ]', req.method, req.url, 'Accept:', req.headers.accept);
  next();
});

// DEBUG: log incoming requests to help diagnose routing
app.use((req, res, next) => {
  console.log('[REQ]', req.method, req.path, 'Accept:', req.headers.accept);
  app.use(cors());

  // Serve static files from repository root (so index.html is available at /)
  app.use(express.static(path.join(__dirname), { index: false }));

  // Explicit routes for root and index.html
  app.get(['/','/index.html'], (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
  });

  // Fallback: for any other GET request that accepts HTML, serve index.html
  app.use((req, res, next) => {
    if (req.method !== 'GET') return next();
    const accept = req.headers.accept || '';
    if (accept.indexOf('text/html') !== -1) {
      return res.sendFile(path.join(__dirname, 'index.html'), (err) => {
        if (err) return next(err);
      });
    }
    return next();
  });

  // Proxy middleware for API/backend requests (place after static/routes so API paths are proxied)
  app.use(PROXY_PATH, createProxyMiddleware({
    target: PROXY_TARGET,
    changeOrigin: true,
    logLevel: 'warn',
    onProxyReq(proxyReq, req, res) {
      // You can add headers or logging here if needed
    },
  }));
});

// Debug: print middleware stack (after setup, before listening)
if (app._router && app._router.stack) {
  console.log('Middleware stack:');
  app._router.stack.forEach((layer, i) => {
    const name = layer.name || '<anonymous>';
    const route = (layer.route && layer.route.path) || (layer.regexp && layer.regexp.source) || '';
    console.log(i, name, route);
  });
}

app.listen(PORT, () => {
  console.log(`Proxy server listening on http://0.0.0.0:${PORT}`);
  console.log(`Proxying ${PROXY_PATH} -> ${PROXY_TARGET}`);
});

// Graceful shutdown
process.on('SIGINT', () => process.exit());
