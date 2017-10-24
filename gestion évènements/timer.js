var i = 1;
var t = setInterval( ()=>{
 console.log("Coucou");
 console.log(i);
 i = i+1;
 if(i===6){
    clearInterval(t);
 }
}, 500);

//Même principe avec setTimeout et clearTimeout
