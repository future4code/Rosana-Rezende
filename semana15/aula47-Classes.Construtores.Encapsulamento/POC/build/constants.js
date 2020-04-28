"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const JSONFileManager_1 = require("./JSONFileManager");
const bankFile = require('path').resolve(__dirname, '../bank.json');
exports.fileManager = new JSONFileManager_1.JSONFileManager(bankFile);
exports.accountsJson = exports.fileManager.getObjectFromFIle();
exports.operation = process.argv[4];
exports.name = process.argv[5];
exports.cpfSearch = process.argv[5];
exports.cpf = process.argv[6];
exports.dateOfBith = process.argv[7];
exports.value = process.argv[7];
exports.description = process.argv[8];
exports.paymentDate = process.argv[9];
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
//# sourceMappingURL=constants.js.map