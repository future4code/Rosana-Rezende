"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Place_1 = require("./abstracts/Place");
class Residence extends Place_1.Place {
    constructor(residentsQuantity, cep) {
        super(cep);
        this.residentsQuantity = residentsQuantity;
    }
}
exports.Residence = Residence;
//# sourceMappingURL=Residence.js.map