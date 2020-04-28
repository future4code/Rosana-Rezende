"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("./constants");
const Bank_1 = require("./Bank");
const UserAccount_1 = require("./UserAccount");
const bank = new Bank_1.Bank();
const userAccount = new UserAccount_1.UserAccount(constants_1.name, constants_1.cpf, constants_1.dateOfBith);
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
switch (constants_1.operation) {
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