"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ClientPersistence {
    static ADD_REGISTRATION(registration) {
        ClientPersistence.CLIENTS_REGISTRATION_NUMBER.push(registration);
    }
}
exports.ClientPersistence = ClientPersistence;
ClientPersistence.CLIENTS_REGISTRATION_NUMBER = [];
//# sourceMappingURL=ClientPersistence.js.map