import knex from "knex";
import express, { Request, Response } from "express";
import { AddressInfo } from "net";
import dotenv from "dotenv";

import { IdGenerator } from "./service/IdGenerator";

dotenv.config();

const connection = knex({
    client: "mysql",
    connection: {
        host: process.env.DB_HOST,
        port: Number(process.env.DB_PORT || "3306"),
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
    },
});

const app = express();
app.use(express.json());

// ====================================================================

//conferir conteúdo de tabelas já criadas
const getTableContent = async (table_name: string): Promise<any> => {
    const result = connection(`${table_name}`)
        .select("*")
    return result
}
// (async () => {
//     console.log(await getTableContent("ToDoListUser"))
// })()

// (async () => {
//     console.log(await getTableContent("ToDoListTask"))
// })()

// (async () => {
//     console.log(await getTableContent("ToDoListUserTaskRelation"))
// })()


// ====================================================================
// =============================== 1 ==================================
// ====================================================================

const idGenerator = new IdGenerator()
const id = idGenerator.generateId()
// console.log("Generated Id: ", id)





// ====================================================================


const server = app.listen(process.env.PORT || 3000, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost:${address.port}`);
    } else {
        console.error(`Failure upon starting server.`);
    }
});