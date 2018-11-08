var socket = io();
socket.on('connect',()=>{
  console.log("connection made");
  socket.emit('createEmail', {
      to: "intizar@gmail.com", 
      text: "Hi"
  })
  socket.emit('createMessage', {
    to: "client@gmail.com", 
    text: "Hi", 
    createdAt :"12: PM"
})
});
socket.on('disconnect',()=>{
  console.log("disconnect made");
});

socket.on('newEmail',(email)=>{
    console.log("newEmail ", email);
});
socket.on('newMessage',(data)=>{
    console.log( data);
});
