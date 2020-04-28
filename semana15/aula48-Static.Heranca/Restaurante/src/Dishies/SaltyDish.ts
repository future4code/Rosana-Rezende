import {Dish} from "./Dish";

export class SaltyDish extends Dish {
    private spices: string[]; // não tem no exercício

    constructor(price: number, cost: number, ingredients: string[], time: number, spices: string[]){
        super(price, cost, ingredients, time);
        this.spices = spices;
    }


    // não tem no exercício

    setCost(cost: number): void{
        if(cost<200){
            console.log("Aqui é superfaturamento de prato, tenta de novo com mais dinheiro")
        }else{
            this.cost = cost;
        }
    }

    getCost(): number{
        return this.cost;
    }

}