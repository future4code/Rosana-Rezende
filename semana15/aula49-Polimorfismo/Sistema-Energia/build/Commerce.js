"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Place_1 = require("./abstracts/Place");
class Commerce extends Place_1.Place {
    constructor(floorsQuantity, cep) {
        super(cep);
        this.floorsQuantity = floorsQuantity;
    }
}
exports.Commerce = Commerce;
//# sourceMappingURL=Commerce.js.map