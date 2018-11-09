var socket = io();
socket.on('connect',()=>{
  console.log("connection made");
  
 
});
socket.on('disconnect',()=>{
  console.log("disconnect made");
});

socket.on('newMessage',(data)=>{
    console.log( data);
});

socket.on('welcomeMessage',(data)=>{
  console.log( data);
});

socket.on('welcomeUser',(data)=>{
  console.log( data);
});

