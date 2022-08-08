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

//----------------------------DEFINIR CLASES-------------------//
//Es una alternativa para declarar objetos

class Curso{
   constructor(titulo){
      this.titulo=titulo
   }
   Inscribir(){
      console.log("Inscrito")
   }
}

let JavaScript=new Course("Curso de JS")

//----------------------------DEFINIR METODOS Y PROPIEDADES-------------------//

class Curso{
   tittle="Hola";
   inscribir=(nombre) =>{           //podemos definir este metodo como arrow function o como funcion comun
      this.nombre=nombre
   }
}

let c=new Curso();

//----------------------------ALCANCE DE PROPIEDADES-------------------//

class Curso{
   #title="JavaScript" //metodo privado, mientras que sea llamado dentro de la clase funciona, por fuera no
   constructor(){
      this.#bienvenida()
   }
   #bienvenida(){
      console.log("bienvenido al curso"+this.#title)
   }
}

let javascript=new curso()

//----------------------------METODO CONSTRUCTOR-------------------//
 
class Curso{
   constructor(titulo,color="yellow"){
      this.titulo=titulo
      this.color=color
      console.log(arguments)
   }      //se ejecuta de manera automatica cuando instanciamos un nuevo objeto de una clase
}

new Curso("Curso profesional de JS") //aca se ejecutaria el constructor automaticamente

//se ejecuta de manera automatica al crear una nueva ionstancia de la funcion

//----------------------------HERENCIA DE CLASES-------------------//

class Human{
   especio="humano"
}

class Admin extends Human{}//admin hereda de human. Admin hereda todo lo que tenga human menos lo que sea privado

let admin=new Admin

//Si tengo un metodo igual al heredado pero quiero sumar otro metodo igual pero modificado, utilizamos el "super"

class User{
   saludar(){console.log("hola usuario")}
}

class Admin extends User{
   saludar(){
      super.saludar()
      console.log("hola soy admin")
   }
}

let admin=new Admin()

admin.saludar() //----> "hola usuario" "hola soy admin"

//----------------------------METODOS ACCESORES-------------------//

class User{
   get nombre(){return "ignacio"} //GET se usa para obtener o leer el valor de una propeidad, ene ste caso "nombre"
   set nombre(nombre){console.log(nombre)}//SET se usa para asignar un valor nuevo a alguna propiedad
}

let user=new User()
console.log(user.nombre)//no hace falta ponerle parentesis a nombre


user.nombre="Becher"//es llamado cuando usamos el opereador de igualdad

user.nombre;//ASI LLAMAMOS A UN GETTER
user.nombre="abcdefg"//ASI LLAMAMOS A UN SETTER

//----------------------------METODOS Y PROPIEDADES ESTATICAS-------------------//

class Api{
   static ENDPOINT="localhost:3000";
   static get(){
      console.log(this.ENDPOINT)
   }
}

//el uso de static antes de un elemento me permite llamar al elemento de la clase sin tener que instanciar un nuevo objeeto

Api.get() //----> imprime "localhost:3000"


//---------------------------------------PROGRAMACION ORIENTADA A PROTOTIPOS-------------------------------------------//

function Course(){}
   Course.prototype.inscribir=function(){
      console.log("hola")
   }

let course=new Course();
course.abandonar=function(){console.log("abandonar")}

//----------------------------CONCEPTOS DE PROTOTIPOS-------------------//

// Conceptos de prototipos



// Tenemos la propiedad prototype, todas las funciones tienen esta propiedad y apunta al prototype object.
// El prototype object es el objeto al que podemos asignar métodos y propiedades que queremos compartir en el prototype chain o cadena de prototipos.
// Cuando creamos un objeto de una función usando new, se asigna una propiedad proto que apunta al prototype de la función con la que se creó el objeto, también conocida como función constructora. Esto quiere decir que podemos decir que proto apunta al prototype de la función constructora.
// El prototype chain o la cadena de prototipos hace referencia al enlace que se crea entre prototipos que tienen su propio prototipo, que tienen su propio prototipo. Cuando buscamos un método o una propiedad en un objeto, se buscará inicialmente en el objeto y luego en la cadena de prototipos.
// El último eslabón de la cadena de prototipos es Object.prototype, este objeto es usado para definir métodos que compartan todos los objetos del lenguaje, ya que eventualmente la cadena de prototipos termina aquí.
// El prototipo de una función constructora apunta por defecto al prototype de Object, aunque esto puede ser modificado.
// Un dato interesante es que cualquier objeto creado con la notación JSON enlaza su propiedad proto al prototype de la función constructora Object.

//----------------------------PROTOTIPOS EN LA PRACTICA-------------------//

//El objeto prototype de una funcion es un espacio para definir elementos que se compartiran entre todos los objetos creados a partir de la funcion

function Course(){}

Course.prototype.inscribir=function(){
   console.log("ok")
}

