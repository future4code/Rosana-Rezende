type post = {
    autor: string,
    texto: string
}

const post1: post = {
    autor: 'A',
    texto: 'aa'
}

const post2: post = {
    autor: 'B',
    texto: 'bb'
}

const post3: post = {
    autor: 'A',
    texto: 'cc'
}

const post4: post = {
    autor: 'C',
    texto: 'dd'
}

const post5: post = {
    autor: 'A',
    texto: 'ee'
}

const posts: post[] = [post1, post2, post3, post4, post5]

function filtraPostsPorAutor(arrayDePosts: post[], autor: string): post[] {
    const postsFiltrados = posts.filter(post => post.autor === autor)
    return postsFiltrados
}

const resultado = filtraPostsPorAutor(posts, 'A')
console.log(resultado)