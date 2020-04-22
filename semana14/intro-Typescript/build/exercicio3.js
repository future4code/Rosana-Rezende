const post1 = {
    autor: 'A',
    texto: 'aa'
};
const post2 = {
    autor: 'B',
    texto: 'bb'
};
const post3 = {
    autor: 'A',
    texto: 'cc'
};
const post4 = {
    autor: 'C',
    texto: 'dd'
};
const post5 = {
    autor: 'A',
    texto: 'ee'
};
const posts = [post1, post2, post3, post4, post5];
function filtraPostsPorAutor(arrayDePosts, autor) {
    const postsFiltrados = posts.filter(post => post.autor === autor);
    return postsFiltrados;
}
const resultado = filtraPostsPorAutor(posts, 'A');
console.log(resultado);
//# sourceMappingURL=exercicio3.js.map