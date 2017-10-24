var fs = require("fs");
var stream = require("stream");

var readable = new stream.Readable();

var content = fs.readFileSync("stream.txt");

// V1 //
/* console.log("1");
readable._read = function(size){
    console.log("2");
    console.log("Méthode _read() appelée");
    if(content) readable.push(content);
    console.log("3");
    content =  "";
    console.log("4");
};
console.log("5");
var buf = readable.read();
console.log("6");
console.log(buf); */

// V2 //
/* console.log("1");
readable._read = function(size){
    console.log("2");
    console.log("méthode _read appelée");
    if(content) readable.push(content);
    console.log("3");
    content = "";
};

console.log("6");
readable.on("readable", function(){
    console.log("4");
    var buf = readable.read();
    console.log("5");
    console.log(buf);
}); */

readable._read = function(size){
    process.stdin.removeAllListeners("data").on("data", function(chunk){
        readable.push(chunk);
    });
};

readable.on("data", function(chunk){
    console.log(chunk.toString());
});