var events = require("events");
var obj1 = new events.EventEmitter();

obj1.addListener("event1", function(){
    console.log("1 - L'objet 1 a reçu en évènement event1");
});

obj1.addListener("event1", f = function(){
    console.log("2 - L'objet 1 a reçu en évènement event1");
}); 

obj1.addListener("event1", function(nom, prenom){
    console.log("3 - Nom : " + nom + " Prenom: " + prenom);
}); 

obj1.emit("event1", "Gautier", "Thibault");

obj1.removeAllListeners("event1");

obj1.addListener("event2", function(p){
    console.log("Nom = " + p.nom + " Prenom = " + p.prenom);
}); 

var p1 = {nom: "Gautier", prenom:  "Thibault"};
obj1.emit("event2", p1);
var p2 = {nom: "Node", prenom:  "Jesse"};
obj1.emit("event2", p2);