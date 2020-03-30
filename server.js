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
io.on('connection',socket =>{
    console.log("New ws connection...")
} )

//This select the port for the app to listen 
const PORT = 3000 || process.env.PORT;

//Allows the app to serve
server.listen(PORT ,() =>
    console.log(`Server is running on port ${PORT}`));