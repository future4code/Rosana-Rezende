import { operation, name, cpf, dateOfBith} from './constants'
import { Bank } from './Bank'
import { UserAccount } from './UserAccount'

const bank = new Bank()
const userAccount = new UserAccount(name, cpf, dateOfBith)

enum Operation {
    GET_ALL_ACCOUNTS = 'getAllAccounts',
    CREATE_ACCOUNT = 'createAccount',
    GET_ACCOUNT_BY_CPF = 'getAccountByCpf',

    GET_BALANCE = 'getBalance',
    ADD_BALANCE = 'addBalance',
    PAY_BIL = 'payBill',
    
    //não fiz - não deu tempo
    UPDATE_BALANCE = 'updateBalance',
    PERFORM_TRANSFER = 'performTransfer'
}

switch(operation){

    case Operation.CREATE_ACCOUNT: {
        bank.createAccount()
        break
    }

    case Operation.GET_ALL_ACCOUNTS: {
        console.log(bank.getAllAccounts()) // encontrei um erro - transactions está vindo como objetc object
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
