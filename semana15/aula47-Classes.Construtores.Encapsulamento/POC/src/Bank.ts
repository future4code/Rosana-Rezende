import { UserAccount } from "./UserAccount";
import { accountsJson, fileManager, checksIfCpfExists, 
	name, cpf, cpfSearch, dateOfBith
} from './constants'

export class Bank {

	createAccount(): void {
		if (name === undefined || cpf === undefined || dateOfBith === undefined) {
			console.log('\x1b[31m', 'Passe os parâmetros necessários: nome, CPF e data de nascimento')
		}
		else {
			const newAccount = new UserAccount(name, cpf, dateOfBith)
			if (newAccount.getAge() < 18) {
				console.log("\x1b[31m", 'Menores de 18 anos não tem permissão para cria conta')
			}
			else {
				if (checksIfCpfExists()) {
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

	getAccountByCpf(): UserAccount {
		if(cpfSearch === undefined){
			console.log('\x1b[31m', 'Passe o parâmetro necessário: CPF')
		} else {
			const accountSearched = accountsJson.filter((account: UserAccount) => account.cpf === cpfSearch)
			return accountSearched[0]
		}
	}

	// saveAccounts(): void {

	// }


}