const express = require('express');
const http = require('http');
const path = require('path');
const cors = require('cors');
const { createProxyMiddleware } = require('http-proxy-middleware');

const PORT = process.env.PORT || 8080;
const PROXY_TARGET = process.env.PROXY_TARGET || 'http://localhost:3000';
const PROXY_PATH = process.env.PROXY_PATH || '/api';
// WebSocket path used by the client for chat
const PROXY_WS_PATH = process.env.PROXY_WS_PATH || '/chat';

const app = express();

app.use(cors());

// Create proxy middlewares (enable ws for chat)
const apiProxy = createProxyMiddleware(PROXY_PATH, {
  target: PROXY_TARGET,
  changeOrigin: true,
  logLevel: 'warn',
});

const chatProxy = createProxyMiddleware(PROXY_WS_PATH, {
  target: PROXY_TARGET,
  changeOrigin: true,
  ws: true,
  logLevel: 'warn',
});

// Mount proxies BEFORE static so they take precedence for matching routes
app.use(PROXY_PATH, apiProxy);
app.use(PROXY_WS_PATH, chatProxy);

// Serve static files from repo root
app.use(express.static(path.join(__dirname), { index: false }));

// Serve index.html for / and /index.html
app.get(['/', '/index.html'], (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Fallback: serve index.html for all other GET requests that accept HTML
app.use((req, res, next) => {
  if (req.method === 'GET' && (req.headers.accept || '').includes('text/html')) {
    return res.sendFile(path.join(__dirname, 'index.html'));
  }
  next();
});

// Create HTTP server and wire upgrade handling for WebSocket proxying
const server = http.createServer(app);

server.on('upgrade', (req, socket, head) => {
  try {
    const url = req.url || '';
    if (url.startsWith(PROXY_WS_PATH)) {
      // let the chat proxy handle the websocket upgrade
      chatProxy.upgrade(req, socket, head);
      return;
    }
    if (url.startsWith(PROXY_PATH)) {
      apiProxy.upgrade && apiProxy.upgrade(req, socket, head);
      return;
    }
    // Not a proxied upgrade - destroy the socket
    socket.destroy();
  } catch (err) {
    socket.destroy();
  }
});

server.listen(PORT, () => {
  console.log(`Server listening on http://0.0.0.0:${PORT}`);
  console.log(`Proxying ${PROXY_PATH} -> ${PROXY_TARGET}`);
  console.log(`Proxying WS ${PROXY_WS_PATH} -> ${PROXY_TARGET}`);
});
