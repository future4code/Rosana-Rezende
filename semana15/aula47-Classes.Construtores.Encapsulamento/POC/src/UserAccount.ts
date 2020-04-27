import { Transaction } from "./Transaction";
import { accountsJson, checksIfCpfExists, name, cpf } from './index'
import * as moment from 'moment'

export class UserAccount {
	name: string;
	cpf: string;
	age: number;
	balance: number;
	transactions: Transaction[]

	constructor(name: string, cpf: string, dateOfBith: string, balance: number = 0, transactions: Transaction[] = []) {
		this.name = name
		this.cpf = cpf
		const today: moment.Moment = moment()
		const informedDateOfBith: moment.Moment = moment(dateOfBith, "DD/MM/YYYY")
		this.age = today.diff(informedDateOfBith, "years")
		this.balance = balance
		this.transactions = transactions
	}

	getBalance(): number {
		if (name === undefined || cpf === undefined) {
			console.log('\x1b[31m', 'Passe os parâmetros necessários: nome e CPF')
		}
		else {
			if (!checksIfCpfExists()) {
				console.log('\x1b[31m', 'Informe um CPF válido')
			}
			else {
				const accountSearched = accountsJson.filter((account: UserAccount) => account.cpf === cpf)
				if (accountSearched[0].name !== name) {
					console.log('\x1b[31m', 'Informe nome de usuário correspondente ao CPF')
				}
				else {
					return accountSearched[0].balance
				}
			}
		}
	}

	// addBalance(): void {

	// }



}