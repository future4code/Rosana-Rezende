import { SaltyDish } from "./SaltyDish";
import { Dessert } from "./Dessert";

const mySaltyDish: SaltyDish = new SaltyDish(30, 10, 
    ["Dois hamburgueres", "alface", "queijo"],
 10, ["mostarda", "ketchup", "molho especial"]);

 const myDessert: Dessert = new Dessert(20, 10, 
    ["Açúcar", "Chocolate", "vacilo"], 10, 4);

const mySaltyDishProfit: number =  mySaltyDish.getProfit();
const myDessertPiecePrice: number = myDessert.getPiecePrice();

mySaltyDish.setCost(120);
console.log("O prato custa "+mySaltyDish.getCost());
console.log(`Meu prato salgado tem lucro de ${mySaltyDishProfit}`)
console.log(`Minha sobremesa custa ${myDessertPiecePrice} por pedaço`);
console.log(`Minha sobremesa tem lucro de ${myDessert.getProfit()} por pedaço`);
