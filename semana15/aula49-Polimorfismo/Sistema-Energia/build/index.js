"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Residence_1 = require("./classes/Residence");
const Commerce_1 = require("./classes/Commerce");
const Industry_1 = require("./classes/Industry");
const clientFulano = {
    name: "Fulano",
    registrationNumber: 1,
    consumedEnergy: 100,
    calculateBill: () => {
        return 2;
    }
};
const newResidence = new Residence_1.Residence(10, "29902060");
console.log(`${newResidence.constructor.name}
CEP: ${newResidence.getCep()}
Quantidade de moradores: ${newResidence.getResidentsQuantity()}
`);
const newCommerce = new Commerce_1.Commerce(2, "29902070");
console.log(`${newCommerce.constructor.name}
CEP: ${newCommerce.getCep()}
Quantidade de andares: ${newCommerce.getFloorsQuantity()}
`);
const newIndustry = new Industry_1.Industry(5, "29902080");
console.log(`${newIndustry.constructor.name}
CEP: ${newIndustry.getCep()}
Quantidade de máquinas: ${newIndustry.getMachinesQuantity()}
`);
//# sourceMappingURL=index.js.map