//---------------------------------------JAVASCRIPT Y EL DOM-------------------------------------------//

//-----------------------OBJETO WINDOW------------------/

window.alert("hola mundo")


//-------------------FORMAS DE EJECUTAR JS EN HTML----------------------/
//Forma 1
/*<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script type="text/javascript">
        let saludo="Hola mundo"                     //COLOCANDO EL SCRIPT EN EL HTML
        console.log(saludo)
    </script>
</body>
</html>*/

//Forma 2
/*<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script type="text/javascript" src="/app.js"></script>
</body>
</html>*/

//---------------------------------------JAVASCRIPT Y EL DOM-------------------------------------------//

//-------------------OBTENER ELEMENTOS POR ID----------------------/

//Primero declaro una constante

/*<h2 id="title">Hola mundo</h2>*/

const title=document.getElementById("title")//busco el elemento con su id

title.innerHTML="cursos"        //con esto cambio el texto

//-------------------OBTENER ELEMENTOS POR CLASE----------------------/

/*<li class="li-lista"></li>*/

const items=document.getElementsByClassName("li-lista")

//-------------------OBTENER ELEMENTOS POR ETIQUETA----------------------/

/*<li class="li-lista"></li>*/

const itemsLi=document.getElementsByTagName("li")

//-------------------OBTENER ELEMENTOS POR CSS----------------------/
/*<li class="li-lista" id="li-lista1"></li>*/
const element1=document.querySelector("#li-lista 1")     //eligiendo por id
const element2=document.querySelector(".li-lista")     //eligiendo por clase
const element3=document.querySelector("li")     //eligiendo por etiqueta


//-------------------ELEMENTOS HIJOS----------------------/

/*<ul class="Lista-mayor">
        <li class="lista-menor"></li>
        <li class="lista-menor"></li>
        <li class="lista-menor"></li>
        <li class="lista-menor"></li>
        <li class="lista-menor"></li>
    </ul>*/

const ulList=document.querySelector("ul")

ulList.children[2]//accedo al numero 2
ulList.firstElementChild
ulList.lastElementChild

//-------------------ELEMENTOS HERMANOS----------------------/

//Elemento padre
element1.parentElement

//Elemento hermano anterior y siguiente
element1.nextElementSibling
element1.previousElementSibling


//---------------------------------------MODIFICAR EL DOM-------------------------------------------//

//-------------------CREAR ELEMENTOS----------------------/

const row=document.querySelector(".row") //elemento vacio a donde va a ir la data

function create_card_by_innerHTML(title,description){
    let html= ` <div class="col-sm-6 col-md-4">
    <div class="thumbnail">
        <div class="caption">
            <h3 class="tittle_card">${title}</h3>
            <p class="description_card">${description}</p>
            <p><a href="" class="btn btn-danger"></a></p>
        </div>
    </div>
  </div>`
  row.innerHTML +=html
}


//-------------------AGREGAR ELEMENTOS----------------------/

function create_card(title,description){
    let div=document.createElement("div")           //create element crearia un div
    div.className="col-sm-6 col-md-4"               //hago referencia al div col-sm-6 col-md-4

    let thumbnail=document.createElement("div")
    thumbnail.className="thumbnail"

    let caption=document.createElement("div")
    caption.className="thumbnail"

    let h3=document.createElement("h3")
    h3.textContent=title                            //como no tienen id y dentro de este va texto, uso textContent  

    let p1=document.createElement("p")
    p1.textContent=description                      //como no tienen id y dentro de este va texto, uso textContent  
    
    let p2=document.createElement("p")
   
    let a=document.createElement("a")
    a.className="btn btn-danger"
    
    //Agregar los elementos a los elemtnos padres
    p2.appendChild(a)
    caption.appendChild(h3)
    caption.appendChild(p1)
    caption.appendChild(p2)
    
    thumbnail.appendChild(caption)
    div.appendChild(thumbnail)

    row.appendChild(div)

}


//---------------------------------------EVENTOS -------------------------------------------//

//-------------------EVENTO CLICK----------------------/

const button=document.querySelector(".btn-button")      //le asigno una constante al boton

button.addEventListener("click",function(){             //paso un event listener. Primero va que evento usar(click) y segundo va la funcion
    console.log("hola soy un evento de click")
})

//SI QUIERO USAR DOBLE CLICK USO "DBLCLICK"

//-------------------EVENTO TARGET----------------------/

const boton=document.getElementById("btn-button")      //le asigno una constante al boton

button.addEventListener("click",function(){             //paso un event listener. Primero va que evento usar(click) y segundo va la funcion
    if(title.style.display!="none"){
        title.style.display="none"
        description.style.display="none"
        e.target.textContent="Mostrar"              //la e se usa como un parametro comun para los eventos, la e es lo mismo que decir button o lo que sea que estemos usando, apunta al elemento que modificamos.Usando e.target accedemos al elemento manipulable
    }else{
        title.style.display="block"
        description.style.display="block"
        e.target.textContent="Ocultar"
    }
})


//-------------------EVENTOS DEL MOUSE----------------------/
//Mouse enter
button.addEventListener("mouseenter",function(){
    this.className="btn btn-danger" //accedo a una clase que me pone el boton en rojo
})

//Mouse out
button.addEventListener("mouseout",function(e){
    e.target.className("btn btn-primary")  //vuelvo a la clase principal
})

//-------------------SET TIME OUT----------------------/

setTimeout(function(){      //Declaro una funcion setTimeout
    console.log("Hola setTime")     //pongo lo que quiero que realice
},3000)                               //pongo el tiempo a esperar

//-------------------EVENTOS DEL TECLADO----------------------/

const input=document.getElementById("input")

input.addEventListener("keydown",function(e){
    console.log("Tecla presionada")
})

//-------------------EVENTO SUBMIT----------------------/

/*<form id="course-form">
    <div class="form-group">
    <input type="text" class="form-control" id="title-form" placeholder="Titulo">
    </div>
</form>*/

const form=document.getElementById("course-form")   //agarro el form, el evento submit siempre va aplicado al formulario, nunca al input

form.addEventListener("submit",function(e){
    e.preventDefault()                      //prevengo la recarga por default
    let title=document.getElementById("title-form").value;      //vault guarda el valor que ingrese en el input
    console.log(title)
})

//-------------------DOCUMENT LOADED----------------------/

document.addEventListener("DOMContentLoaded",function(){
    console.log("El DOM ya fue construido")
})

//Se usa para saber cuando el dom y el html ya fueron construidos

//-------------------EVENT BUBBLING----------------------/

//Los eventos se propagan a sus padres

//-------------------DETENER PROPAGACION----------------------/
 element1.addEventListener("click",function(e){
    e.stopPropagation()
 })





