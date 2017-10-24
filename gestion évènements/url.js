var url = require("url");

// URL PARSE
var r1 = url.parse("http://ericsarrion.fr:80/index.php?toto=titi#label1");
var r2 = url.parse("http://ericsarrion.fr/index.php");

[r1,r2].forEach(function(r){
    console.log("\n");
    console.log("href= " + r.href);
    console.log("protocol= " + r.protocol);
    console.log("host= " + r.host);
    console.log("hostname= " + r.hostname);
    console.log("port= " + r.port);
    console.log("pathname= " + r.pathname);
    console.log("search= " + r.search);
    console.log("path= " + r.path);
    console.log("query= " + r.query);
    console.log("hash= " + r.hash);
});

// URL RESOLVE
console.log(" %s => \n%s\n", "url.resolve('/one/two/three', 'four')",
              url.resolve('/one/two/three', 'four'));    
console.log(" %s => \n%s\n", "url.resolve('/one/two/three', '/four')",
              url.resolve('/one/two/three', '/four'));
console.log(" %s => \n%s\n", "url.resolve('http://exemple.com', '/one')",
              url.resolve('http://exemple.com', '/one'));
console.log(" %s => \n%s\n", "url.resolve('http://exemple.com', '/two')",
              url.resolve('http://exemple.com', '/two'));
console.log(" %s => \n%s\n", "url.resolve('http://exemple.com/one/', 'two')",
              url.resolve('http://exemple.com/one/', 'two'));  
              
              
// QUERYSTRING
var querystring = require("querystring");

var query = querystring.stringify({
    attr1: "value1",
    attr2: "value2"
});

console.log("Utilisationd e querystring.stringify()");
console.log("La query vaut " + query);
console.log("\n");

console.log("utilisation de querystring.parse()");
var obj = querystring.parse(query);
console.dir(obj);
