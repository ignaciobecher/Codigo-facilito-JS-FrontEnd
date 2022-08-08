function* counter(){
    for(var i=i; i<=5; i++){      //mismo procedimiento que el iterador pero simplificado
       yield i                    //yield es como un return
    }
 }
 
 let generator=counter()


function* retornador(){
    yield* counter()        //esto me va a imprimir los 5 numeros de counter y despues me va a devolver "regrese"
    console.log("Regrese")
 }
 
 let g=retornador()

 console.log(g.next())
 console.log(g.next())
 console.log(g.next())
 console.log(g.next())
 console.log(g.next())
 console.log(g.next())
 console.log(g.next())