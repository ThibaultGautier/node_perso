var events = require("events");
var util = require("util");

function Server(){

} 

function Server(port){
    this.port = port;
    console.log("Creation d'un serveur sur le port : " + this.port);
} 
    
console.time("test1");
util.inherits(Server, events.EventEmitter);

var server = new Server();

server.addListener("connexion", function(){
    console.log("Une connexion a été effectuée sur le serveur");
});



server.emit("connexion");

var server2 = new Server(3001);

server2.addListener("connexion2", function(){
    console.log("Une connexion a été effectuée sur le serveur2");
});
server2.emit("connexion2");
console.timeEnd("test1");
/////// AUTRE METHODE PLUS OPTI ///////////
console.time("test2");
var server3 = new Server(3000);
var server4 = new Server(3001);

[server3, server4].forEach(function(server){
    server.addListener("connexion", function(){
        console.log(" serveur 3 et 4 : une connexion a été effectuée sur le port : " + this.port);
    })
});

server3.emit("connexion");
server4.emit("connexion");

/////// METHODE ONCE /////////
var obj1 = new events.EventEmitter();
obj1.once("event_once", function(){
    console.log("L'objet obj1 a reçu un événement event_once");
});

obj1.emit("event_once"); //L'element event_once existe
obj1.emit("event_once"); // L'element event_once n'existe plus
console.timeEnd("test2");