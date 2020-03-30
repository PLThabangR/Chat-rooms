//Import the express using common js
const express = require('express');
const path = require('path');
const http =require('http');
const socketio =  require('socket.io'); 


//Creating variables
const app = express();
const server = http.createServer(app);
const io = socketio(server);

//set static folder
app.use(express.static(path.join(__dirname,'public')));

//Run when a client connect
io.on('connection', socket => {

//Welcome current user
socket.emit('message','Welcome to chat app');

//Broadcast will emit to everybody when a user connects
socket.broadcast.emit('message','A user has joined the chat');

//Brodcast will run when user disconnects
socket.on('disconnect',()=>{
io.emit('message','A user has left the chat');
})


} );

//This select the port for the app to listen 
const PORT = 3000 || process.env.PORT;

//Allows the app to serve
server.listen(PORT ,() =>
    console.log(`Server is running on port ${PORT}`));