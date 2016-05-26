console.log("Hello, World2!")

var http = require("http");

http.createServer(function(request, response){
	// Send the http header, HTTP Status : 200 OK
	response.writeHead(200,{'Content-Type':'text/plain'});
	response.end(' Hello World !');
}).listen(8081);

console.log("Server running at http://127.0.0.1:8081");
