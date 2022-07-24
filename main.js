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
function hola(nombre){
   if(nombre){
      let saludo="Hola"+ nombre
   }
   console.log(saludo)
}

hola(ignacio)
//let y const alojan la variable en el alcance de bloque solamente, var si serviria.
//ES RECOMENDABLE USAR LET PORQUE EVITA BUGS

 //----------------------------------FUNCIONES PURAS-----------------------------//
//Son aquellas que no producen efectos secundarios


//----------------------------------FIRST CLASS OBJECTS-----------------------------//
 //Cuando un dato puede ser enviado, asignado o retornado a una variable se trata de un first class 
 //1. Debe ser posible retornarlo
 //2. Deber ser posible asignarlo a una variable
 //3. Debe ser posible enviarlo como argumento

 return 2
 let num=2
 hola(2)

//----------------------------------HOISTING-----------------------------//
//JS comprende si llamamos una funcion antes de declararla, la variable o funcion estaria al principio del scope
// Solo funciona en la declaracion y no la asignacio
 console.log(x)

 var x//funciona
 var x=10//no funciona

 //----------------------------------ARRAYS Y SUS USOS-----------------------------//
//------------------------------RECORRER ARRAYS-------------------//

let arr=[1,2,3,4]

for(let i=0; i<arr.length; i++){
    console.log(arr[i])
}

//------------------------------FOR EACH ARRAYS-------------------//

let lenguajes=["ruby","python","javascript","C++"]

lenguajes.forEach(function(lenguaje){   //lo que hago es pasar una funcion anonima con una variable nombrada al azar, esto va a devolver el array
    console.log(lenguaje)
})

//------------------------------MAP ARRAYS-------------------//
//map itera individualmente en cada elemento del array. Map no altera el array original, sino que crea uno nuevo

let numeros=[1,2,45,6]

let cuadrados=numeros.map(function(numero){
    return numero*numero
})

//------------------------------FILTER ARRAYS-------------------//
//Filter lo que hace es devolvernos los valores true de un array
let arrayNum=[2,4,6,8,10,15,7]

let nuevoArray=arrayNum.filter(function(nume){
   return nume%2 ===0
})

console.log(nuevoArray)

//------------------------------REDUCE ARRAYS-------------------//
//se usa cuando queremos reducir un array a un solo valor

let arrayNumeros=[1,2,3,4,5];

let suma=arrayNumeros.reduce(function(acc,numero){   //acc es el acumulador
   return acc+numero
},0)//inicializo en posicion 0

//------------------------------BUSCAR EN ARRAYS-------------------//
//INDEX OF
//devuelve posicion
let arreglo1=["ruby","php","Js"]
arreglo1.indexOf("ruby")

//INCLUDES
//devuelve true o false
let arreglo2=["ruby","php","Js"]
arreglo2.includes("ruby")

//FIND
//para encontrar algo con una funcion de prueba
arreglo2.find(function(elemento,posicion,arreglo){
   return elemento==="ruby"
})