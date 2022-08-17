//----------------------CONSULTA AJAX---------------------//

fetch('https://jsonplaceholder.typicode.com/posts').then(
    function(response){
        response.json().then(
            function(data){
                console.log(data)
            }
        )
    }
)

//Misma funcion pero resumida
/*fetch("https://jsonplaceholder.typicode.com/posts")
.then(
    (response)=>response.json()
).then(
    (data)=>console.log(data)
)*/

//------------------------------------------------FUNDAMENTOS----------------------------------------------------------//


//----------------------MANEJO DE RESULTADOS Y ERRORES---------------------//
fetch("https://jsonplaceholder.typicode.com/posts")
.then(response=>{
        if(response.status >= 200 && response.status <300){

        }
    return response.json()  //Este json mal tipeado seria reconocido como error en el catch
}).then(
    (data)=>console.log(data)
).catch(
    err=>console.log(err)
)

//----------------------PARAMETROS QUERY---------------------//

fetch("https://jsonplaceholder.typicode.com/posts?userId=1")        //nombre del parametro y valor del parametro
                                                                    //userId            =       1

//Forma recomendada por JSON PLACEHOLDER para solicitar un dato

let url=new URL("https://jsonplaceholder.typicode.com/posts?userId=1");

Object.keys(parametros).forEach(paramKey=>{             //esto esta definido en la pagina de JSON
    url.searchParams.append(
        paramKey,
        parametros[paramKey]
    )
})

//----------------------PARAMETROS EN EL CUERPO---------------------//

let postParams={        //Esto es proporcionado por JSON PLACEHOLDER
    tittle:"foo",
    body:"bar",
    userId:1
}

fetch("https://jsonplaceholder.typicode.com/posts?userId=1",{
    method:"POST",
    body:JSON.stringify(postParams )            
}).then(r=>r.json()).then(data=>console.log(data))

//Para cambiar el metodo de una peticion HTTP debemos agregar un segundo metodo a fetch despues de la url


//----------------------ENVIAR JSON---------------------//




/*!!!!!!!!!!!!!!!!!!!!!!!!!!!!HACER UN PUSH AL FINALIZAR !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!*/