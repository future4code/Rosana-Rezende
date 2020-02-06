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
    
    if ((novoTitulo === "") || (novoAutor === "") 
    || (novoConteudo === "") || (novoHashtags === "")) {
        alert("Preencha todos os campos obrigatórios [Título / Autor / Conteúdo / HashTags]")
    } else {
        // CONSOLE
        let publicacao = new Post(novoTitulo, novoAutor, novoImagem, novoConteudo, novoHashtags)
        arrayDePosts.push(publicacao)

        // POSTAGEM
        colocarPostNaPagina(novoTitulo, novoAutor, novoImagem, novoConteudo, novoHashtags)
    
        // LIMPAR
        document.getElementById("novo-titulo").value = ""
        document.getElementById("novo-autor").value = ""
        document.getElementById("novo-imagem").value = ""
        document.getElementById("novo-conteudo").value = ""
        document.getElementById("novo-hashtags").value = ""
        console.log(arrayDePosts)            
    }    
}

function colocarPostNaPagina(novoTitulo, novoAutor, novoImagem, novoConteudo, novoHashtags) {
    document.getElementById("main-container").innerHTML += 
        "<article><h3>" + novoTitulo + 
        "</h3><p>Escrito por: <b><i>" + novoAutor + 
        "</i></b></p><img src=\'" + novoImagem + 
        "\'><p>" + novoConteudo + 
        "</p><p>" + novoHashtags + "</p></article>"
}
