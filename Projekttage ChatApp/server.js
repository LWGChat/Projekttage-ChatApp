// AUFGABENBLOCK 5 

const express = require('express');
const app = express();
const path = require("path");
const io = require("socket.io")(server);

  //1.: https://nodejs.org/de/download/current herunterladen
  //2.: npm init -y
  //3.: npm install express
  //4.: npm install socket.io

// UNTER MAC bitte andere Commands verwenden bzw. immer "sudo" vor "npm" setzen.


app.use(express.static(path.join(__dirname, "public")));

io.on("connection", function (socket) {
  socket.on("newuser", function (username) {
    socket.broadcast.emit("update", username + " ist dem Chat beigetreten");
  });

  socket.on("exituser", function (username) {
    socket.broadcast.emit("update", username + " hat den Chat verlassen");
  });

  socket.on("chat", function (message) {
    socket.broadcast.emit("chat", message);
  });
});


// Durch die folgenden Zeilen ist es möglich,
// dass man den server unter http://localhost:5000/  aufrufen kann. 
// gestartet wird der Server im Terminal mit :  node server.js    dann ruft man http://localhost:5000/ auf.
const PORT = process.env.PORT || 5000;  
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
