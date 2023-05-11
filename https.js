/**Name : Https Module
 * Description:  It simply encrypts the request from the browser to the web server, so it is tough to sniff that information. It basically works on two things: SSL (Secure Socket Layer)
TLS (Transport layer security)

 * Example: (function() {
const fs = require("fs");

    const https = require("https");
    let mimetypes = {
        "css":"text/css",
    "html":"text/html"
};
 
    // Options is used by the servers
    // pfx handles the certificate file
    let options = {
        pfx: fs.readFileSync("ssl/cert.pfx"),
    passphrase: "encrypted"
};
 
    let server = https.createServer(options, function(request, response) {
  
    // If the url is empty
    if (request.url == "" || request.url == "/") {
        request.url = "homepage.html";
    }
    fs.readFile(__dirname + "/" + request.url, function(err, content) {
        if (err) {
        console.log("Error: " + err);
        }
    else {
        response.writeHead(200,
            { 'Content-Type': mimetypes[path.extname(request.url).split(".")[1]] });
    response.write(content);
        }
     response.end();
    });
});
 
    server.listen("port number", "IP Address", function() {
 
        console.log("Server has started!");
});
  
})();

  */