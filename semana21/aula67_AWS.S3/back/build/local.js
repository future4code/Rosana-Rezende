"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = __importDefault(require("./index"));
var server = index_1.default.listen(process.env.PORT || 3001, function () {
    if (server) {
        var address = server.address();
        console.log("Servidor rodando em http://localhost:" + address.port);
    }
    else {
        console.error("Falha ao rodar o servidor.");
    }
});
