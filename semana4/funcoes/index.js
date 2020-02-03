// ------------------------- Exercícios de interpretação de código

// EXERCÍCIO 1

// a. []
// Como no i só tinha 0 e o j tinha que ser menor q o i, ficou vazia


// b. [0, 1, 0, 1, 2, 3]
// i deu 0, 2 e 4. Do 0, não veio nada. Do 2, veio 0 e 1. Do 4 veio 0, 1, 2 e 3.


// c. [0, 1, 0, 1, 2, 3, 0, 1, 2, 3, 4, 5]
// i deu 0, 2, 4 e 6. Do 0, não veio nada. Do 2, veio 0 e 1. Do 4 veio 0, 1, 2 e 3. Do 6 veio 0, 1, 2, 3, 4, 5


// EXERCÍCIO 2

// a. A primeira saída é 0, pois é a posição que o "Darvas" encontra-se na arrayDeNomes
// A segunda saída é 2, pois é a posição que "João" encontra-se na arrayDeNomes
// A terceira saída é undefined, pois "Paula" não existe na arrayDeNomes

// b. Funcionaria.
// Construi a array de numeros (let arrayDeNumero = [1, 2, 3]) e imprimi no console a posição de um deles (console.log(funcao(arrayDeNumero, 1))). Nesse caso a saída do console deu 0.


// EXERCÍCIO 3

// A função irá somar todos os números da array e colocar na variável 
// resultadoA, assim como multiplicar todos os números da array e 
// colocar na variável resultadoB. Por fim, pegará os resultados A e B
// e colocará na arrayFinal.

// Nome sugerido: somaMultiplica


// ------------------------- Exercícios de escrita de código

// EXERCÍCIO 4

// a.
// let transformaIdadeCachorroHumano = (idadeCachorro) => {
//     return idadeCachorro * 7
// }
// console.log(transformaIdadeCachorroHumano(4))

// b.
// let informarDados = (nome, idade, endereco, estudar) => {
//     if (estudar === true) {
//         estudar = "sou"
//     } else {
//         estudar = "não sou"
//     }  
//     return "Eu sou " + nome + ", tenho " + idade + " anos, moro em " +
//     endereco + " e " + estudar + " estudante."
// }
// console.log(informarDados("Goli", 23, "Rua Guarapari 190", true))


// EXERCÍCIO 5

// let informaSeculo = (ano) => {
//     if ((ano >= 1000) && (ano < 1101)) {
//         return "O ano " + ano + " pertence ao século XI"
//     } else if ((ano >= 1101) && (ano < 1201)) {
//         return "O ano " + ano + " pertence ao século XII"
//     } else if ((ano >= 1201) && (ano < 1301)) {
//         return "O ano " + ano + " pertence ao século XIII"
//     } else if ((ano >= 1301 ) && (ano < 1401)) {
//         return "O ano " + ano + " pertence ao século XIV"
//     } else if ((ano >= 1401 ) && (ano < 1501)) {
//         return "O ano " + ano + " pertence ao século XV"
//     } else if ((ano >= 1501 ) && (ano < 1601)) {
//         return "O ano " + ano + " pertence ao século XVI"
//     } else if ((ano >= 1601 ) && (ano < 1701)) {
//         return "O ano " + ano + " pertence ao século XVII"
//     } else if ((ano >= 1701 ) && (ano < 1801)) {
//         return "O ano " + ano + " pertence ao século XVIII"
//     } else if ((ano >= 1801 ) && (ano < 1901)) {
//         return "O ano " + ano + " pertence ao século XIX"
//     } else if ((ano >= 1901 ) && (ano < 2001)) {
//         return "O ano " + ano + " pertence ao século XX"
//     } else if ((ano >= 2001 ) && (ano < 2101)) {
//         return "O ano " + ano + " pertence ao século XXI"
//     } else {
//         return "Informe um ano entre 1000dc e 2020dc"
//     }
// }
// console.log(informaSeculo(1630))

// EXERCÍCIO 6
const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]

// a.
// let quantidadeElementos = (arrayDeNumeros) => {
//     return arrayDeNumeros.length
// }
// console.log(quantidadeElementos(array))

// b.
let verificaParidade = (numero) => {
    if (numero % 2 === 0) {
        return true
    } else {
        return false
    }
}
// console.log("É Par? " + verificaParidade(5))

// c.
// let quantidadeDePares = (arrayDeNumeros) => {
//     let novaArray = []
//     for (numero of arrayDeNumeros) {
//         if (numero % 2 === 0) {
//             novaArray.push(numero)
//         }
//     }
//     return novaArray.length
// }
// console.log(quantidadeDePares(array))

// d.
let quantidadeDePares = (arrayDeNumeros) => {
    let novaArray = []
    for (numero of arrayDeNumeros) {
        if (verificaParidade(numero) === true)
        novaArray.push(numero)
        }
    return novaArray.length
}

console.log(quantidadeDePares(array))