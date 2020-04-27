"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Bank_1 = require("./Bank");
const UserAccount_1 = require("./UserAccount");
const JSONFileManager_1 = require("./JSONFileManager");
const bankFile = require('path').resolve(__dirname, '../bank.json');
exports.fileManager = new JSONFileManager_1.JSONFileManager(bankFile);
exports.accountsJson = exports.fileManager.getObjectFromFIle();
const operation = process.argv[4];
exports.name = process.argv[5];
exports.cpfSearch = process.argv[5];
exports.cpf = process.argv[6];
exports.dateOfBith = process.argv[7];
exports.value = process.argv[7];
const bank = new Bank_1.Bank();
const userAccount = new UserAccount_1.UserAccount(exports.name, exports.cpf, exports.dateOfBith);
function checksIfCpfExists() {
    const result = exports.accountsJson.filter((account) => account.cpf === exports.cpf);
    if (result.length > 0) {
        return true;
    }
    else {
        return false;
    }
}
exports.checksIfCpfExists = checksIfCpfExists;
if (operation === 'getAllAccounts') {
    console.log(bank.getAllAccounts());
}
else if (operation === 'createAccount') {
    bank.createAccount();
}
else if (operation === 'getBalance') {
    const formatedBalance = userAccount.getBalance().toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    console.log('Saldo:', formatedBalance);
}
else if (operation === 'addBalance') {
    userAccount.addBalance();
}
else if (operation === 'getAccountByCpf') {
    console.log(bank.getAccountByCpf());
}
else if (operation === 'xxx') {
}
else if (operation === 'xxx') {
}
else if (operation === 'xxx') {
}
//# sourceMappingURL=index.js.map