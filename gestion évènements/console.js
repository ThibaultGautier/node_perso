console.dir(console); // affiche les propriétés de l'objet console

// utiliser une boucle pour afficher les propriétés de l'objet console
for( var prop in console){
    console.log("%s : %s", prop, console[prop]);
}

// voir time et timeend dans server.js

