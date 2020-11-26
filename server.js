const express = require('express');

const app = express();
const server = app.listen(process.env.PORT || 3000);

app.use(express.static("public"));

const socket = require('socket.io');

var io = socket(server);

io.sockets.on('connection', newConnection);

console.log("server is running");

function newConnection(socket){
  console.log('new connection:' + socket.id);

  socket.on('mouse', mouseMsg);

  function mouseMsg(data) {
    socket.broadcast.emit('mouse', data);
  }
}