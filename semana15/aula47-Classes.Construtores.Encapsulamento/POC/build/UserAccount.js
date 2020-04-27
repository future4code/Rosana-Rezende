"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
}
exports.UserAccount = UserAccount;
//# sourceMappingURL=UserAccount.js.map