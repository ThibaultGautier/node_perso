var util = require("util");

var txt = util.format("Le nom est %s, le prenom est %s\n", "Gautier", "Thibault");
txt += util.format("tandis que l'age est %d", 25);

console.log(txt);

// retourner les champs d'un objet 

var obj = {nom: "Gautier", prenom: "Thibault", age: 25};
var txt = util.format("Le nom est %s, le prenom est %s\n", obj.nom, obj.prenom);
txt += util.format("Tandis que l'age est %d", obj.age);
console.log(txt);

// Afficher l'objet sous format json //

var txt = util.format("La personne est %j", obj);
console.log(txt);

// Afficher le json en redefinissant la méthode tostring()

obj.toString = function(){
    return util.format("%j", this);
}

var txt = util.format("La personne est %s", obj);
console.log(txt);

// analyser le contenu d'un objet avec util
var obj = {
    nom: "Gautier",
    prenom : "thibault",
    adresse : {
        ville : "Bordeaux",
        pays: "France"
    }
};

console.log("Avec une profondeur de 2 par défaut");
console.log(util.inspect(obj));
console.log("Avec une profondeur de 0");
console.log(util.inspect(obj, {depth: 0}));

// Test de l'Héritage dans la classe Server ////

///// Méthodes Booleennes ////////////
var tab=  [1,2,3];
console.log(util.isArray(tab));

var date = new Date();
console.log(util.isDate(date));

var e = new Error();
console.log(util.isError(e));



