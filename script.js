//17.8

var http = require('http');
var fs = require('fs');


var server = http.createServer();

server.on('request', function(request, response) {
    response.setHeader("Content-Type", "text/html; charset=utf-8");
    if (request.method === 'GET' && request.url === '/hello' && request.url === '/') {
        response.write(fs.readFileSync('./index.html', function(err, data) {
            console.log(data);
        }));
    } else {
        response.statusCode = 404;
        response.write('<h1>404: Bardzo Zła ścieżka!</h1><img src="sad-face.jpg">');
        response.end();
    }
});
server.listen(8080);