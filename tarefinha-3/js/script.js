//1- capturar os elementos e guardar em variaveis 
        //input - ok
        //a palavra world - ok
        //botão - ok
//2- ligar o click do botao - ok 
//3- prevenir o comportamento padrão do navegador quando clico  - ok 
//4- trocar a palavra world pelo palavra digitada no input - ok
  


// let input = document.querySelector('input')

// let world = document.querySelector('h2')

// let button = document.querySelector('#botao')

// console.log(input, world, button)


// // function cliquei(){
// //     event.preventDefault()
// //     world.innerHTML = input.value
// // }

// button.addEventListener('click', function(){
//     event.preventDefault()
//     world.innerHTML = input.value
// })

let world = document.querySelector("h2")
console.log(world)

let button = document.querySelector("#botao")
console.log(button)

let input = document.querySelector("input")
console.log(input)



button.addEventListener('click', function(){
    event.preventDefault()
    alert(`O nome digitado foi ${input.value}`)
    
})