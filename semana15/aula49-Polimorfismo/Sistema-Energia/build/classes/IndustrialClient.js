"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Industry_1 = require("./Industry");
const ClientPersistence_1 = require("./ClientPersistence");
class IndustrialClient extends Industry_1.Industry {
    constructor(machinesQuantity, cep, name, registrationNumber, consumedEnergy, industrialRegistrationNumber) {
        super(machinesQuantity, cep);
        this.name = name;
        this.registrationNumber = registrationNumber;
        this.consumedEnergy = consumedEnergy;
        this.industrialRegistrationNumber = industrialRegistrationNumber;
        const existingClient = ClientPersistence_1.ClientPersistence.CLIENTS_REGISTRATION_NUMBER.find((number) => {
            return number === registrationNumber;
        });
        if (existingClient) {
            throw new Error(`Já existe um usuário com o número ${registrationNumber}`);
        }
        else {
            ClientPersistence_1.ClientPersistence.ADD_REGISTRATION(registrationNumber);
        }
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