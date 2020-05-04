"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Residence_1 = require("./Residence");
const ClientPersistence_1 = require("./ClientPersistence");
class ResidentialClient extends Residence_1.Residence {
    constructor(residentsQuantity, cep, name, registrationNumber, consumedEnergy, cpf) {
        super(residentsQuantity, cep);
        this.name = name;
        this.registrationNumber = registrationNumber;
        this.consumedEnergy = consumedEnergy;
        this.cpf = cpf;
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
        return this.consumedEnergy * 0.75;
    }
    getCpf() {
        return this.cpf;
    }
}
exports.ResidentialClient = ResidentialClient;
//# sourceMappingURL=ResidentialClient.js.map