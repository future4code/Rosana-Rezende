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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const knex_1 = __importDefault(require("knex"));
const uuid_1 = require("uuid");
dotenv_1.default.config();
exports.handler = (event) => __awaiter(void 0, void 0, void 0, function* () {
    const connection = knex_1.default({
        client: "mysql",
        connection: {
            host: process.env.DB_HOST,
            port: Number(process.env.PORT || "3306"),
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME,
        },
    });
    if (!event.name) {
        throw new Error("Invalid name");
    }
    if (!event.cartoonName) {
        throw new Error("Invalid cartoon name");
    }
    if (!event.imageLink) {
        throw new Error("Invalid image link");
    }
    yield connection
        .insert({
        id: uuid_1.v4(),
        name: event.name,
        cartoon_name: event.cartoonName,
        image_link: event.imageLink
    })
        .into("CartoonCharacter");
});
// // para testar
// const main = async () => {
//     await handler({ 
//         name: "Rosana",
//         cartoonName: "borboletinha",
//         imageLink: "https://imagensemoldes.com.br/wp-content/uploads/2019/11/Galinha-Pintadinha-Borboletinha-PNG-09.png"
//      })
// }
// main()
