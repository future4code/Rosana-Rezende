import { Residence } from './classes/Residence'
import { Commerce } from './classes/Commerce'
import { Industry } from './classes/Industry'
import { Client } from './interfaces/Client'
import { Place } from './abstracts/Place'

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

// // a. *Mesmo sabendo que não é possível, tente criar uma instância dessa classe (ou seja: `new Place(...)`). Qual foi o erro que o Typescript gerou?*
// //  O erro gerado foi: error TS2511: Cannot create an instance of an abstract class.
// const newPlace = new Place()
// console.log(newPlace)


// // b. *Pense e responda: o que precisaríamos fazer para conseguir efetivamente criar uma instância dessa classe?*
// // É preciso criar uma classe (ex: Commerce) que extenda Place, e depois instanciar essa clacesse

