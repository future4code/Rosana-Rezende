"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Commerce_1 = require("./Commerce");
class CommercialClient extends Commerce_1.Commerce {
    constructor(floorsQuantity, cep, name, registrationNumber, consumedEnergy, cnpj) {
        super(floorsQuantity, cep);
        this.name = name;
        this.registrationNumber = registrationNumber;
        this.consumedEnergy = consumedEnergy;
        this.cnpj = cnpj;
    }
    calculateBill() {
        return this.consumedEnergy * 0.53;
    }
    getCnpj() {
        return this.cnpj;
    }
}
exports.CommercialClient = CommercialClient;
//# sourceMappingURL=CommercialClient.js.map