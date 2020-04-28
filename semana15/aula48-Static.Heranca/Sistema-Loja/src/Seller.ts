import { User } from './User'

export class Seller extends User {
    totalSales: number;

    constructor(id: string, email: string, name: string, password: string, totalSales: number){
        super(id, email, name, password)
        this.totalSales = totalSales
    }



}