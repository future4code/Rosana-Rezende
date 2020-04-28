import { User } from './User'

export class Employee extends User {

    salaryAmount: number;

    constructor(id: string, email: string, name: string, password: string, salaryAmount: number){
        super(id, email, name, password)
        this.salaryAmount = salaryAmount
    }



}