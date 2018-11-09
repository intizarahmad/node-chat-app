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
io.on('connection', (socket)=>{
  console.log("New connection");

  socket.emit('newMessage', {
    from:'admin', 
    text:"welcome to chatapp"
  })
  socket.broadcast.emit('newMessage', {
    from:'admin', 
    text:"New user join in chatapp"
  })
  socket.on('disconnect',()=>{
    console.log("Clinet disconnected ");
  });

  socket.on('createMessage',(message)=>{
    io.emit('newMessage',{
      from: message.from, 
      text: message.text, 
      createdAt: new Date()
    });
  });
});

server.listen(port, ()=>{
  console.log(`Server is up and running ${port}`);
});
