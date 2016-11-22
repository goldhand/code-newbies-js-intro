const express = require('express');
const path = require('path');
const socketIO = require('socket.io');

/** @const server port */
const port = 3000;

/** @const server host address */
const host = '127.0.0.1';

/** @const path to project root */
const root = path.resolve(__dirname);

/** @const create a new express app */
const app = express();


app.get('/', (request, response) => {
  response.sendFile(path.join(root, 'index.html'));
});

app.get('/style.css', (request, response) => {
  response.sendFile(path.join(root, 'style.css'));
});

app.get('/index.js', (request, response) => {
  response.sendFile(path.join(root, 'index.js'));
});


/** @const open a connection */
const server = app.listen(port, host, () => {
  console.log('Server started', `http://${host}:${port}`);
  console.log('Press Ctrl+C to exit...\n');
});

/** @const create a new io connection */
const io = socketIO(server);

// listen to new connections
io.on('connection', (socket) => {
  // dispatch a message to clients when a new client connects
  io.emit('newConnection', 'There is a new connection');
});
