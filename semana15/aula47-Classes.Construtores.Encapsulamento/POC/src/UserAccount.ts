import { Transaction } from "./Transaction";
import { fileManager, accountsJson, checksIfCpfExists, name, cpf, value } from './index'
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

	addBalance(): void {
		if (name === undefined || cpf === undefined || value === undefined) {
			console.log('\x1b[31m', 'Passe os parâmetros necessários: nome, CPF e valor que deseja adicionar ao saldo')
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
					const today: moment.Moment = moment()
					const newTransaction: Transaction = {
						value: Number(value),
						description: "Depósito de dinheiro",
						date: today.format("DD/MM/YYYY")
					}
					accountSearched[0].transactions.push(newTransaction)
					accountSearched[0].balance += Number(value)

					fileManager.writeObjectToFile(accountsJson)
					const formatedBalance = accountSearched[0].balance.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
					console.log('Saldo atualizado:', formatedBalance)
				}
			}
		}
	}
}