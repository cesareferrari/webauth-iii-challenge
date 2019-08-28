const express = require('express');
const server = express();
const usersRouter = require('./users/users-router.js');
const authRouter = require('./auth/auth-router.js');

server.use(express.json());

server.use('/api/auth', authRouter);
server.use('/api/users', usersRouter);

server.get('/', (req, res) => {
  res.send('<h1>Welcome to the users management</h1>');
});

module.exports = server;
