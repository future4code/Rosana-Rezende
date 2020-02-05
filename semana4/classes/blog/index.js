class Post {
    constructor(titulo, autor, imagem, conteudo, hashtags) {
        this.titulo = titulo
        this.autor = autor
        this.imagem = imagem
        this.conteudo = conteudo
        this.hashtags = hashtags
    }
}

let arrayDePosts = []

const criarPost = () => {
    let novoTitulo = document.getElementById("novo-titulo").value
    let novoAutor = document.getElementById("novo-autor").value
    let novoImagem = document.getElementById("novo-imagem").value
    let novoConteudo = document.getElementById("novo-conteudo").value
    let novoHashtags = document.getElementById("novo-hashtags").value
    let publicacao = new Post(novoTitulo, novoAutor, novoImagem, novoConteudo, novoHashtags)
    arrayDePosts.push(publicacao)
    
    //TESTE
    // console.log(publicacao)

    // LIMPAR
    document.getElementById("novo-titulo").value = ""
    document.getElementById("novo-autor").value = ""
    document.getElementById("novo-imagem").value = ""
    document.getElementById("novo-conteudo").value = ""
    document.getElementById("novo-hashtags").value = ""
    console.log(arrayDePosts)

    // // TESTES
    // console.log(arrayDePosts[0].titulo)

    colocarPostNaPagina(novoTitulo, novoAutor, novoImagem, novoConteudo, novoHashtags)

}

function colocarPostNaPagina(novoTitulo, novoAutor, novoImagem, novoConteudo, novoHashtags) {
    document.getElementById("main-container").innerHTML += 
        "<article><h3>" + novoTitulo + 
        "</h3><h6>" + novoAutor + 
        "</h6><img src=\'" + novoImagem + 
        "\'><p>" + novoConteudo + 
        "</p><p>" + novoHashtags + "</p></article>"
}
