class Post {
    constructor(titulo, autor, conteudo, hashtags) {
        this.titulo = titulo
        this.autor = autor
        this.conteudo = conteudo
        this.hashtags = hashtags
    }
}

let arrayDePosts = []

const criarPost = () => {
    let novoTitulo = document.getElementById("novo-titulo").value
    let novoAutor = document.getElementById("novo-autor").value
    let novoConteudo = document.getElementById("novo-conteudo").value
    let novoHashtags = document.getElementById("novo-hashtags").value
    let publicacao = new Post(novoTitulo, novoAutor, novoConteudo, novoHashtags)
    arrayDePosts.push(publicacao)
    
    //TESTE
    // console.log(publicacao)

    // LIMPAR
    document.getElementById("novo-titulo").value = ""
    document.getElementById("novo-autor").value = ""
    document.getElementById("novo-conteudo").value = ""
    document.getElementById("novo-hashtags").value = ""
    console.log(arrayDePosts)

    // // TESTES
    // console.log(arrayDePosts[0].titulo)

    colocarPostNaPagina(novoTitulo, novoAutor, novoConteudo, novoHashtags)

}

// function colocarPostNaPagina(titulo, autor, conteudo, hashtags) {
//     document.getElementById("main-container").innerHTML += "<h4>" + 
//     hashtags + "</h4><h2>" + titulo + "</h2><p>" + conteudo + 
//     "</p><h4>" + autor + "</h4>"
// }

function colocarPostNaPagina(novoTitulo, novoAutor, novoConteudo, novoHashtags) {
    document.getElementById("main-container").innerHTML += 
        "<article><h3>" + novoTitulo + 
        "</h3><h6>" + novoAutor + 
        "</h6><p>" + novoConteudo + 
        "</p><p>" + novoHashtags + "</p></article>"
}
