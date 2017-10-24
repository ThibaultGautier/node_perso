//Creation d'un stream en lecture

var stream = require("stream");
var readable = new stream.Readable();

console.dir(readable);

//La capacité d'un stream à recevoir ou envoyer des données vient de la class events.EventEmitter

var events = require("events");

console.log(readable instanceof events.EventEmitter);

//pour rappel on est équivalent à addListener
/*
readable.on("data", function(){
    console.log(chunk);
}); */

// La méthode interne _read() est appelée mais définie par nous même sur le stream. Le programme est à l'écoute de l'événement data et appelle la méthode _read.
//Il faut donc la définir sur l'objet associé au stream.
// size indique la taille du buffer pouvant être lu lors de l'appel de la méthode _read()
/* readable._read = function(size){
    //console.log("Méthode _read() appelée");
    readable.push("Bijor tou le mande");
    readable.push("Bijor tou le mande kommen sa va ??");
}

readable.on("data", function(chunk){
    console.log(chunk);
}); */

//emission des données sur le stream
/* readable.push("Bijor tou le mande");
readable.push("Bijor tou le mande kommen sa va ??");*/

//LIRE DANS UN FICHIER AVEC _read
var fs = require("fs");
var content = fs.readFileSync("stream.txt");

readable.on("data", function(chunk){
    console.log("5");
    console.log(chunk.toString());
    console.log("6");
});

readable._read = function(size){
    console.log("1");
    console.log("Méthode _read appelée pour ecriture dans un fichier");
    console.log("2");
    if(content) readable.push(content);
    console.log("3");
    content = "";
    console.log("4");
};

