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

//-------------------EVENTO DE CLICK----------------------/

const button=document.querySelector(".btn-button")      //le asigno una constante al boton

button.addEventListener("click",function(){             //paso un event listener. Primero va que evento usar(click) y segundo va la funcion
    console.log("hola soy un evento de click")
})

//SI QUIERO USAR DOBLE CLICK USO "DBLCLICK"