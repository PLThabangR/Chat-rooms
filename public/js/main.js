const socket = io();

//catching messages
socket.on('message' , message =>{
    console.log(message);
});
socket.on('messageIn' , message =>{
    console.log(message);
})

