"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ClientManager {
    constructor(clients = []) {
        this.clients = clients;
    }
    getClientsQuantity() {
        return this.clients.length;
    }
}
exports.ClientManager = ClientManager;
//# sourceMappingURL=ClientManager.js.map