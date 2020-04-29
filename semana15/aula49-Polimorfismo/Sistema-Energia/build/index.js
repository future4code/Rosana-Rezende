"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Residence_1 = require("./classes/Residence");
const Commerce_1 = require("./classes/Commerce");
const Industry_1 = require("./classes/Industry");
const newResidence = new Residence_1.Residence(10, "29902060");
const newCommerce = new Commerce_1.Commerce(2, "29902070");
const newIndustry = new Industry_1.Industry(5, "29902080");
const clientFulano = {
    name: "Fulano",
    registrationNumber: 1,
    consumedEnergy: 100,
    calculateBill() {
        return 2;
    }
};
console.log(`Nome: ${clientFulano.name}
Número de cadastro: ${clientFulano.registrationNumber}
Energia consumida: ${clientFulano.consumedEnergy}
Valor da conta: ${clientFulano.calculateBill()}
`);
//# sourceMappingURL=index.js.map