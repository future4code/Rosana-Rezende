"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
exports.handler = (event) => __awaiter(void 0, void 0, void 0, function* () {
    if (event.input.indexOf("@") === -1) {
        return {
            isEmail: false,
            reason: "Não possui '@' "
        };
    }
    if (event.input.indexOf(".") === -1) {
        return {
            isEmail: false,
            reason: "Não possui '.' "
        };
    }
    return {
        isEmail: true
    };
});
// // para testar
// const main = async () => {
//     const result1 = await handler({ input: "abc.com.br" })
//     const result2 = await handler({ input: "abc@abc" })
//     const result3 = await handler({ input: "abc@abc.com.br" })
//     console.log("1. ", result1)
//     console.log("2. ", result2)
//     console.log("3. ", result3)
// }
// main()
