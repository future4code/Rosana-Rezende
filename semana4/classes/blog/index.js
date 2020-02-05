class Post {
    constructor(titulo, autor, conteudo, hashtags) {
        this.titulo = titulo
        this.autor = autor
        this.conteudo = conteudo
        this.hashtags = hashtags
    }
}

const criarPost = () => {
    let novoTitulo = document.getElementById("novo-titulo").value
    let novoAutor = document.getElementById("novo-autor").value
    let novoConteudo = document.getElementById("novo-conteudo").value
    let novoHashtags = document.getElementById("novo-hashtags").value
    let publicacao = new Post(novoTitulo, novoAutor, novoConteudo, novoHashtags)
    
    // // TESTES
    console.log(publicacao)

}