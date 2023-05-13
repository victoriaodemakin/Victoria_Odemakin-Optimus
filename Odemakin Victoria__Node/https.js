/**Name : Https Module
 * Description:  It simply encrypts the request from the browser to the web server, so it is tough to sniff that information. It basically works on two things: SSL (Secure Socket Layer)
TLS (Transport layer security)  */

const http = require('http');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, World!\n');
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});

    