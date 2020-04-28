import { Employee } from  './Employee'

export class Seller extends Employee {
    private salesQuantity: number = 0;

    setSalesQuantity(quantity: number): void{
        this.salesQuantity += quantity
    }

    getSalesQuantity(): number{
        return this.salesQuantity
    }

}