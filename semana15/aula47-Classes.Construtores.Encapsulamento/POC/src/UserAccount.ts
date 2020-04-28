import { Transaction } from "./Transaction";
import { fileManager, accountsJson, checksIfCpfExists, 
	name, cpf, value, description, paymentDate
} from './constants'
import * as moment from 'moment'

export class UserAccount {
	private name: string;
	cpf: string;
	private age: number;
	private balance: number;
	private transactions: Transaction[]

	constructor(name: string, cpf: string, dateOfBith: string, balance: number = 0, transactions: Transaction[] = []) {
		this.name = name
		this.cpf = cpf
		const today: moment.Moment = moment()
		const informedDateOfBith: moment.Moment = moment(dateOfBith, "DD/MM/YYYY")
		this.age = today.diff(informedDateOfBith, "years")
		this.balance = balance
		this.transactions = transactions
	}

	getAge(){
		return this.age
	}

	// getCpf(){
	// 	return this.cpf
	// }

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

	payBill(): void{

		if (name === undefined || cpf === undefined || value === undefined || description === undefined) {
			console.log('\x1b[31m', 'Passe os parâmetros necessários: nome, CPF, valor a pagar e descrição')
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
					const payMentInformed: moment.Moment = moment(paymentDate, "DD/MM/YYYY")
					const today: moment.Moment = moment()
					const diference = today.diff(payMentInformed, "days")
					if(diference > 0){
						console.log('\x1b[31m', 'Não é possível realizar pagamentos com datas anteriores ao dia vigente')
					}
					else {
						if(Number(value) > accountSearched[0].balance){
							console.log('\x1b[31m', 'Não há saldo suficiente para realizar essa operação')
						}
						else {
							let datePayment
							if(paymentDate === undefined){
								datePayment = today.format("DD/MM/YYYY")
							} else {
								datePayment = paymentDate
							}

							const newPayment: Transaction = {
								value: Number(value),
								description: description,
								date: datePayment
							}

							accountSearched[0].transactions.push(newPayment)
							fileManager.writeObjectToFile(accountsJson)
							console.log("\x1b[32m", 'Pagamento realizado com sucesso:', '\x1b[0m', newPayment)
						}
					}
				}
			}
		}
	}




}