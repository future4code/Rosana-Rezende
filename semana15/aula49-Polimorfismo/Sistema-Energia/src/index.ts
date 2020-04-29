// import { Place } from './abstracts/Place'
import { Residence } from './classes/Residence'
import { Commerce } from './classes/Commerce'
import { Industry } from './classes/Industry'
import { Client } from './interfaces/Client'
import { ResidentialClient } from './classes/ResidentialClient'

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



// // ---------------------------------- EXERCÍCIO 3 ----------------------------------

const newResidence = new Residence(10, "29902060")
// console.log(`${newResidence.constructor.name}
// CEP: ${newResidence.getCep()}
// Quantidade de moradores: ${newResidence.getResidentsQuantity()}
// `)

const newCommerce = new Commerce(2, "29902070")
// console.log(`${newCommerce.constructor.name}
// CEP: ${newCommerce.getCep()}
// Quantidade de andares: ${newCommerce.getFloorsQuantity()}
// `)

const newIndustry = new Industry(5, "29902080")
// console.log(`${newIndustry.constructor.name}
// CEP: ${newIndustry.getCep()}
// Quantidade de máquinas: ${newIndustry.getMachinesQuantity()}
// `)



// // ---------------------------------- EXERCÍCIO 4 ----------------------------------

const newResidentialClient = new ResidentialClient(3, "29902090", "Beltrano", 2, 150, "12345678910")
// console.log(`${newResidentialClient.constructor.name}
// CEP: ${newResidentialClient.getCep()}
// Quantidade de moradores: ${newResidentialClient.getResidentsQuantity()}
// Nome: ${newResidentialClient.name}
// Número de cadastro: ${newResidentialClient.registrationNumber}
// Energia consumida: ${newResidentialClient.consumedEnergy}
// Valor da conta: ${newResidentialClient.calculateBill()}
// `)

// // a. Que métodos e propriedades essa classe possui? Por quê?
// // Propriedades: name, registrationNumber, consumedEnergy, cpf, 
// // Métodos: calculateBill, getCep e getResidentsQuantity
