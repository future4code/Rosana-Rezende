import { Transaction } from "./Transaction";
import * as moment from 'moment'

export class UserAccount {
    name: string;
    cpf: string;
    age: number;
    balance: number;
    transactions: Transaction[]

    constructor(name: string, cpf: string, dateOfBith: string, balance: number = 0, transactions: Transaction[] = [] ){
        this.name = name
        this.cpf = cpf
        const today: moment.Moment = moment()
        const informedDateOfBith: moment.Moment = moment(dateOfBith, "DD/MM/YYYY")
        this.age = today.diff(informedDateOfBith, "years")
        this.balance = balance
        this.transactions = transactions
    }

    // getBalance(): number {


    // }

    
    // addBalance(): void {

    // }



}