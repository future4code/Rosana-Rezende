// import { Place } from './abstracts/Place'
import { Residence } from './classes/Residence'
import { Commerce } from './classes/Commerce'
import { Industry } from './classes/Industry'
import { Client } from './interfaces/Client'
import { ResidentialClient } from './classes/ResidentialClient'
import { CommercialClient } from './classes/CommercialClient'
import { IndustrialClient } from './classes/IndustrialClient'
import { ClientManager } from './classes/ClientManager'



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

const newResidentialClient = new ResidentialClient(3, "29902090", "Beltrano", 1, 150, "12345678910")
// console.log(`${newResidentialClient.constructor.name}
// CEP: ${newResidentialClient.getCep()}
// Quantidade de moradores: ${newResidentialClient.getResidentsQuantity()}
// Nome: ${newResidentialClient.name}
// Número de cadastro: ${newResidentialClient.registrationNumber}
// CPF: ${newResidentialClient.getCpf()}
// Energia consumida: ${newResidentialClient.consumedEnergy}
// Valor da conta: ${newResidentialClient.calculateBill()}
// `)

// // a. Que métodos e propriedades essa classe possui? Por quê?
// // Propriedades: name, registrationNumber, consumedEnergy, cpf, 
// // Métodos: calculateBill, getCep e getResidentsQuantity



// // ---------------------------------- EXERCÍCIO 5 ----------------------------------

const newCommercialClient = new CommercialClient(2, "29902010", "Lojão do Povo", 2, 500, "01987654321")
// console.log(`${newCommercialClient.constructor.name}
// CEP: ${newCommercialClient.getCep()}
// Quantidade de andares: ${newCommercialClient.getFloorsQuantity()}
// Nome: ${newCommercialClient.name}
// CNPJ: ${newCommercialClient.getCnpj()}
// Número de cadastro: ${newCommercialClient.registrationNumber}
// Energia consumida: ${newCommercialClient.consumedEnergy}
// Valor da conta: ${newCommercialClient.calculateBill()}
// `)

// // a. *Quais as semelhanças dessa classe com a `ResidentialClient`?*
// // Tem os mesmos métodos e propriedades herdados de Place (cep e getCep) e Client (name, registrationNumber, consumedEnergy e calculateBill)

// // b. *Quais as diferenças dessa classe com a `ResidentialClient`?*
// // A diferença está no que herdam de sua classe pai, pois CommertialClient herdou de Commerce floorsQuantity e getFloorsQuantity, e criou cnpj e getCnpj, além de ter ter implementado calculateBill com uma regra de negócio específica



// // ---------------------------------- EXERCÍCIO 6 ----------------------------------

const newIndustrialClient = new IndustrialClient(10, "29902020", "Fábrica de Peças", 3, 2000, 1)
// console.log(`${newIndustrialClient.constructor.name}
// CEP: ${newIndustrialClient.getCep()}
// Quantidade de máquinas: ${newIndustrialClient.getMachinesQuantity()}
// Nome: ${newIndustrialClient.name}
// Número de registro industrial: ${newIndustrialClient.getIndustrialRegistrationNumber()}
// Número de cadastro: ${newIndustrialClient.registrationNumber}
// Energia consumida: ${newIndustrialClient.consumedEnergy}
// Valor da conta: ${newIndustrialClient.calculateBill()}
// `)

// // a. *De* qual classe a `IndustrialClient` deve ser filha? Por quê?*
// // Deve ser filha de Industry, porque é um tipo industrial

// // b. *Que interface a `IndustrialClient` implementa? Por quê?*
// // Implementa a interface Client, porque precisamos acessar as propriedades e métodos a respeito dos clientes, não sendo necessário refazer tudo

// // c. *Nós pedimos para criar somente os getters dessa classe. Pense num motivo para isso: por que só os getters?*
// // Porque sua única propriedade privada, o número de registro industrial, não deve ser modificado



// // ---------------------------------- EXERCÍCIO 7 ----------------------------------

const clientManager = new ClientManager()
// console.log(`Quantidade de clientes: ${clientManager.getClientsQuantity()}`)



// // ---------------------------------- EXERCÍCIO 8 ----------------------------------

clientManager.registerClient(newResidentialClient)
clientManager.registerClient(newCommercialClient)
clientManager.registerClient(newIndustrialClient)
// console.log(clientManager)

// console.log(`Valor gasto pelo cliente 1: ${clientManager.calculateBillOfClient(1)}`)

// console.log(`Valor total que a concessionária irá receber: ${clientManager.calculateTotalIncome()}`)

// clientManager.deleteUser(1)
// console.log(clientManager)



// // ---------------------------------- DESAFIO 1 ----------------------------------

// clientManager.printClients()



// // ---------------------------------- DESAFIO 2 ----------------------------------

const newResidentialClient2 = new ResidentialClient(10, "123", "Rosana", 4, 150, "aaa")
// console.log(newResidentialClient2)