export class Dish {
    protected price: number;
    protected cost: number;
    protected ingredients: string[];
    protected time: number;

    constructor(price: number, cost: number, ingredients: string[], time: number) {
        this.price = price;
        this.cost = cost;
        this.ingredients = ingredients;
        this.time = time;
    }

    getProfit(): number {
        return this.price - this.cost;
    }




    // no exercício não tinha

    getPrice(): number {
        return this.price;
    }

    setPrice(price: number): void{
        this.price = price
    }

    setCost(cost: number): void {
        if (cost < 100) {
            console.error("Isso é troco, tenta algo mais caro!")
        } else {
            this.cost = cost;
        }
    }
}
