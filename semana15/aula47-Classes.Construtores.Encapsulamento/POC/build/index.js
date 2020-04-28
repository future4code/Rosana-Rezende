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
exports.description = process.argv[8];
exports.paymentDate = process.argv[9];
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
var Operation;
(function (Operation) {
    Operation["GET_ALL_ACCOUNTS"] = "getAllAccounts";
    Operation["CREATE_ACCOUNT"] = "createAccount";
    Operation["GET_ACCOUNT_BY_CPF"] = "getAccountByCpf";
    Operation["GET_BALANCE"] = "getBalance";
    Operation["ADD_BALANCE"] = "addBalance";
    Operation["PAY_BIL"] = "payBill";
    Operation["UPDATE_BALANCE"] = "updateBalance";
    Operation["PERFORM_TRANSFER"] = "performTransfer";
})(Operation || (Operation = {}));
switch (operation) {
    case Operation.CREATE_ACCOUNT: {
        bank.createAccount();
        break;
    }
    case Operation.GET_ALL_ACCOUNTS: {
        console.log(bank.getAllAccounts());
        break;
    }
    case Operation.GET_ACCOUNT_BY_CPF: {
        console.log(bank.getAccountByCpf());
        break;
    }
    case Operation.GET_BALANCE: {
        const formatedBalance = userAccount.getBalance().toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        console.log('Saldo:', formatedBalance);
        break;
    }
    case Operation.ADD_BALANCE: {
        userAccount.addBalance();
        break;
    }
    case Operation.PAY_BIL: {
        userAccount.payBill();
        break;
    }
    default:
        console.error('\x1b[31m', 'Faça uma operação válida');
}
//# sourceMappingURL=index.js.map