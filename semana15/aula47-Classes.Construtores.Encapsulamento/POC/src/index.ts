import { Bank } from './Bank'

const operation: string = process.argv[4]
const bankHere = new Bank()

if (operation === 'getAllAccounts') {
    console.log(bankHere.getAllAccounts())
}

else if(operation === 'createAccount') {
    bankHere.createAccount()
}