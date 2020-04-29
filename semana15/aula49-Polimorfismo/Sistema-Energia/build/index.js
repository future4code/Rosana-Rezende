"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Residence_1 = require("./classes/Residence");
const Commerce_1 = require("./classes/Commerce");
const Industry_1 = require("./classes/Industry");
const ResidentialClient_1 = require("./classes/ResidentialClient");
const CommercialClient_1 = require("./classes/CommercialClient");
const IndustrialClient_1 = require("./classes/IndustrialClient");
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
const newResidentialClient = new ResidentialClient_1.ResidentialClient(3, "29902090", "Beltrano", 1, 150, "12345678910");
const newCommercialClient = new CommercialClient_1.CommercialClient(2, "29902010", "Lojão do Povo", 2, 500, "01987654321");
const newIndustrialClient = new IndustrialClient_1.IndustrialClient(10, "29902020", "Fábrica de Peças", 3, 2000, 1);
console.log(`${newIndustrialClient.constructor.name}
CEP: ${newIndustrialClient.getCep()}
Quantidade de máquinas: ${newIndustrialClient.getMachinesQuantity()}
Nome: ${newIndustrialClient.name}
Número de registro industrial: ${newIndustrialClient.getIndustrialRegistrationNumber()}
Número de cadastro: ${newIndustrialClient.registrationNumber}
Energia consumida: ${newIndustrialClient.consumedEnergy}
Valor da conta: ${newIndustrialClient.calculateBill()}
`);
//# sourceMappingURL=index.js.map