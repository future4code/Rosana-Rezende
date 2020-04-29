"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Residence_1 = require("./Residence");
class ResidentialClient extends Residence_1.Residence {
    constructor(residentsQuantity, cep, name, registrationNumber, consumedEnergy, cpf) {
        super(residentsQuantity, cep);
        this.name = name;
        this.registrationNumber = registrationNumber;
        this.consumedEnergy = consumedEnergy;
        this.cpf = cpf;
    }
    calculateBill() {
        return this.consumedEnergy * 0.75;
    }
    getCpf() {
        return this.cpf;
    }
}
exports.ResidentialClient = ResidentialClient;
//# sourceMappingURL=ResidentialClient.js.map