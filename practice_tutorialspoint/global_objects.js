console.log( __filename );

console.log( __dirname );

function printHello(){
   console.log( "Hello, World!");
}
// Now call above function after 2 seconds
var t = setTimeout(printHello, 2000);

//clearTimeout(t);

function printPass(){
   console.log( "2 seconds passed!");
}
// Now call above function after 2 seconds
setInterval(printPass, 2000);

//clearInterval(t);