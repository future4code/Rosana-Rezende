"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Place_1 = require("./abstracts/Place");
class Industry extends Place_1.Place {
    constructor(machinesQuantity, cep) {
        super(cep);
        this.machinesQuantity = machinesQuantity;
    }
}
exports.Industry = Industry;
//# sourceMappingURL=Industry.js.map