//17.8

var http = require('http');
var fs = require('fs');


var server = http.createServer();

server.on('request', function(request, response) {

    if (request.method === 'GET' && request.url === '/') {
        response.setHeader("Content-Type", "text/html; charset=utf-8");
        response.write(fs.readFileSync('./index.html'))
        response.end();
    } else {
        response.setHeader("Content-Type", "image/jpeg");
        response.statusCode = 404;
        response.write(fs.readFileSync('./sad-face.jpg'))
        response.end();
    }
});
server.listen(8080);