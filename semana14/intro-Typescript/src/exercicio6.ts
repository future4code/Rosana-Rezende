type prato = {
    nome: string,
    custo: number,
    valorDeVenda: number,
    ingredientes: string[]
}

type venda = {
    nomeDoPrato: string,
    nomeDoCliente: string
}

let pratos: prato[] = []

function cadastrarProduto(nome: string, custo: number, valorDeVenda: number, ingredientes: string[]): object[] {
    let novoPrato: prato = { 
        nome: nome,
        custo: custo,
        valorDeVenda: valorDeVenda,
        ingredientes: ingredientes
    }
    let copiaPrato = [...pratos, novoPrato]
    pratos = copiaPrato
    return pratos
}

cadastrarProduto('salada tropical', 5, 15, ['alface', 'tomate'])
cadastrarProduto('macarronada', 7, 25, ['macarrão', 'molho de tomate'])
console.log('Pratos:', pratos)

let produtoAchado: object = {}

function buscarValorDoProduto(nome: string): object {
    produtoAchado = pratos.filter(produto => produto.nome === nome)
    return produtoAchado
}

buscarValorDoProduto('macarronada')
console.log('Produto pesquisado:', produtoAchado)

let pratosVendidos: prato[] = []

function venderPrato(nome: string): object[]{
    let pratoVendido = pratos.find(produto => produto.nome === nome)
    pratosVendidos.push(pratoVendido)
    return pratosVendidos
}

venderPrato('salada tropical')
console.log('Pratos vendidos:', pratosVendidos)

let lucro: number

function calculaLucro(listaDeProdutosVendido: prato[]): number {
    lucro = listaDeProdutosVendido.reduce((prevVal, numero) => 
        prevVal + (numero.valorDeVenda - numero.custo), 0
    )
    return lucro
}

calculaLucro(pratosVendidos)
console.log('Lucro:', lucro)