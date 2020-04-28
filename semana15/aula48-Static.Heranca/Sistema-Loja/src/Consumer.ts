import { User } from './User'

export class Consumer extends User {
    cartNumber: number;
    totalPurchases: number

    constructor(id: string, email: string, name: string, password: string, cartNumber: number, totalPurchases: number){
        super(id, email, name, password)
        this.cartNumber = cartNumber
        this.totalPurchases = totalPurchases
    }



}