// Builds the app. No listen() here, so tests can start it on any port.
const express = require('express');
const logger = require('./middleware/logger');
const { notFound, errorHandler } = require('./middleware/errorHandler');
const routes = require('./routes');

const app = express();

// 1. Middleware that runs on every request — order matters, top to bottom.
app.use(logger); // first, so even a request with broken JSON gets logged
app.use(express.json()); // fills req.body from a JSON request body

// 2. Routes
app.get('/', (req, res) => {
  res.send('Welcome to CommunityHub API');
});
app.use('/api', routes);

// 3. Nothing matched -> 404. Something threw -> error handler. Always last, in this order.
app.use(notFound);
app.use(errorHandler);

module.exports = app;
