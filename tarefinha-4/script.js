let botao = document.getElementById("botao")
let body = document.querySelector("body")
let container = document.getElementById("container")


botao.addEventListener("click", function(){
    event.preventDefault()
    
    //cria titulo

    let titulo = document.createElement("h1")

    //insere conteudo no titulo

    titulo.textContent = "Moonlight"

    //coloca o titulo na div

    container.appendChild(titulo)

    //cria paragrafo

    let paragrafo = document.createElement("p")

    //insere conteudo no paragrafo

    paragrafo.textContent = "Black trilha uma jornada de autoconhecimento enquanto tenta escapar do caminho fácil da criminalidade e do mundo das drogas de Miami. Encontrando amor em locais surpreendentes, ele sonha com um futuro maravilhoso."

    //coloca o paragrafo na div

    container.appendChild(paragrafo)

    //cria uma imagem

    let img = document.createElement("img")

    //faz aparecer na tela com setAttribute

    img.setAttribute("src", "https://upload.wikimedia.org/wikipedia/pt/f/f3/Moonlight_%28filme%29.png")

    //coloca a imagem na div

    container.appendChild(img)

    //muda a cor de fundo do background
    body.style.backgroundColor = "purple"

})



