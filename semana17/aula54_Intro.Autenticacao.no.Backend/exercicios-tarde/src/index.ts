import express, { Request, Response } from "express";
import { AddressInfo } from "net";
import dotenv from "dotenv";

import { IdGenerator } from "./service/IdGenerator";
import { UserDatabase } from "./data/UserDatabase";

dotenv.config();

const app = express();
app.use(express.json());


// ====================================================================

const userDataBase = new UserDatabase()

// OBS: conferir conteúdo de tabelas já criadas
// userDataBase.getTableContent("User")



// ====================================================================
// =============================== 1 ==================================
// ====================================================================

const idGenerator = new IdGenerator()
const id = idGenerator.generateId()
// console.log("Generated Id: ", id)



// ====================================================================
// =============================== 2 ==================================
// ====================================================================

// // b
// const createUserTable = async (): Promise<void> => {
//     await connection.raw(`
//         CREATE TABLE User (
//             id VARCHAR(255) PRIMARY KEY,
//             email VARCHAR(255) UNIQUE NOT NULL,
//             password VARCHAR(255) NOT NULL
//         )
//     `)
//     console.log('Tabela criada com sucesso!')
// }
// (async () => {
//     await createUserTable()
// })()


// // d
// userDataBase.createUser("abc", "teste@teste.com", "123456")
















// app.post("/signup", async(req: Request, res: Response) => {

//     try{



//         res.status(200).send({
//             token: ""
//         })

//     } catch(err){
//         res.status(400).send({
//             message: err.message
//         })
//     }
// })





// ====================================================================


const server = app.listen(process.env.PORT || 3000, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost:${address.port}`);
    } else {
        console.error(`Failure upon starting server.`);
    }
});