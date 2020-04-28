import { SaltyDish } from "./Dishies/SaltyDish";
import { Dessert } from "./Dishies/Dessert";
import { Dish } from './Dishies/Dish'

// import { Employee } from './Employees/Employee'
import { Cashier } from './Employees/Cashier'
import { Chef } from './Employees/Chef'

const mySaltyDish: SaltyDish = new SaltyDish(30, 10, ["Dois hamburgueres", "alface", "queijo"], 10, ["mostarda", "ketchup", "molho especial"]);
// const mySaltyDishProfit: number =  mySaltyDish.getProfit();
// mySaltyDish.setCost(120);
// console.log("O prato custa "+mySaltyDish.getCost());
// console.log(`Meu prato salgado tem lucro de ${mySaltyDishProfit}`)

const feijoada = new SaltyDish(50, 20, ["carne", "feijão"], 120, ["vinagrete"]);
// console.log(feijoada.getProfit());

const myDessert: Dessert = new Dessert(20, 10, ["Açúcar", "Chocolate", "vacilo"], 10, 4);
// const myDessertPiecePrice: number = myDessert.getPiecePrice();
// console.log(`Minha sobremesa custa ${myDessertPiecePrice} por pedaço`);
// console.log(`Minha sobremesa tem lucro de ${myDessert.getProfit()} por pedaço`);

const brigadeiro = new Dessert(15, 5, ["leite condensado", "nescau"], 60, 10);
// console.log(brigadeiro.getPiecePrice());
// console.log(brigadeiro.getProfit());

const dishies: Dish[] = []
dishies.push(mySaltyDish)
dishies.push(myDessert)
dishies.push(brigadeiro)
dishies.push(feijoada)

const caixaFulano = new Cashier("Fulano", 1500)
// caixaFulano.sayJob()
// console.log("O valor da conta é:", caixaFulano.calculateBill(dishies))

const chefBeltrano = new Chef("Beltrano", 2000)
chefBeltrano.removeDishFromMenu(dishies, brigadeiro)
console.log(chefBeltrano.removeDishFromMenu(dishies, brigadeiro))