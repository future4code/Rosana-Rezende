"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Residence_1 = require("./classes/Residence");
const Commerce_1 = require("./classes/Commerce");
const Industry_1 = require("./classes/Industry");
const ResidentialClient_1 = require("./classes/ResidentialClient");
const CommercialClient_1 = require("./classes/CommercialClient");
const IndustrialClient_1 = require("./classes/IndustrialClient");
const ClientManager_1 = require("./classes/ClientManager");
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
const clientManager = new ClientManager_1.ClientManager();
clientManager.registerClient(newResidentialClient);
clientManager.registerClient(newCommercialClient);
clientManager.registerClient(newIndustrialClient);
clientManager.printClients();
const newResidentialClient2 = new ResidentialClient_1.ResidentialClient(10, "123", "Rosana", 4, 150, "aaa");
console.log(newResidentialClient2);
//# sourceMappingURL=index.js.map