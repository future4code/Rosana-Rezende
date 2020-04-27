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
    addBalance() {
        if (index_1.name === undefined || index_1.cpf === undefined || index_1.value === undefined) {
            console.log('\x1b[31m', 'Passe os parâmetros necessários: nome, CPF e valor que deseja adicionar ao saldo');
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
                    const today = moment();
                    const newTransaction = {
                        value: Number(index_1.value),
                        description: "Depósito de dinheiro",
                        date: today.format("DD/MM/YYYY")
                    };
                    accountSearched[0].transactions.push(newTransaction);
                    accountSearched[0].balance += Number(index_1.value);
                    index_1.fileManager.writeObjectToFile(index_1.accountsJson);
                    const formatedBalance = accountSearched[0].balance.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
                    console.log('Saldo atualizado:', formatedBalance);
                }
            }
        }
    }
}
exports.UserAccount = UserAccount;
//# sourceMappingURL=UserAccount.js.map