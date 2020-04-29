"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ClientManager {
    constructor(clients = []) {
        this.clients = clients;
    }
    getClientsQuantity() {
        return this.clients.length;
    }
    registerClient(client) {
        this.clients.push(client);
    }
    calculateBillOfClient(registrationNumber) {
        const foundClient = this.clients.find(client => client.registrationNumber === registrationNumber);
        if (foundClient) {
            return foundClient.calculateBill();
        }
        return 0;
    }
    calculateTotalIncome() {
        const total = this.clients.reduce((prevVal, client) => {
            return prevVal + client.calculateBill();
        }, 0);
        return total;
    }
    deleteUser(registrationNumber) {
        return this.clients = this.clients.filter(client => client.registrationNumber !== registrationNumber);
    }
    printClients() {
        this.clients.map(client => (console.log(client.name + " - " + client.registrationNumber + " - " + client.consumedEnergy + " - " + client.calculateBill())));
    }
}
exports.ClientManager = ClientManager;
//# sourceMappingURL=ClientManager.js.map