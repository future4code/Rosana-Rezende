// --------------------- EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO
/*

1)
A função conversorDeMoeda recebe o parâmetro valoeEmDolar.
Essa função pede ao usuário que informe o valor da cotação do dólar, que será convertido para número.
Em seguida, retorna uma string concatenando o cifrão de real com o valor em dolar (parâmetro recebido pela função) multiplicado pela coração informada pelo usuário.

Para que essa função seja chamada há um callback.
A variável meuDinheiro recebeu a função conversorDeMoeda com o parâmetro number 100.

Por fim, impreme-se o valor da variável meuDinheiro no console.
O valor impresso será: R$ com 100 multiplicado pela cotação que o usuário informar
    ex: se cotacao = 10, imprime-se R$1000


2)
A função investeDinheiro recebe 2 parâmetro: tipoDeInvestimento e valor.
Dentro da função, declara-se a variável valorAposInvestimento.
Em seguida usa-se a condicional switch case para determinar o que o parâmetro 
tipoDeInvestimento irá retornar, por exemplo: se o tipoDeInvestimento for "Poupança", 
irá retornar valorAposInvestimento = valor passado como parâmetro multiplicado por 1.03.
E caso o tipoDeInvestimento não seja encontrado um alert informará ao usuário que o 
investimento informado está incorreto.
Ao final, a função retornará o valorAposInvestimento.

Para que essa função seja chamada há um callback.
A variável novoMontante recebeu a função investeDinheiro com os parâmetros: 
a string "Ações" e o number 150.
A variável segundoMontante recebeu a função investeDinheiro com os parâmetros: 
a string "Tesouro Direto" e o number 200.

Imprime-se a variável novoMontante no console. 
Resultado: aparece 165 no console

Imprime-se a variável segundoMontante no console. Resultado:
abre-se um alert com a mensagem "TIPO DE INVESTIMENTO INFORMADO INCORRETO!"
aparece undefined no console


3) 
Declara-se três variáveis de arrays: 
- numeros, com array de números dentro
- array1 e array2 vazias.

Em seguida usa-se o laço for... of... na array numeros para analisar se seus números são pares ou ímpares.
Se par, insere na array1, se ímpar, insere na aaray2.

Em seguida imprime-se no console:
- a quantidade de números na array numeros concatenando com uma string: Quantidade total de números 14
- a quantidade de números na array array1: 6
- a quantidade de números na array array2: 8


4)
Declara-se 3 variáveis: 
- numeros, uma array com diversos números dentro, inclusive negativo e float
- numero1, coma propriedade Infinity (acredito que sejam números infinitos)
- numero2 igual a 0

Em seguida usa-se o laço for... of... na array numeros para analisar se cada número nela é maior ou menor que o numero1 e numero2.
Se o numero na array for menor que numero1, o numero1 será substituído pelo numero.
E se o numero na array for maior que o numero2, o numero2 será substituído pelo numero.

Em seguida imprime-se no console:
- como o numero1 é infinito, ele é maior que todos os numeros positivos dentro da array.
Contudo, em relação ao negativos ele será menor, logo será substituído pelo negativo. 
Resultado: -10

- como o numero2 é 0, os numeros positivos dentro da array são maiores que ele e o substituirão 
sequencialmente.
Resultado: 1590

*/

// --------------------- EXERCÍCIOS DE LÓGICA DE PROGRAMAÇÃO

/* 1)
É possível iterar uma lista/array por meio de loops (index ou operador of)
 ou por meio de funções (forEach, map e filter)
*/

// const lista1 = [1, 2, 3, 4, 5]
// let lista2 = []

// for (let numero of lista1) {
//     let novoNumero = numero * 2
//     lista2.push(novoNumero)
// }

// console.log(lista2) // [2, 4, 6, 8, 10]


/* 2)
a) false
b) false
c) true
d) true
e) true
*/

/* 3)
O código não funciona.
A quantidadeDeNumerosPares deveria ser um parâmetro dentro de uma função.
Além disso, devemos substituir o while, que geraria um loop infinito, por um for.

*/

// const qualquerFuncao = (quantidadeDeNumerosPares) => {
//     for(let i = 0; i < quantidadeDeNumerosPares; i++) {
//         console.log(i*2)
//     }
// }
// qualquerFuncao(5)


