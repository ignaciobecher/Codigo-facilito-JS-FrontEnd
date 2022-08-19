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
fetch("https://jsonplaceholder.typicode.com/posts?userId=1",{
    method:"POST",
    body:JSON.stringify(postParams ),
    headers:{
        "Content-Type":"application/json"           //es buena practica el indicar que tipo de dato es al enviar data
    }            
}).then(r=>r.json()).then(data=>console.log(data))

//----------------------SUBIR ARCHIVOS---------------------//
//Como crear un servidor
// npm install -g node-static
//-p

//FORMA MEJOR PARA CREAR SERVIDOR
//-p 3030 -H "{"Cache-control":"no-cache,must-revalidate"}"


/*<body>
  <h1>Subir archivos</h1>
  <form action="http://localhost:8080/files" id="form" method="post" enctype='multipart/form-data'> //form con la direccion de mi servidor
    <input type="file" name="avatar" id="avatar">
    <input type="submit" value="Enviar">
  </form>

  <script>
    document.querySelector("#form").addEventListener("submit",(ev)=>{       //selecciono el formulario y agrego un evento submit
      ev.preventDefault();      //prevengo el comportamiento por default

      let formData = new FormData();        //objeto donde

      let file = document.querySelector("#avatar").files[0];        //obtengo el archivo a enviar, accediendo al lugar 0 ya que hay un solo archivo

      formData.append("avatar",file);

      fetch("http://localhost:8080/files",{
        method: "POST",             //metodo con el que voy a enviar la peticion
        body: formData              //parametros que quiera enviar al servidor
      }).then(
        r => r.text()               //cundo lo anterior se termine procesa la respuesta como texto
      ).then(data => alert(data)).catch(err => console.log(err));   //esa respuesta la envion con alert o capturo error

      return false;
    })
  </script>

</body>
</html>*/

//------------------------------------------------POLITICAS CORS-------------------------------------------------------//




/*!!!!!!!!!!!!!!!!!!!!!!!!!!!!HACER UN PUSH AL FINALIZAR !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!*/