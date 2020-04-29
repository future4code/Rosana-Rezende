"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Commerce_1 = require("./Commerce");
const ClientPersistence_1 = require("./ClientPersistence");
class CommercialClient extends Commerce_1.Commerce {
    constructor(floorsQuantity, cep, name, registrationNumber, consumedEnergy, cnpj) {
        super(floorsQuantity, cep);
        this.name = name;
        this.registrationNumber = registrationNumber;
        this.consumedEnergy = consumedEnergy;
        this.cnpj = cnpj;
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
        return this.consumedEnergy * 0.53;
    }
    getCnpj() {
        return this.cnpj;
    }
}
exports.CommercialClient = CommercialClient;
//# sourceMappingURL=CommercialClient.js.map