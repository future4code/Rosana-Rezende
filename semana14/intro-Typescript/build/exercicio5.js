const produto1 = {
    nome: 'Camiseta verde',
    preco: 10,
    classificacao: 'verão'
};
const produto2 = {
    nome: 'Jaqueta de couro',
    preco: 10,
    classificacao: 'inverno'
};
const produto3 = {
    nome: 'Sunga de praia azul',
    preco: 10,
    classificacao: 'banho'
};
const produto4 = {
    nome: 'Cueca box branca',
    preco: 10,
    classificacao: 'íntimas'
};
const produtos = [produto1, produto2, produto3, produto4];
function descricaoCompleta(arrayDeProdutos) {
    const produtosComDescricao = arrayDeProdutos.map(produto => {
        if (produto.classificacao === 'verão') {
            produto.precoComDesconto = produto.preco * 0.95;
        }
        else if (produto.classificacao === 'inverno') {
            produto.precoComDesconto = produto.preco * 0.9;
        }
        else if (produto.classificacao === 'banho') {
            produto.precoComDesconto = produto.preco * 0.96;
        }
        else if (produto.classificacao === 'íntimas') {
            produto.precoComDesconto = produto.preco * 0.93;
        }
        return produto;
    });
    return produtosComDescricao;
}
const produtosCompletos = descricaoCompleta(produtos);
console.log(produtosCompletos);
//# sourceMappingURL=exercicio5.js.map