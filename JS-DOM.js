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

//-------------------NODOS----------------------/



