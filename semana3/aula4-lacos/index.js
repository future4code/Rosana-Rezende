// --------------- Exercícios de interpretação de código

// EXERCÍCIO 1 
// O programa realiza a soma dos números, de 0 a 14. O resultado impresso no console é 105


// EXERCÍCIO 2

// a) Acrescenta um item (que é divisível por 5) a novaLista

// b) [10, 15, 25, 30]

// c) Se numero = 3, o valor impresso no console seria: [12, 15, 18, 21, 27, 30]
// Se numero = 4, o valor impresso no console seria: [12]


// DESAFIO 1 

// O valor impresso no console seria:
// 0
// 00
// 000
// 0000


// --------------- Exercícios de escrita de código

// EXERCÍCIO 3
// const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

// a) 
// let maior = 0
// let menor = 200
// for (let numero of array) {
//     if (numero > maior) {
//         maior = numero
//     }
//     if (numero < menor) {
//         menor = numero
//     }
// }
// console.log("O maior número é " + maior + " e o menor número é " + menor)


// b) 
// novaArray = []
// for (let numero of array) {
//     numero /= 10
//     novaArray.push(numero)
// }
// console.log(novaArray)


// c) 
// novaArray = []
// for (let numero of array) { 
//     if (numero % 2 !== 0) {
//         novaArray.push(numero)
//     }    
// }
// console.log(novaArray)

// d) 
// let resultado = []
// for (numero of array) {
//     i = array.indexOf(numero)
//     resultado.push("\nO elemento do índex " + i + " é " + numero)
// }
// console.log(resultado)


// DESAFIO 2

// const numero = Number(prompt("Digite um número para seu colega adivinhar:"))
// let chute = Number(prompt("Chute um número:"))
// let qtdChutes = 0

// console.log("Vamos jogar!\n")

// while (chute !== numero) {
//     while (chute > numero) {
//         console.log("O número chutado foi: " + chute + "\nErrrrrrrrou, é menor")
//         chute = Number(prompt("Chute um número:"))
//         qtdChutes++
//     }     
//     while (chute < numero) {
//         console.log("O número chutado foi: " + chute + "\nErrrrrrrrou, é maior")
//         chute = Number(prompt("Chute um número:"))
//         qtdChutes++
//     } 
// }

// console.log("O número chutado foi: " + chute + "\nAcertou!!\n O número de tentativas foi: " + (qtdChutes++ + 1))


// DESAFIO 3

// Achei fácil fazer a alteração, foi só mudar o prompt por uma geração aleatória de números

// const numero = Math.floor(Math.random() * 101)
// let chute = Number(prompt("Chute um número:"))
// let qtdChutes = 0

// console.log("Vamos jogar!\n")

// while (chute !== numero) {
//     while (chute > numero) {
//         console.log("O número chutado foi: " + chute + "\nErrrrrrrrou, é menor")
//         chute = Number(prompt("Chute um número:"))
//         qtdChutes++
//     }     
//     while (chute < numero) {
//         console.log("O número chutado foi: " + chute + "\nErrrrrrrrou, é maior")
//         chute = Number(prompt("Chute um número:"))
//         qtdChutes++
//     } 
// }

// console.log("O número chutado foi: " + chute + "\nAcertou!!\n O número de tentativas foi: " + (qtdChutes++ + 1))


