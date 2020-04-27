import { UserAccount } from "./UserAccount";
import { JSONFileManager } from "./JSONFileManager";

const bankFile = require('path').resolve(__dirname, '../bank.json')
const fileManager: JSONFileManager = new JSONFileManager(bankFile)
const accountsJson = fileManager.getObjectFromFIle() as UserAccount[]

const name: string = process.argv[5]
const cpf: string = process.argv[6]
const dateOfBith: string = process.argv[7]

// const valor: any = process.argv[7]

// const descricao: string = process.argv[8]
// let dataDePagamento: any = process.argv[9]

// const nomeDoDestinatario: string = process.argv[8]
// const CPFDoDestinatario: string = process.argv[9]

export class Bank {

	checksIfCpfExists(): boolean {
		const result = accountsJson.filter((account: UserAccount) =>
			account.cpf === cpf
		)
		if (result.length > 0) {
			return true
		} else {
			return false
		}
	}

	createAccount(): void {

		if (name === undefined || cpf === undefined || dateOfBith === undefined) {
			console.log('\x1b[31m', 'Passe os parâmetros necessários: nome, CPF e data de nascimento')
		}
		else {
			const newAccount = new UserAccount(name, cpf, dateOfBith)
			if (newAccount.age < 18) {
				console.log("\x1b[31m", 'Menores de 18 anos não tem permissão para cria conta')
			}
			else {
				if (this.checksIfCpfExists()) {
					console.log("\x1b[31m", 'CPF já cadastrado')
				}
				else {
					try {
						accountsJson.push(newAccount)
						fileManager.writeObjectToFile(accountsJson)
						console.log("\x1b[32m", 'Conta criada com sucesso')
					} catch (err) {
						console.error(err)
					}
				}
			}
		}
	}


	getAllAccounts(): UserAccount[] {
		return fileManager.getObjectFromFIle() as UserAccount[]
	}


	// getAccountByCpf(): UserAccount {

	// }


	// saveAccounts(): void {

	// }


}