let JavaScript= new Course()
let ruby= new Course()   //ambos imprimen ----> "ok" 
//estas nuevas instancias heredan el protoype, los elementos heredados son compartidos, no copiados


//----------------------------HERENCIA DE PROTOTIPOS-------------------//

function Course(title){
   this.title=title
}

Course.prototype.inscribir=function(){console.log("inscribir")}

function LiveCourse(date){
   this.published_at=date
}

LiveCourse.prototype=Object.create(Course.prototype) //crea un nuevo {__proto__:Course.prototype}

let JavaScript=new LiveCourse(new Date)

//let JavaScript=new Course("Curso de JS")
let ruby=Object.create(javascript)

ruby.title="curso de ruby"  //----> si hago un console.log me va a imprimir "curso de ruby ya que en esta instancia estoy creando una nueva propiedad title, no esta modificando el prototype. anteriormente no copíe el prototype"

/*
En JS la herencia de prototipos funciona al incluir el prototype de una clase en la cadena de prototipos de un objeto.

Un objeto puede heredar de otro si lo usamos como primer argumento de Object.create

Una funcion constructora puede heredar de otra si usamos el prototype de la clase base como primer argumento de Object.create y asignamos ese resultado al prototype de la clase hija.
*/


//---------------------------------------PROGRAMACION ASINCRONA-------------------------------------------//

//Que es la programacion asincrona

/*
En un lenguaje de programación asíncrono como JavaScript, las tareas pueden ejecutarse secuencialmente, esto significa que podemos indicar que algunas tareas se pasen a segundo plano y esperen a su turno para ser reanudadas y ejecutadas.

Esta característica del lenguaje existe para mejorar el rendimiento del mismo, porque nos permite aprovechar al máximo las capacidades del equipo en el que se está ejecutando nuestro código.

Por lo general las tareas que se esperan sean más tardadas, o que necesiten esperar respuesta de algún otro elemento del sistema, son candidatas a ser delegadas a este proceso de espera y ejecución.

JavaScript es un lenguaje de ejecución sobre un solo hilo, esto significa que sólo puede ejecutar una tarea a la vez. Cuando una operación tarda demasiado o está esperando la respuesta de otra, decimos que bloquea las demás instrucciones, precisamente porque JavaScript no puede ejecutar dos a la vez.

Para solucionar esto, JavaScript introduce el event loop, o ciclo de eventos. El event loop se compone de dos componentes principales, una cola de mensajes y un ciclo que se encuentra iterando esta cola de mensajes. La programación asíncrona en JavaScript funciona empujando ciertas operaciones a esta cola de actividades, para que no bloqueen la ejecución de código mientras terminan, el trabajo del event loop es estar preguntando las operaciones de la cola de actividades si ya han finalizado, y cuando lo hacen, reanuda la ejecución de dicha operación, la recupera por así decirlo.

Para que todo esto funcione, necesitas una forma de delegar ciertas operaciones a esta cola, y una forma de saber cuándo estas operaciones han terminado, para hacerlo JavaScript introdujo inicialmente el concepto de callbacks, y después el de promesas, finalmente a la sintaxis se introdujeron las funciones asíncronas, todos estos conceptos están diseñados para que esta comunicación entre el event loop, la cola de actividades y tu código, suceda.
*/

//----------------------------CALLBACKS-------------------//
//un callback es una funcion que se pasa como argumento a una operacion asincrona con objetivo de que se ejecute una vez terminada la operacion.

//---------------------------- CALLBACKS-------------------//
//hecho con npm install request
let request=require("request"); //con esto importo con node


request("https://www.google.com", function(){ //ejecuta el request y despues que termina ejecuta la function
    console.log("termine la peticion")
})

console.log("Yo socedo despues") //lo imprime primero aunque este despues de la funcioin

//Por mas que la funcion asincrona tarde, el lenguaje va a seguir ejecutando normalmente

//----------------------------PROMESAS-------------------//
//hecho con npm install request-promise

let request=require("request-promise"); 


let promesa=request("https://www.google.com")

promesa.then(function(){console.log("Termine la peticion")})
promesa.catch(function(err){console.log(err)}) //catch me permite saber si paso algo en la operacion asincrona

console.log("Yo socedo despues") 


//ESTADOS DE LAS PROMESAS
/*
Fullfilled:completada con exito
Rejected:rechazada sin exito
Pending:Pendiente no ha terminado
Settled:Finalizada con exito o con error

*/


//----------------------------CALLBACKS DE LAS PROMESAS-------------------//
//Metodos que se ejecutaran al finalizazr la promesa

//THEN: completada con exito
//CATCH: error
//FINALLY: ejecuta codigo sin importar el exito o no
let request=require("request-promise"); 


let promesa=request("https://www.google.com")

promesa.then(function(){console.log("Termine la peticion")})
promesa.catch(function(err){console.log(err)})
promesa.finally(function(err){console.log(err)})


//HACER UN PUSH AL FINALIZAR!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!*******************