import express, { Request, Response } from "express";
import { AddressInfo } from "net";
import dotenv from "dotenv";

import { IdGenerator } from "./service/IdGenerator";
import { UserDatabase } from "./data/UserDatabase";
import { Authenticator } from "./service/Authenticator";

dotenv.config();

const app = express();
app.use(express.json());


// ====================================================================

// const userDataBase = new UserDatabase()

// OBS: conferir conteúdo de tabelas já criadas
// userDataBase.getTableContent("User")



// ====================================================================
// =============================== 1 ==================================
// ====================================================================

// const idGenerator = new IdGenerator()
// const id = idGenerator.generateId()
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



// ====================================================================
// =============================== 3 ==================================
// ====================================================================

// const authenticator = new Authenticator()
// const token = authenticator.generateToken(id)
// console.log("token: ", token)



// ====================================================================
// =============================== 4 ==================================
// ====================================================================

app.post("/signup", async(req: Request, res: Response) => {
    try{
        const email = req.body.email
        if(email === ""){
            throw new Error("O campo email não pode ficar vazio")
        }
        if(!email.includes("@")){
            throw new Error("Informe um email válido")
        }

        const password = req.body.password
        if(password.length < 6){
            throw new Error("A senha deve ter no mínimo 6 caracteres")
        }

        const idGenerator = new IdGenerator()
        const id = idGenerator.generateId()

        const userDataBase = new UserDatabase()
        await userDataBase.createUser(id, email, password)

        const authenticator = new Authenticator()
        const token = authenticator.generateToken(id)

        res.status(200).send({
            token
        })

    } catch(err){
        res.status(400).send({
            message: err.message
        })
    }
})



// ====================================================================
// =============================== 5 ==================================
// ====================================================================

async function test(){
    const userDataBase = new UserDatabase()
    console.log(await userDataBase.getUserByEmail("oi@teste.com"))
}
// test()


// ====================================================================
// =============================== 6 ==================================
// ====================================================================

app.post("/login", async(req: Request, res: Response) => {
    try{
        const email = req.body.email
        if(email === ""){
            throw new Error("O campo email não pode ficar vazio")
        }
        if(!email.includes("@")){
            throw new Error("Informe um email válido")
        }

        const password = req.body.password

        const userDataBase = new UserDatabase()
        const user = await userDataBase.getUserByEmail(email)

        if(user.password !== password){
            throw new Error("Senha incorreta")
        }

        const authenticator = new Authenticator()
        const token = authenticator.generateToken(user.id)

        res.status(200).send({
            token
        })
    } catch(err){
        res.status(400).send({
            message: err.message
        })
    }
})



// ====================================================================
// =============================== 7 ==================================
// ====================================================================

// // testando
// const authenticator = new Authenticator()
// const data = authenticator.verify("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImM4ODI0NGI1LTMwODEtNDdmNS05M2JiLTRjYjhjYmVjYjcxMyIsImlhdCI6MTU4OTIyNzI0NiwiZXhwIjoxNTg5MjI3MzY2fQ.8DJdfUr9WkhHa4VrcZ6BGWJCqX8ij7ujfndukS74fYE")
// console.log("data from token", data)

// // data from token { id: 'c88244b5-3081-47f5-93bb-4cb8cbecb713' }
// // ou
// // [ERROR] 17:06:20 TokenExpiredError: jwt expired



// ====================================================================
// =============================== 8 ==================================
// ====================================================================

app.get("/user/profile", async(req: Request, res: Response) => {
    try{
        const token = req.headers.authorization as string

        const authenticator = new Authenticator()
        const userAuthData = authenticator.verify(token)

        const userDataBase = new UserDatabase()
        const user = await userDataBase.getUserById(userAuthData.id)       

        res.status(200).send({
            id: user.id,
            email: user.email
        })
        
    } catch(err){
        res.status(400).send({
            message: err.message
        })
    }
})



// ====================================================================


const server = app.listen(process.env.PORT || 3000, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost:${address.port}`);
    } else {
        console.error(`Failure upon starting server.`);
    }
});