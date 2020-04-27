import { Bank } from './Bank'
import { UserAccount } from './UserAccount'
import { JSONFileManager } from './JSONFileManager'

const bankFile = require('path').resolve(__dirname, '../bank.json')
export const fileManager: JSONFileManager = new JSONFileManager(bankFile)
export const accountsJson = fileManager.getObjectFromFIle() as UserAccount[]

const operation: string = process.argv[4]
export const name: string = process.argv[5]
export const cpfSearch: string = process.argv[5]
export const cpf: string = process.argv[6]
export const dateOfBith: string = process.argv[7]
export const value: string = process.argv[7]
// export const paymentDate: any = process.argv[8]
// export const description: string = process.argv[9]

const bank = new Bank()
const userAccount = new UserAccount(name, cpf, dateOfBith)

export function checksIfCpfExists(): boolean {
    const result = accountsJson.filter((account: UserAccount) =>
        account.cpf === cpf
    )
    if (result.length > 0) {
        return true
    } else {
        return false
    }
}

if (operation === 'getAllAccounts') {
    console.log(bank.getAllAccounts())
}

else if(operation === 'createAccount') {
    bank.createAccount()
}

else if(operation === 'getBalance') {
    const formatedBalance = userAccount.getBalance().toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
    console.log('Saldo:', formatedBalance)
}

else if(operation === 'addBalance') {
    userAccount.addBalance()
}

else if(operation === 'getAccountByCpf') {
    console.log(bank.getAccountByCpf())
}

else if(operation === 'xxx') {

}

else if(operation === 'xxx') {

}

else if(operation === 'xxx') {

}
