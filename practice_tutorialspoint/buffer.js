var buf = new Buffer(10);
var buf2 = new Buffer([10, 20, 30, 40, 50]);
var buf3 = new Buffer("Simply Easy Learning", "utf-8");

len = buf.write("Simply Easy Learning");

console.log("Octets written : "+  len);