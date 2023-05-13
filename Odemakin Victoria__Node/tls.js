/**Name : TLS Module
 * Description: The tls module provides an implementation of the Transport Layer Security (TLS) and Secure Socket Layer (SSL) protocols that are built on top of OpenSSL.  */
const tls = require("tls");
const fs = require("fs");

const options = {
  key: fs.readFileSync("net.js"),
  cert: fs.readFileSync("net.js"),
  ca: fs.readFileSync("net.js"),
  requestCert: true,
  rejectUnauthorized: true,
};

const server = tls.createServer(options, (socket) => {
  console.log(`Client connected: ${socket.remoteAddress}:${socket.remotePort}`);

  socket.write("Welcome to the secure server!\n");
  socket.pipe(socket);
});

server.listen(8000, () => {
  console.log(`Server listening on port ${server.address().port}`);
});
