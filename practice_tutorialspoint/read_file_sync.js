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