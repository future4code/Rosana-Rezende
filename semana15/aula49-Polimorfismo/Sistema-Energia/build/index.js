"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Residence_1 = require("./classes/Residence");
const Commerce_1 = require("./classes/Commerce");
const Industry_1 = require("./classes/Industry");
const ResidentialClient_1 = require("./classes/ResidentialClient");
const clientFulano = {
    name: "Fulano",
    registrationNumber: 1,
    consumedEnergy: 100,
    calculateBill: () => {
        return 2;
    }
};
const newResidence = new Residence_1.Residence(10, "29902060");
const newCommerce = new Commerce_1.Commerce(2, "29902070");
const newIndustry = new Industry_1.Industry(5, "29902080");
const newResidentialClient = new ResidentialClient_1.ResidentialClient(3, "29902090", "Beltrano", 2, 150, "12345678910");
console.log(`${newResidentialClient.constructor.name}
CEP: ${newResidentialClient.getCep()}
Quantidade de moradores: ${newResidentialClient.getResidentsQuantity()}
Nome: ${newResidentialClient.name}
Número de cadastro: ${newResidentialClient.registrationNumber}
Energia consumida: ${newResidentialClient.consumedEnergy}
Valor da conta: ${newResidentialClient.calculateBill()}
`);
//# sourceMappingURL=index.js.map