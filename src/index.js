const express = require("express");
const path = require("path");
const http = require("http");
const socketio = require("socket.io");
const port = process.env.PORT || 3000;

const app = express();
const server = http.createServer(app);
const io = socketio(server);
const publicDirectoryPath = path.join(__dirname, "..", "public");
app.use(express.static(publicDirectoryPath));

io.on("connection", () => {
  console.log("New web socket connection");
});

server.listen(port, () => {
  console.log(`Server running at port ${port}`);
});
