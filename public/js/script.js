var socket = io();
socket.on('connect',()=>{
  console.log("connection made");
  
 
});
socket.on('disconnect',()=>{
  console.log("disconnect made");
});

socket.on('newMessage',(message)=>{
    console.log("newMessage", message);
    let li = jQuery(`<li>${message.from}:${message.text}</li>`);
    jQuery('#messages').append(li);
});



jQuery('#message-form').on('submit', function(e){
  socket.emit('createMessage',{
    from: "User", 
    text: jQuery('#message').val()
  }, function(data){
    console.log("wow, ",data);
    jQuery('#message').val('')
  });
  e.preventDefault();
});