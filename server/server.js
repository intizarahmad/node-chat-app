const path = require('path');
const express = require('express');
const http  = require('http');
const socketIO = require('socket.io');
const app = express();
const publicPath = path.join(__dirname, '../public');
app.use(express.static(publicPath));
const port = process.env.PORT || 3000;
const server = http.createServer(app);
const io = socketIO(server);
const { generateMessage } = require("./utils/message");
io.on('connection', (socket)=>{
  console.log("New connection");

  socket.emit('newMessage', generateMessage('admin', 'welcome to chat app'))
  socket.broadcast.emit('newMessage', generateMessage('admin', 'New user joined'))
  socket.on('disconnect',()=>{
    console.log("Clinet disconnected ");
  });

  socket.on('createMessage',(message, callback)=>{
    io.emit('newMessage',generateMessage(message.from,message.text));
    callback("from server");
  });
});

server.listen(port, ()=>{
  console.log(`Server is up and running ${port}`);
});
