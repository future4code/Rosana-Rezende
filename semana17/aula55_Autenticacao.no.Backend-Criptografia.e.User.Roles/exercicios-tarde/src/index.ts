import express, { Request, Response } from "express";
import { AddressInfo } from "net";
import dotenv from "dotenv";

import { IdGenerator } from "./services/IdGenerator";
import { UserDatabase } from "./data/UserDatabase";
import { Authenticator } from "./services/Authenticator";
import { HashManager } from "./services/HashManager";

dotenv.config();

const app = express();
app.use(express.json());


// ====================================================================

// const idGenerator = new IdGenerator()
// const id = idGenerator.generateId()
// console.log("Generated Id: ", id)

// const authenticator = new Authenticator()
// const token = authenticator.generateToken(id)
// console.log("token: ", token)

// const data = authenticator.verify("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImM4ODI0NGI1LTMwODEtNDdmNS05M2JiLTRjYjhjYmVjYjcxMyIsImlhdCI6MTU4OTIyNzI0NiwiZXhwIjoxNTg5MjI3MzY2fQ.8DJdfUr9WkhHa4VrcZ6BGWJCqX8ij7ujfndukS74fYE")
// console.log("data from token", data)

    // // data from token { id: 'c88244b5-3081-47f5-93bb-4cb8cbecb713' }
    // // ou
    // // [ERROR] 17:06:20 TokenExpiredError: jwt expired


    
// (async () => {
//     const userDataBase = new UserDatabase()
//     console.log(await userDataBase.getUserByEmail("oi@teste.com"))
// })()

// OBS: conferir conteúdo de tabelas já criadas
// (async () => {
//     const userDataBase = new UserDatabase()
//     console.log(await userDataBase.getTableContent("User"))
// })()



// ====================================================================
// =============================== 1 ==================================
// ====================================================================

// // testar hashmanager
// (async () => {
    
//     // conferindo a criação de hash
//     const hashManager = new HashManager()
//     const result = await hashManager.hash("123abc")
//     console.log(result)

//     // deve retornar true
//     let compareResult = await hashManager.compare("123abc", result)
//     console.log(compareResult)

//     // deve retornar false
//     let compareResult2 = await hashManager.compare("124abd", result)
//     console.log(compareResult2)

// })()


// ====================================================================
// =============================== 2 ==================================
// ====================================================================

// // b

// app.post("/signup", async(req: Request, res: Response) => {
//     try{
//         const email = req.body.email
//         if(email === ""){
//             throw new Error("O campo email não pode ficar vazio")
//         }
//         if(!email.includes("@")){
//             throw new Error("Informe um email válido")
//         }

//         const password = req.body.password
//         if(password.length < 6){
//             throw new Error("A senha deve ter no mínimo 6 caracteres")
//         }

//         const idGenerator = new IdGenerator()
//         const id = idGenerator.generateId()

//         const hashManager = new HashManager()
//         const hashPassword = await hashManager.hash(password)

//         const userDataBase = new UserDatabase()
//         await userDataBase.createUser(id, email, hashPassword)

//         const authenticator = new Authenticator()
//         const token = authenticator.generateToken(id)

//         res.status(200).send({
//             token
//         })

//     } catch(err){
//         res.status(400).send({
//             message: err.message
//         })
//     }
// })


// // c

// app.post("/login", async(req: Request, res: Response) => {
//     try{
//         const email = req.body.email
//         if(email === ""){
//             throw new Error("O campo email não pode ficar vazio")
//         }
//         if(!email.includes("@")){
//             throw new Error("Informe um email válido")
//         }

//         const password = req.body.password

//         const userDataBase = new UserDatabase()
//         const user = await userDataBase.getUserByEmail(email)

//         const hashManager = new HashManager()
//         const compareResult = await hashManager.compare(password, user.password)

//         // if(user.password !== password){
//         //     throw new Error("Senha incorreta")
//         // }
//         if(!compareResult){
//             throw new Error("Senha incorreta")
//         }

//         const authenticator = new Authenticator()
//         const token = authenticator.generateToken(user.id)

//         res.status(200).send({
//             token
//         })
//     } catch(err){
//         res.status(400).send({
//             message: err.message
//         })
//     }
// })


// ====================================================================
// =============================== 3 ==================================
// ====================================================================

// // a
// const userDataBase = new UserDatabase()
// userDataBase.addColumRole()


// // c
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

        const role = req.body.role

        const idGenerator = new IdGenerator()
        const id = idGenerator.generateId()

        const hashManager = new HashManager()
        const hashPassword = await hashManager.hash(password)

        const userDataBase = new UserDatabase()
        await userDataBase.createUser(id, email, hashPassword, role)

        const authenticator = new Authenticator()
        const token = authenticator.generateToken({
            id,
            role
        })

        res.status(200).send({
            token
        })

    } catch(err){
        res.status(400).send({
            message: err.message
        })
    }
})


// // d

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

        const hashManager = new HashManager()
        const compareResult = await hashManager.compare(password, user.password)

        if(!compareResult){
            throw new Error("Senha incorreta")
        }

        const authenticator = new Authenticator()
        const token = authenticator.generateToken({
            id: user.id,
            role: user.role
        })

        res.status(200).send({
            token
        })
    } catch(err){
        res.status(400).send({
            message: err.message
        })
    }
})






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