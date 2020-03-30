const socket = io();

//catching messages
socket.on('message' , message =>{
    console.log(message);
});

