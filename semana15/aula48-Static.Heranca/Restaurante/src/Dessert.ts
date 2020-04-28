import { Dish } from "./Dish";

export class Dessert extends Dish{
    private pieces: number;

    constructor(price: number, 
        cost: number, ingredients: string[],
        time: number, pieces: number){
        super(price, cost, ingredients, time);
        this.pieces = pieces;
        this.cost = cost;
    }

    getPiecePrice(): number {
        return this.price/this.pieces;
    }

    getProfit(): number {
       const totalProfit = super.getProfit();
        return totalProfit/this.pieces;
    }


}