import { Employee } from  './Employee'

export class Seller extends Employee {
    private salesQuantity: number = 0;

    setSalesQuantity(quantity: number): void{
        this.salesQuantity += quantity
    }

    getSalesQuantity(): number{
        return this.salesQuantity
    }

    calculateTotalSalary(): number{
        const benefits = 400
        const salesCommission = 5
        return this.baseSalary + benefits + (salesCommission * this.salesQuantity)
    }

}