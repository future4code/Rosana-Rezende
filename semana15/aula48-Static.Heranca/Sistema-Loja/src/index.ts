import { User } from './User'
import { Consumer } from './Consumer'

// RESPOSTAS DOS EXERCÍCIOS DA TARDE

// ------------------------------ EXERCÍCIO 1 ------------------------------

const newUser = new User("oioioi", "email@email.com", "Oiee", "ioioio")
// console.log("Id:", newUser.getId())
// console.log("Nome:", newUser.getName())
// console.log("Email:", newUser.getEmail())

// a. *Seria possível imprimir a senha (`password`) atrelada a essa instância?*
// Não, pois trata-se de um atributo privado, que não tem um getter relacionado

// b. Quantas vezes a mensagem "Chamando o construtor da classe User" foi impressa no terminal?
// Apenas 1 vez, antes dos 3 consoles acima



// ------------------------------ EXERCÍCIO 2 ------------------------------

const newConsumer = new Consumer("oieoie", "oie@email.com", "Oie", "eioeio", "010101")

// a. Quantas vezes a mensagem "Chamando o construtor da classe Customer" foi impressa no terminal? 
// Uma vez

// b. Quantas vezes a mensagem "Chamando o construtor da classe User" foi impressa no terminal? Por quê?
// Duas vezes. A primeira quando eu instanciei o newUser e a segunda quando instancie o newConsumer. Acredito que esse segundo chamado aconteceça justamente por Consumer ser um filho de User, logo quando o filho é chamado o pai também é



// ------------------------------ EXERCÍCIO 3 ------------------------------

console.log(`
Id: ${newConsumer.getId()}
Nome: ${newConsumer.getName()}
Email: ${newConsumer.getEmail()}
Valor total da compra: ${newConsumer.purchaseTotal}
Cartão de crédito: ${newConsumer.getCreditCard()}
`)

// a. Seria possível imprimir a senha (password) atrelada a essa instância? Por quê?
// Não é possível, pois ele não consegue acessar propriedades privadas da classe pai



// ------------------------------ EXERCÍCIO 4 ------------------------------


// ------------------------------ EXERCÍCIO 5 ------------------------------


// ------------------------------ EXERCÍCIO 6 ------------------------------

