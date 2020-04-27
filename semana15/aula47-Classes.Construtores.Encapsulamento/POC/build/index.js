"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Bank_1 = require("./Bank");
const operation = process.argv[4];
const bankHere = new Bank_1.Bank();
if (operation === 'getAllAccounts') {
    console.log(bankHere.getAllAccounts());
}
else if (operation === 'createAccount') {
    bankHere.createAccount();
}
//# sourceMappingURL=index.js.map