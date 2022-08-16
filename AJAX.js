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
