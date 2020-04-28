import { UserAccount } from './UserAccount'
import { JSONFileManager } from './JSONFileManager'

const bankFile = require('path').resolve(__dirname, '../bank.json')
export const fileManager: JSONFileManager = new JSONFileManager(bankFile)
export const accountsJson = fileManager.getObjectFromFIle() as UserAccount[]

export const operation: string = process.argv[4]
export const name: string = process.argv[5]
export const cpfSearch: string = process.argv[5]
export const cpf: string = process.argv[6]
export const dateOfBith: string = process.argv[7]
export const value: string = process.argv[7]
export const description: string = process.argv[8]
export const paymentDate: any = process.argv[9]
// export const recipientName: string = process.argv[8]
// export const recipientCpf: string = process.argv[9]


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