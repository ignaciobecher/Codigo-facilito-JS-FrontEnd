//----------------------------PRACTICAS ASINCRONISMO-------------------//

// let request=require("request"); //con esto importo con node


// request("https://www.google.com", function(){ //ejecuta el request y despues que termina ejecuta la function
//     console.log("termine la peticion")
// })

// console.log("Yo socedo despues") //lo imprime primero aunque este despues de la funcioin

//Por mas que la funcion asincrona tarde, el lenguaje va a seguir ejecutando normalmente

let request=require("request-promise"); 


request("https://www.google.com").then(function(){console.log("Termine la peticion")})
console.log("Yo socedo despues") 


