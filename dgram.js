/**Name : dgram Module
 * Description: 	Provides implementation of UDP datagram sockets
 * Example:var dgram = require('dgram');
var s = dgram.createSocket('udp4');
s.on('message', function(msg, rinfo) {
  console.log('I got this message: ' + msg);
});
s.bind(8080));

  */