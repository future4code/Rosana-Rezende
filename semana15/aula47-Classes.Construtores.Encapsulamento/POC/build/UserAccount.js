"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("./constants");
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
    getAge() {
        return this.age;
    }
    getBalance() {
        if (constants_1.name === undefined || constants_1.cpf === undefined) {
            console.log('\x1b[31m', 'Passe os parâmetros necessários: nome e CPF');
        }
        else {
            if (!constants_1.checksIfCpfExists()) {
                console.log('\x1b[31m', 'Informe um CPF válido');
            }
            else {
                const accountSearched = constants_1.accountsJson.filter((account) => account.cpf === constants_1.cpf);
                if (accountSearched[0].name !== constants_1.name) {
                    console.log('\x1b[31m', 'Informe nome de usuário correspondente ao CPF');
                }
                else {
                    return accountSearched[0].balance;
                }
            }
        }
    }
    addBalance() {
        if (constants_1.name === undefined || constants_1.cpf === undefined || constants_1.value === undefined) {
            console.log('\x1b[31m', 'Passe os parâmetros necessários: nome, CPF e valor que deseja adicionar ao saldo');
        }
        else {
            if (!constants_1.checksIfCpfExists()) {
                console.log('\x1b[31m', 'Informe um CPF válido');
            }
            else {
                const accountSearched = constants_1.accountsJson.filter((account) => account.cpf === constants_1.cpf);
                if (accountSearched[0].name !== constants_1.name) {
                    console.log('\x1b[31m', 'Informe nome de usuário correspondente ao CPF');
                }
                else {
                    const today = moment();
                    const newTransaction = {
                        value: Number(constants_1.value),
                        description: "Depósito de dinheiro",
                        date: today.format("DD/MM/YYYY")
                    };
                    accountSearched[0].transactions.push(newTransaction);
                    accountSearched[0].balance += Number(constants_1.value);
                    constants_1.fileManager.writeObjectToFile(constants_1.accountsJson);
                    const formatedBalance = accountSearched[0].balance.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
                    console.log('Saldo atualizado:', formatedBalance);
                }
            }
        }
    }
    payBill() {
        if (constants_1.name === undefined || constants_1.cpf === undefined || constants_1.value === undefined || constants_1.description === undefined) {
            console.log('\x1b[31m', 'Passe os parâmetros necessários: nome, CPF, valor a pagar e descrição');
        }
        else {
            if (!constants_1.checksIfCpfExists()) {
                console.log('\x1b[31m', 'Informe um CPF válido');
            }
            else {
                const accountSearched = constants_1.accountsJson.filter((account) => account.cpf === constants_1.cpf);
                if (accountSearched[0].name !== constants_1.name) {
                    console.log('\x1b[31m', 'Informe nome de usuário correspondente ao CPF');
                }
                else {
                    const payMentInformed = moment(constants_1.paymentDate, "DD/MM/YYYY");
                    const today = moment();
                    const diference = today.diff(payMentInformed, "days");
                    if (diference > 0) {
                        console.log('\x1b[31m', 'Não é possível realizar pagamentos com datas anteriores ao dia vigente');
                    }
                    else {
                        if (Number(constants_1.value) > accountSearched[0].balance) {
                            console.log('\x1b[31m', 'Não há saldo suficiente para realizar essa operação');
                        }
                        else {
                            let datePayment;
                            if (constants_1.paymentDate === undefined) {
                                datePayment = today.format("DD/MM/YYYY");
                            }
                            else {
                                datePayment = constants_1.paymentDate;
                            }
                            const newPayment = {
                                value: Number(constants_1.value),
                                description: constants_1.description,
                                date: datePayment
                            };
                            accountSearched[0].transactions.push(newPayment);
                            constants_1.fileManager.writeObjectToFile(constants_1.accountsJson);
                            console.log("\x1b[32m", 'Pagamento realizado com sucesso:', '\x1b[0m', newPayment);
                        }
                    }
                }
            }
        }
    }
}
exports.UserAccount = UserAccount;
//# sourceMappingURL=UserAccount.js.map