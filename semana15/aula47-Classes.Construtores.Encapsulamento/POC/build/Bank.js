"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UserAccount_1 = require("./UserAccount");
const JSONFileManager_1 = require("./JSONFileManager");
const bankFile = require('path').resolve(__dirname, '../bank.json');
const fileManager = new JSONFileManager_1.JSONFileManager(bankFile);
const accountsJson = fileManager.getObjectFromFIle();
const name = process.argv[5];
const cpf = process.argv[6];
const dateOfBith = process.argv[7];
class Bank {
    checksIfCpfExists() {
        const result = accountsJson.filter((account) => account.cpf === cpf);
        if (result.length > 0) {
            return true;
        }
        else {
            return false;
        }
    }
    createAccount() {
        if (name === undefined || cpf === undefined || dateOfBith === undefined) {
            console.log('\x1b[31m', 'Passe os parâmetros necessários: nome, CPF e data de nascimento');
        }
        else {
            const newAccount = new UserAccount_1.UserAccount(name, cpf, dateOfBith);
            if (newAccount.age < 18) {
                console.log("\x1b[31m", 'Menores de 18 anos não tem permissão para cria conta');
            }
            else {
                if (this.checksIfCpfExists()) {
                    console.log("\x1b[31m", 'CPF já cadastrado');
                }
                else {
                    try {
                        accountsJson.push(newAccount);
                        fileManager.writeObjectToFile(accountsJson);
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
        return fileManager.getObjectFromFIle();
    }
}
exports.Bank = Bank;
//# sourceMappingURL=Bank.js.map