let pratos = [];
function cadastrarProduto(nome, custo, valorDeVenda, ingredientes) {
    let novoPrato = {
        nome: nome,
        custo: custo,
        valorDeVenda: valorDeVenda,
        ingredientes: ingredientes
    };
    let copiaPrato = [...pratos, novoPrato];
    pratos = copiaPrato;
    return pratos;
}
cadastrarProduto('salada tropical', 5, 15, ['alface', 'tomate']);
cadastrarProduto('macarronada', 7, 25, ['macarrão', 'molho de tomate']);
console.log('Pratos:', pratos);
let produtoAchado = {};
function buscarValorDoProduto(nome) {
    produtoAchado = pratos.filter(produto => produto.nome === nome);
    return produtoAchado;
}
buscarValorDoProduto('macarronada');
console.log('Produto pesquisado:', produtoAchado);
let pratosVendidos = [];
function venderPrato(nome) {
    let pratoVendido = pratos.find(produto => produto.nome === nome);
    pratosVendidos.push(pratoVendido);
    return pratosVendidos;
}
venderPrato('salada tropical');
console.log('Pratos vendidos:', pratosVendidos);
let lucro;
function calculaLucro(listaDeProdutosVendido) {
    lucro = listaDeProdutosVendido.reduce((prevVal, numero) => prevVal + (numero.valorDeVenda - numero.custo), 0);
    return lucro;
}
calculaLucro(pratosVendidos);
console.log('Lucro:', lucro);
//# sourceMappingURL=exercicio6.js.map