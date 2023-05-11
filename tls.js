/**Name : TLS Module
 * Description: The tls module provides an implementation of the Transport Layer Security (TLS) and Secure Socket Layer (SSL) protocols that are built on top of OpenSSL.
 * Example: const tls = require('tls'),
    fs = require('fs'),
 
    PORT = 1337,
    HOST = '127.0.0.1',
    value = null;
 
const options = {
    key: fs.readFileSync('private-key.pem'),
    cert: fs.readFileSync('public-cert.pem'),
    rejectUnauthorized: false
};
 
const server = tls.createServer(options, function (socket) {
 
    socket.on('data', function (data) {
        console.log('\nReceived: %s ',
            data.toString().replace(/(\n)/gm, ""));
    });
 
    server.close(() => {
        console.log("Server closed successfully");
    });
});

  */