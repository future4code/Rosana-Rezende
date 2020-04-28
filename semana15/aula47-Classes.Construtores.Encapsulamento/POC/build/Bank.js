"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UserAccount_1 = require("./UserAccount");
const constants_1 = require("./constants");
class Bank {
    createAccount() {
        if (constants_1.name === undefined || constants_1.cpf === undefined || constants_1.dateOfBith === undefined) {
            console.log('\x1b[31m', 'Passe os parâmetros necessários: nome, CPF e data de nascimento');
        }
        else {
            const newAccount = new UserAccount_1.UserAccount(constants_1.name, constants_1.cpf, constants_1.dateOfBith);
            if (newAccount.getAge() < 18) {
                console.log("\x1b[31m", 'Menores de 18 anos não tem permissão para cria conta');
            }
            else {
                if (constants_1.checksIfCpfExists()) {
                    console.log("\x1b[31m", 'CPF já cadastrado');
                }
                else {
                    try {
                        constants_1.accountsJson.push(newAccount);
                        constants_1.fileManager.writeObjectToFile(constants_1.accountsJson);
                        console.log("\x1b[32m", 'Conta criada com sucesso');
                    }
                    catch (err) {
                        console.error(err);
                    }
                }
            }
        }
    }
    getAllAccounts() {
        return constants_1.fileManager.getObjectFromFIle();
    }
    getAccountByCpf() {
        if (constants_1.cpfSearch === undefined) {
            console.log('\x1b[31m', 'Passe o parâmetro necessário: CPF');
        }
        else {
            const accountSearched = constants_1.accountsJson.filter((account) => account.cpf === constants_1.cpfSearch);
            return accountSearched[0];
        }
    }
}
exports.Bank = Bank;
//# sourceMappingURL=Bank.js.map