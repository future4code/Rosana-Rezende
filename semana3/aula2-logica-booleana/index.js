// Exercícios de interpretação de código

// 1
// a.  false
// b.  false
// c.  true
// d.  false
// e.  boolean

// 2
/* a. Array são variáveis que guardam mais de uma informação ao mesmo
 tempo, e se declara por meio de [], por exemplo let array = [1, 2, 3] */
// b. 0
// c. .length
// d. 
// I.  undefined
// II.  null
// III.  11
// IV.  3  e  4
// V.  19  e  9
// VI.  3
// VII.  1


// Exercícios de escrita de código

// 1
console.log("--- QUESTÃO 1 ---")

// a. 
let grausFahrenheit = 77
let grausKelvin = (grausFahrenheit - 32) * 5/9 + 273.15
console.log("a. 77°F = ", grausKelvin)

// b. 
let grausCelsius = 80
grausFahrenheit = grausCelsius * 9/5 + 32
console.log("b. 80°C = ", grausFahrenheit)

// c. 
grausCelsius = 30
console.log("c. 30°C = ", grausFahrenheit)
console.log("30°C = ", grausKelvin)

// d. 
grausCelsius = prompt("Insira um valor para temperatura em Celsius:")
console.log("d. 30°C = ", grausFahrenheit)
console.log("30°C = ", grausKelvin)

// 2
console.log("--- QUESTÃO 2 ---")

questao1 = prompt("Qual seu nome?")
console.log(" 1. Qual seu nome?\n", "Resposta:" , questao1)

questao2 = prompt("Em qual cidade você mora?")
console.log(" 2. Em qual cidade você mora?\n", "Resposta:", questao1, " mora em ", questao2)

questao3 = prompt("Na sua cidade faz mais: frio ou calor?")
console.log(" 3. Na sua cidade faz mais: frio ou calor?\n", "Resposta: Morar em ", questao2, "não é mole não, faz muito ", questao3)

questao4 = prompt("E com quem você mora? (podem ser pets ;)")
console.log(" 4. E com quem você mora?\n", "Resposta: Mas ", questao1, "mora com ", questao4)

questao5 = prompt("E o que você mais sente por ele(s): amor ou carinho?")
console.log(" 5. E o que você mais sente por eles: amor ou carinho?\n", "Resposta: Então vale a pena morar em ", questao2, ", porque ", questao1, " da pra ", questao4, " muito " , questao5)

// 3
console.log("--- QUESTÃO 3 ---")

const salarioMinimo2020 = 1039
const kWh = 0.05

// a
const kWhValor = kWh * salarioMinimo2020
console.log("a. O valor de cada quilowatt-hora é: R$", kWhValor)

// b
consumoResidencia = 280 * kWhValor
console.log("b. O valor a ser pago por uma residência que consuma 280 quilowatt-hora é: R$", consumoResidencia)

// c
let desconto = 0.15
valorFinal = consumoResidencia - (consumoResidencia * desconto)
console.log("c. Com desconto de 15%, o valor a ser pago pela mesma residência é de: R$", valorFinal)
