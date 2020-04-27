"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UserAccount_1 = require("./UserAccount");
const index_1 = require("./index");
class Bank {
    createAccount() {
        if (index_1.name === undefined || index_1.cpf === undefined || index_1.dateOfBith === undefined) {
            console.log('\x1b[31m', 'Passe os parâmetros necessários: nome, CPF e data de nascimento');
        }
        else {
            const newAccount = new UserAccount_1.UserAccount(index_1.name, index_1.cpf, index_1.dateOfBith);
            if (newAccount.age < 18) {
                console.log("\x1b[31m", 'Menores de 18 anos não tem permissão para cria conta');
            }
            else {
                if (index_1.checksIfCpfExists()) {
                    console.log("\x1b[31m", 'CPF já cadastrado');
                }
                else {
                    try {
                        index_1.accountsJson.push(newAccount);
                        index_1.fileManager.writeObjectToFile(index_1.accountsJson);
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
        return index_1.fileManager.getObjectFromFIle();
    }
}
exports.Bank = Bank;
//# sourceMappingURL=Bank.js.map