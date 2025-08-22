// Simple Books API Clone with Node.js + Express + JWT

const express = require('express');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const { v4: uuidv4 } = require('uuid');

const app = express();
const PORT = 3000;
const SECRET_KEY = 'your_secret_key';

app.use(bodyParser.json());

// In-memory databases
const clients = [];
const books = [
  { id: 1, name: 'Atomic Habits', type: 'non-fiction' },
  { id: 2, name: 'The Hobbit', type: 'fiction' },
  { id: 3, name: 'Sapiens', type: 'non-fiction' },
  { id: 4, name: 'Harry Potter', type: 'fiction' }
];
const orders = [];

// Middleware to verify token
function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (!token) return res.sendStatus(401);

  jwt.verify(token, SECRET_KEY, (err, client) => {
    if (err) return res.sendStatus(403);
    req.client = client;
    next();
  });
}

// Status
app.get('/status', (req, res) => {
  res.json({ status: 'OK' });
});

// Register API client
app.post('/api-clients', (req, res) => {
  const { clientName, clientEmail } = req.body;

  if (clients.find(c => c.clientEmail === clientEmail)) {
    return res.status(409).json({ error: 'API client already registered.' });
  }

  const client = { clientName, clientEmail };
  clients.push(client);
  const token = jwt.sign(client, SECRET_KEY, { expiresIn: '7d' });
  res.json({ accessToken: token });
});

// Books
app.get('/books', (req, res) => {
  const { type, limit } = req.query;
  let filteredBooks = [...books];
  if (type) filteredBooks = filteredBooks.filter(b => b.type === type);
  if (limit) filteredBooks = filteredBooks.slice(0, parseInt(limit));
  res.json(filteredBooks);
});

app.get('/books/:bookId', (req, res) => {
  const book = books.find(b => b.id === parseInt(req.params.bookId));
  if (!book) return res.sendStatus(404);
  res.json(book);
});

// Orders
app.post('/orders', authenticateToken, (req, res) => {
  const { bookId, customerName } = req.body;

  if (req.client.clientName !== customerName) {
    return res.status(403).json({ error: 'Customer name does not match token.' });
  }

  const order = {
    orderId: uuidv4(),
    bookId,
    customerName
  };
  orders.push(order);
  res.status(201).json({ orderId: order.orderId, created: true });
});

app.get('/orders', authenticateToken, (req, res) => {
  res.json(orders);
});

app.get('/orders/:orderId', authenticateToken, (req, res) => {
  const order = orders.find(o => o.orderId === req.params.orderId);
  if (!order) return res.sendStatus(404);
  res.json(order);
});

app.patch('/orders/:orderId', authenticateToken, (req, res) => {
  const order = orders.find(o => o.orderId === req.params.orderId);
  if (!order) return res.sendStatus(404);
  order.customerName = req.body.customerName || order.customerName;
  res.json({ updated: true });
});

app.delete('/orders/:orderId', authenticateToken, (req, res) => {
  const index = orders.findIndex(o => o.orderId === req.params.orderId);
  if (index === -1) return res.sendStatus(404);
  orders.splice(index, 1);
  res.sendStatus(204);
});

app.listen(PORT, () => {
  console.log(`API running at http://localhost:${PORT}`);
});
