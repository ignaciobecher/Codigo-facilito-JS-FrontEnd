//Funciones

//Declaracion de funcion
function cuadrado(number){
    return number*number
}

//Expresion de funcion

let func=function(){}

//----------------------------------SCOPE-----------------------------//

//Scope Global
//variables, funciones y objetos que pueden ser accedidas desde cualquier parte del codigo

 var nombre="ignacio"

 function decirHola(){
    console.log("Hola"+nombre)
 } 

 //Scope local o de funcion
 //Es lo que esta localmente en una funcion, solo existe cuando se ejecuta
 function decirHola(){
    nombre="ignacio" //local
    console.log("Hola"+nombre)
 } 

 //----------------------------------Alcance de bloque-----------------------------//
 