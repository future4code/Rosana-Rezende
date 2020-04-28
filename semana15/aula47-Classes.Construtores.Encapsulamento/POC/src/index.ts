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
export const description: string = process.argv[8]
export const paymentDate: any = process.argv[9]
// export const recipientName: string = process.argv[8]
// export const recipientCpf: string = process.argv[9]

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

enum Operation {
    GET_ALL_ACCOUNTS = 'getAllAccounts',
    CREATE_ACCOUNT = 'createAccount',
    GET_ACCOUNT_BY_CPF = 'getAccountByCpf',

    GET_BALANCE = 'getBalance',
    ADD_BALANCE = 'addBalance',

    //não fiz - não deu tempo
    PAY_BIL = 'payBill',
    UPDATE_BALANCE = 'updateBalance',
    PERFORM_TRANSFER = 'performTransfer'
}

switch(operation){

    case Operation.CREATE_ACCOUNT: {
        bank.createAccount()
        break
    }

    case Operation.GET_ALL_ACCOUNTS: {
        console.log(bank.getAllAccounts())
        break
    }    

    case Operation.GET_ACCOUNT_BY_CPF: {
        console.log(bank.getAccountByCpf())
        break
    }

    case Operation.GET_BALANCE: {
        const formatedBalance = userAccount.getBalance().toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
        console.log('Saldo:', formatedBalance)
        break
    }

    case Operation.ADD_BALANCE: {
        userAccount.addBalance()
        break
    }

    case Operation.PAY_BIL: {
        userAccount.payBill()
        break
    }
    

    default:
        console.error('\x1b[31m', 'Faça uma operação válida')

}
