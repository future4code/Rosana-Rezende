"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Industry_1 = require("./Industry");
class IndustrialClient extends Industry_1.Industry {
    constructor(machinesQuantity, cep, name, registrationNumber, consumedEnergy, industrialRegistrationNumber) {
        super(machinesQuantity, cep);
        this.name = name;
        this.registrationNumber = registrationNumber;
        this.consumedEnergy = consumedEnergy;
        this.industrialRegistrationNumber = industrialRegistrationNumber;
    }
    calculateBill() {
        return this.consumedEnergy * 0.45 + 100 * this.machinesQuantity;
    }
    getIndustrialRegistrationNumber() {
        return this.industrialRegistrationNumber;
    }
}
exports.IndustrialClient = IndustrialClient;
//# sourceMappingURL=IndustrialClient.js.map