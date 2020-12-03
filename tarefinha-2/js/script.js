//1- capturar todos os meus gatinhos e guardar numa variavel - ok
//2- percorrer essa lista de gatinhos - ok
//3- ligar o click - ok
  //3.1 - criar uma condicional que torna o gatinho visivel ou invisivel - ok
  
//querySelectorAll
//coleção array like para percorrer forEach


const meusGatos = document.querySelectorAll('.item__imagem')
console.log(meusGatos)

meusGatos.forEach(function(gato){
    gato.addEventListener('click', function(){
        if(gato.classList.contains('invisivel')){
            gato.classList.remove('invisivel')
        }else{
            gato.classList.add('invisivel')
        }
    })

})




// meusGatos.forEach(function(gato){
//     gato.addEventListener('click', function(evento){
//         if(gato.classList.contains("invisivel")){
//             gato.classList.remove("invisivel")
//         }else{
//             gato.classList.add("invisivel")
//         }
//     } )
// })