import { User } from './User'
import { Consumer } from './Consumer'
import { Employee } from './Employee'
import { Seller } from './Seller'

// RESPOSTAS DOS EXERCÍCIOS DA TARDE

// // ------------------------------ EXERCÍCIO 1 ------------------------------

const newUser = new User("oioioi", "email@email.com", "Oiee", "ioioio")
// console.log("Id:", newUser.getId())
// console.log("Nome:", newUser.getName())
// console.log("Email:", newUser.getEmail())

// // a. *Seria possível imprimir a senha (`password`) atrelada a essa instância?*
// Não, pois trata-se de um atributo privado, que não tem um getter relacionado

// // b. Quantas vezes a mensagem "Chamando o construtor da classe User" foi impressa no terminal?
// Apenas 1 vez, antes dos 3 consoles acima



// // ------------------------------ EXERCÍCIO 2 ------------------------------

const newConsumer = new Consumer("oieoie", "oie@email.com", "Oie", "eioeio", "010101")

// // a. Quantas vezes a mensagem "Chamando o construtor da classe Customer" foi impressa no terminal? 
// Uma vez

// // b. Quantas vezes a mensagem "Chamando o construtor da classe User" foi impressa no terminal? Por quê?
// Duas vezes. A primeira quando eu instanciei o newUser e a segunda quando instancie o newConsumer. Acredito que esse segundo chamado aconteceça justamente por Consumer ser um filho de User, logo quando o filho é chamado o pai também é



// // ------------------------------ EXERCÍCIO 3 ------------------------------

// console.log(`
// Id: ${newConsumer.getId()}
// Nome: ${newConsumer.getName()}
// Email: ${newConsumer.getEmail()}
// Valor total da compra: ${newConsumer.purchaseTotal}
// Cartão de crédito: ${newConsumer.getCreditCard()}
// `)

// // a. Seria possível imprimir a senha (password) atrelada a essa instância? Por quê?
// Não é possível, pois ele não consegue acessar propriedades privadas da classe pai



// // ------------------------------ EXERCÍCIO 4 e 5 ------------------------------

// newConsumer.introduceYourself()



// // ------------------------------ EXERCÍCIO 6 ------------------------------

const newEmployee = new Employee("olaola", "ola@email.com", "Olá", "aloalo", 1200, "10/01/2019")

// // a. Quantas vezes a mensagem "Chamando o construtor da classe User" foi impressa no terminal?
// Três vezes

// // b. Imprima as informações dessa instância no terminal. Quais dados são possíveis de serem impressos?
// console.log(`
// Id: ${newEmployee.getId()}
// Nome: ${newEmployee.getName()}
// Email: ${newEmployee.getEmail()}
// Data de admissão: ${newEmployee.getAdmissionDate()}
// Salário base: ${newEmployee.getBaseSalary()}
// `)
// newEmployee.introduceYourself()



// // ------------------------------ EXERCÍCIO 7 ------------------------------

// console.log(`Salário, com benefícios: ${newEmployee.calculateTotalSalary()}`)



// // ------------------------------ EXERCÍCIO 8 ------------------------------

const newSeller = new Seller("aiaiai", "ai@email.com", "Aiai", "iaiaia", 1000, "01/01/2018")

// // a. Crie uma instância da classe Seller. Você vai reparar que essa classe já possui um construtor, pois quando não colocamos um construtor na classe filha, ela herda o construtor da classe Pai. Quais parâmetros você teve que passar para esse construtor?
// // Nesse caso os atributos são os mesmos que o do pai, e por isso nem foi necessário ter um constructor até o momento

// // b. Imprima todas as informações da instância que você criou individualmente (ou seja, cada uma em uma linha própria). O que você conseguiu imprimir? O que não conseguiu? Por quê? 
// // Não dá pra imprimir o método privado do avô User, password, mas os protected do pai podem, assim como ps public de todos
// console.log(`
// Id: ${newSeller.getId()}
// Nome: ${newSeller.getName()}
// Email: ${newSeller.getEmail()}
// Data de admissão: ${newSeller.getAdmissionDate()}
// Salário base: ${newSeller.getBaseSalary()}
// Salário, com benefícios: ${newSeller.calculateTotalSalary()}
// `)
// newSeller.introduceYourself()



// // ------------------------------ EXERCÍCIO 9 ------------------------------

// // a. Agora, teste o método setter, atualizando esse valor para o que você quiser. É possível, imprimir no terminal, o valor salesQuantity da instância que você criou? Por quê?
// newSeller.setSalesQuantity(5)
// console.log(`Quantidade de vendas: ${newSeller.getSalesQuantity()}`)



// // ------------------------------ EXERCÍCIO 10 e 11 ------------------------------

const newSeller2 = new Seller("eieiei", "ei@email.com", "Eiei", "ieieie", 800, "01/01/2019")
newSeller2.setSalesQuantity(3)
console.log(`Salário, com benefícios e comissões: ${newSeller2.calculateTotalSalary()}`)

// // a. Crie um novo vendedor. Atribua a ele um valor para a salesQuantity. Convoque a função calculateTotalSalary e  imprima no terminal o valor. O que foi impresso no terminal? Por quê?
// // Imprimiu o valor do salário, com benefícios e comissões