// 4)
// const descobreQualTriangulo = (a, b, c) => {
//     if ((a === b) && (a === c) && (b === c)) {
//         return "É equilátero"
//     } else if ( ((a === b) && (a !== c)) || ((a === c) && (a !== b)) || ((b === c) && (b !== a))) {
//         return "É isósceles"
//     } else if ((a !== b) && (a !== c) && (b !== c)) {
//         return "É escaleno"
//     }
// }
// console.log(descobreQualTriangulo(3, 2, 1))


//5)
// const tudoSobreDoisNumeros = (n1, n2) => {
//     if (n1 > n2) {
//         console.log(`O maior é ${n1}`)
//     } else if (n2 > n1){
//         console.log(`O maior é ${n2}`)
//     }

//     if (n1 % n2 === 0) {
//         console.log(`${n1} é divisível por ${n2}`)
//     } else {
//         console.log(`${n1} náo é divisível por ${n2}`)
//     }

//     if (n2 % n1 === 0) {
//         console.log(`${n2} é divisível por ${n1}`)
//     } else {
//         console.log(`${n2} náo é divisível por ${n1}`)
//     }

//     if (n1 > n2) {
//         console.log(`A diferença entre eles é ${n1 - n2}`)
//     } else if (n2 > n1){
//         console.log(`A diferença entre eles é ${n2 - n1}`)
//     }
// }
// tudoSobreDoisNumeros(15,30)


// --------------------- EXERCÍCIOS DE FUNÇÕES

//1)
// const imprimeSegundoMaiorEMenor = (array) => {
//     function comparaNumeros(n1, n2) {
//         return n1 - n2
//     }
//     novaArray = array.sort(comparaNumeros)
//     console.log("O segundo menor é " + novaArray[1])
//     console.log("O segundo maior é " + novaArray[novaArray.length - 2])
// }
// imprimeSegundoMaiorEMenor([8, 5, 9, 7, 10, 20, 90])

// 2)
// const olaFuture = () => {
//     alert("Hello Future4")
// }
// olaFuture()



// --------------------- EXERCÍCIOS DE OBJETOS

/* 1)
Arrays são variáveis que podem guardar e acessar mais de uma informação 
ao mesmo tempo, como uma espécie de lista, por exemplo: 
const array = [1, 2, 3, "a", "b", "c"]

Objetos, por sua vez, permitem que representemos dados mais complexos. São como
uma estante com muitas gavetas, nas quais podemos colocar propriedades diferentes,
cada qual contendo uma chave e um valor.
const sobreMim = {
    nome: "Rosana",
    idade: 32,
}

Estruturas mais simples, portanto, podem ser representadas por arrays
e as mais complexas por objetos.

*/

// 2)
// const criaRetangulo = (lado1, lado2) => {
//     let perimetroValor = 2 * (lado1 + lado2)
//     let areaValor = lado1 * lado2
//     let retangulo = {
//         largura: lado1,
//         altura: lado2,
//         perimetro: perimetroValor,
//         area: areaValor
//     }
//     return retangulo
// }
// console.log(criaRetangulo(10,20))

//3)
// const meuFilmeFavorito = {
//     titulo: "O som do coração",
//     ano: 2008,
//     diretor: "Kirsten Sheridan",
//     elenco: ["Freddie Highmore", "Keri Russell", "Jonathan Rhys-Meyers"]
// }
// alert(`Venha assistir ao filme ${meuFilmeFavorito.titulo}, de ${meuFilmeFavorito.ano}, dirigido por ${meuFilmeFavorito.diretor} e estrelado por ${meuFilmeFavorito.elenco[0]}, ${meuFilmeFavorito.elenco[1]} e ${meuFilmeFavorito.elenco[2]} `)


// 4)
// const rosana = {
//     nome: "Rosana",
//     idade: 32,
//     email: "rezende_rosana@hotmail.com",
//     endereco: "Avenida Governador Dias Lopes, 10"
// }
// const anonimizarPessoa = (pessoa) => {
//     const pessoaAnonima = {
//         ...pessoa,
//         nome: "ANÔNIMO"
//     }
//     return pessoaAnonima
// }
// console.log(rosana)
// console.log(anonimizarPessoa(rosana))



// --------------------- EXERCÍCIOS DE FUNÇÕES DE ARRAY

