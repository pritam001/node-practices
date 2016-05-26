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