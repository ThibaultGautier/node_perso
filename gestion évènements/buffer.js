var buf = new Buffer("A");
var buf2 = new Buffer(10);


for(var i = 1; i<= buf2.length; i++){
    console.log(buf2);
    console.log(buf.toString());
    buf2[i] = buf;
    buf[0] = buf[0] + 1;
}

var str = "Bonjour";
var buf3 = new Buffer(10);
buf3.write(str, 1,3);
console.log(buf3.toString());

var buf4 = new Buffer("Bonjour Titi");
var buf5 = new Buffer(10);

buf4.copy(buf5, 0, 2, 12);
console.log(buf5.toString());

console.log(buf5.toString("base64"));

console.log(Buffer.byteLength("Titiiii", "UTF-8"));