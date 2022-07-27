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

//Elemento: es el elemento que esta iterando
//Posicion: en que posiucion va
//Arreglo: arreglo completo

//FINDINDEX
//Encontrar el indice
arreglo2.findIndex(function(elemento,posicion,arreglo){
   return elemento==="ruby"
})

//------------------------------SPREAD AND REST-------------------//
//Spread sintax. Separa los elementos de un array

let arreglo3=[1,2,3]
let nombres4="ignacio"

console.log(...nombres4)

//Rest parameters. Unen los elementos de un array

function promedio(nombre,...calificaciones){
   console.log(nombres4, calificaciones)
}
promedio("ignacio", 1,2,3,4,5)

//------------------------------OBJETOS-------------------//
//DECLARAR UN OBJETO JSON -> JavaScript object notation

let curso={
   titulo:"Curso Js",
   Formato:"Video",
   Duracion:"10 horas",
   Bloques:["introduccion","Funciones"],
   Inscribir: function(){
      console.log("Listo")
   },
}

//Acceder a un elemento
console.log(curso.titulo) //----> "Curso JS"
console.log(curso["titulo"]) //----> "Curso JS"
console.log(curso.Inscribir()) //----> "Curso JS"

//Agregar datos a un objeto
curso.titulo="Curso de ruby"
curso["titulo"]="Curso de ruby"

//------------------------------SHORTHAND SYNTAX-------------------//

let nombre="ignacio"
let usuario={nombre}

console.log(usuario.nombre) //---> nombre:"ignacio"


//------------------------------COMBINAR O DUPLICAR OBJETOS-------------------//

//Duplicar objetos n
 
let user={
   Edad:"20",
   nombre:"Ignacio"
}

let copiaAdmin={...user,Permisos:true}//----> copia el objeto y le agrega el elemento "Permisos"

//Combinar objetos
let user={
   Edad:"20",
   nombre:"Ignacio"
}

let esquemaPermisos={nivel:2}

let admin={...user,...esquemaPermisos}//----->devuelve un objeto con los elementos de los combinados


//------------------------------DESTRUCTURING ASSIGNMENT-------------------//

let user={
   Edad:"20",
   nombre:"Ignacio"
}

let {nombre}=user  // del lado izquierdo va la variable a extraer y del lado derecho el objeto del que la sacamos
let {nombre:username}=user //creo una variable username con el valor de nombre

//Spread operator en object destructuring
let {nombre,...sobrantes}=user//----> me va a devolver un objeto con los sobrantes menos name

//Destructuring en array

let calificaciones=[10,9,9.5,8,8.5,7]
let[matematicas,lengua,...otras]=calificaciones //-----> me devolveria [9.5,8,8.5,7]. 

//----------------------------FUNCIONES CONSTRUCTORAS-------------------//
//Son funciones que nos permiten crear nuevos objetos
function Course(){
   this.tittle="Curso JS" //This nos permite modificar el objeto, es la forma en la que podemos accederlo
}

let objeto=new Course()

let js=new Course()//Creo una copia del objeto en js

//----------------------------ARROW FUNCTIONS-------------------//
let demo=() => console.log("Hola") //cuando es de una sola linea podemos omitir las llaves

let hola(a,b) =>{
   return (a+b)
}

//----------------------------ARROW FUNCTIONS Y CONTEXTO-------------------//
//Heredan el valor de this del contexto en el que fueron creadas, no se reasigna
function Estudiante(){
   this.nombre="Ignacio"
   this.saludar= () =>console.log("Hola"+this.nombre)  //la arrow function nos evita problemas con el this, el this en una arrow adopta el contexto en la creacion y no lo modifica en la ejecucion
}     //al usar una funcion comun el this toma el contexto en la ejecucion y no en la creacion

let e =new Estudiante()

//----------------------------BIND, CALL Y APPLY-------------------//
function Estudiante(){
   this.nombre="Ignacio"
   this.saludar=function(){console.log(this)}
   this.saludar=this.saludar.bind(this )
}

let e=new Estudiante  //----> si hago console.log me va a ejecutar el objeto estudiante entero
 
//Metodos que ejecutan la funcion:
//Inmediato: call y apply
//Lazy: bind

//CALL, APPLY Y BIND LO QUE ME PERMITEN ES DECIRLE EXPLICITAMENTE A JS QUIEN VA A SER EL THIS EN UNA FUNCION

//HACER UN PUSH AL FINALIZAR!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!*******************