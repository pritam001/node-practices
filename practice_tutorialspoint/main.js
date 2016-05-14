/* ---------------------------------------------------
console.log("Hello, World2!")

var http = require("http");

http.createServer(function(request, response){
	// Send the http header, HTTP Status : 200 OK
	response.writeHead(200,{'Content-Type':'text/plain'});
	response.end('Hello World! Http Head \n');
}).listen(8081);

console.log("Server running at http://127.0.0.1:8081");

// ---------------------------------------------------
var fs = require("fs");

var data = fs.readFileSync('input.txt');
console.log(data.toString());
console.log("Program sync ended!");

var fs2 = require("fs");

fs2.readFile('input.txt', function(err, data){
	if(err) return console.error(err);
	console.log(data.toString());
});

console.log("Program async last command executed!");
*/
// ---------------------------------------------------
var event1 = require("events");

var eventEmitter1 = new event1.EventEmitter();

// Create an event handler as follows
var connectHandler = function connected() {
   console.log('connection succesful.');
  
   // Fire the data_received event 
   eventEmitter1.emit('data_received');
}

eventEmitter1.on('connection', connectHandler);

eventEmitter1.on('data_received', function(){
	console.log('data received successfully');
});

eventEmitter1.emit('connection');

console.log('Event program ended!');
