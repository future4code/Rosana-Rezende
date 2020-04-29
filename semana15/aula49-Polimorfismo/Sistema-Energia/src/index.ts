import { Residence } from './classes/Residence'
import { Commerce } from './classes/Commerce'
import { Industry } from './classes/Industry'
import { Client } from './interfaces/Client'

const newResidence = new Residence(10, "29902060")
// console.log(newResidence)

const newCommerce = new Commerce(2, "29902070")
// console.log(newCommerce)

const newIndustry = new Industry(5, "29902080")
// console.log(newIndustry)


// // ---------------------------------- EXERCÍCIO 1 ----------------------------------

const clientFulano: Client = {
    name: "Fulano",
    registrationNumber: 1,
    consumedEnergy: 100,
    calculateBill: () => {
        return 2
    }
}
// console.log(`Nome: ${clientFulano.name}
// Número de cadastro: ${clientFulano.registrationNumber}
// Energia consumida: ${clientFulano.consumedEnergy}
// Valor da conta: ${clientFulano.calculateBill()}
// `)

// // a. Quais propriedades você conseguiu imprimir? Teve alguma que não foi possível? Por que isso aconteceu?
// // Consegui imprimir todas as propriedades



// // ---------------------------------- EXERCÍCIO 2 ----------------------------------

