"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
const moment = require("moment");
class UserAccount {
    constructor(name, cpf, dateOfBith, balance = 0, transactions = []) {
        this.name = name;
        this.cpf = cpf;
        const today = moment();
        const informedDateOfBith = moment(dateOfBith, "DD/MM/YYYY");
        this.age = today.diff(informedDateOfBith, "years");
        this.balance = balance;
        this.transactions = transactions;
    }
    getBalance() {
        if (index_1.name === undefined || index_1.cpf === undefined) {
            console.log('\x1b[31m', 'Passe os parâmetros necessários: nome e CPF');
        }
        else {
            if (!index_1.checksIfCpfExists()) {
                console.log('\x1b[31m', 'Informe um CPF válido');
            }
            else {
                const accountSearched = index_1.accountsJson.filter((account) => account.cpf === index_1.cpf);
                if (accountSearched[0].name !== index_1.name) {
                    console.log('\x1b[31m', 'Informe nome de usuário correspondente ao CPF');
                }
                else {
                    return accountSearched[0].balance;
                }
            }
        }
    }
}
exports.UserAccount = UserAccount;
//# sourceMappingURL=UserAccount.js.map