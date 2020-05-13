import express from "express";
import { AddressInfo } from "net";
import dotenv from "dotenv";

import { signupEndpoint } from "./endpoints/SignupEndpoint";
import { loginEndpoint } from "./endpoints/LoginEndpoint";
import { getProfileEndpoint } from "./endpoints/GetProfileEndpoint";
import { deleteEndpoint } from "./endpoints/DeleteEndpoint";
import { getUserByIdEndepoint } from "./endpoints/GetUserByIdEndepoint";

dotenv.config();
const app = express();
app.use(express.json());


app.post("/signup", signupEndpoint)
app.post("/login", loginEndpoint)

app.get("/user/profile", getProfileEndpoint)
app.get("/user/:id", getUserByIdEndepoint)

app.delete("/user/:id", deleteEndpoint)


const server = app.listen(process.env.PORT || 3000, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost:${address.port}`);
    } else {
        console.error(`Failure upon starting server.`);
    }
});




////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
////////////////////////////// SEM DESAFIO /////////////////////////////
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////

// import express, { Request, Response } from "express";
// import { IdGenerator } from "./services/IdGenerator";
// import { HashManager } from "./services/HashManager";
// import { UserDatabase } from "./data/UserDatabase";
// import { Authenticator } from "./services/Authenticator";
// import { BaseDatabase } from "./data/BaseDatabase";


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

//         const role = req.body.role

//         const idGenerator = new IdGenerator()
//         const id = idGenerator.generateId()

//         const hashManager = new HashManager()
//         const hashPassword = await hashManager.hash(password)

//         const userDataBase = new UserDatabase()
//         await userDataBase.createUser(id, email, hashPassword, role)

//         const authenticator = new Authenticator()
//         const token = authenticator.generateToken({
//             id,
//             role
//         })

//         res.status(200).send({
//             token
//         })

//     } catch(err){
//         res.status(400).send({
//             message: err.message
//         })
//     }

//     // 7
//     await BaseDatabase.destroyConnection()
// })


// // d

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

//         if(!compareResult){
//             throw new Error("Senha incorreta")
//         }

//         const authenticator = new Authenticator()
//         const token = authenticator.generateToken({
//             id: user.id,
//             role: user.role
//         })

//         res.status(200).send({
//             token
//         })
//     } catch(err){
//         res.status(400).send({
//             message: err.message
//         })
//     }

//     // 7
//     await BaseDatabase.destroyConnection()
// })



// ====================================================================
// =============================== 4 ==================================
// ====================================================================


// app.get("/user/profile", async(req: Request, res: Response) => {
//     try{
//         const token = req.headers.authorization as string

//         const authenticator = new Authenticator()
//         const userAuthData = authenticator.verify(token)

//         if(userAuthData.role !== "normal"){
//             throw new Error("Unauthorized")
//         }

//         const userDataBase = new UserDatabase()
//         const user = await userDataBase.getUserById(userAuthData.id)       

//         res.status(200).send({
//             id: user.id,
//             email: user.email
//         })
        
//     } catch(err){
//         res.status(400).send({
//             message: err.message
//         })
//     }

//     // 7
//     await BaseDatabase.destroyConnection()
// })


// ====================================================================
// =============================== 5 ==================================
// ====================================================================

// app.delete("/user/:id", async(req: Request, res: Response) => {
//     try{
//         const token = req.headers.authorization as string

//         const authenticator = new Authenticator()
//         const userAuthData = authenticator.verify(token)

//         if(userAuthData.role !== "admin"){
//             throw new Error("Unauthorized")
//         }

//         const id = req.params.id

//         const userDataBase = new UserDatabase()
//         await userDataBase.deleteUser(id) 

//         res.sendStatus(200)

//     } catch(err){
//         res.status(400).send({
//             message: err.message
//         })
//     }

//     // 7
//     await BaseDatabase.destroyConnection()
// })



// ====================================================================
// =============================== 6 ==================================
// ====================================================================

// app.get("/user/:id", async(req: Request, res: Response) => {
//     try{
//         const token = req.headers.authorization as string

//         const authenticator = new Authenticator()
//         authenticator.verify(token)
        
//         const id = req.params.id

//         const userDataBase = new UserDatabase()
//         const user = await userDataBase.getUserById(id)       

//         res.status(200).send({
//             id: user.id,
//             email: user.email
//         })
        
//     } catch(err){
//         res.status(400).send({
//             message: err.message
//         })
//     }

//     // 7
//     await BaseDatabase.destroyConnection()
// })


// // ====================================================================


// const server = app.listen(process.env.PORT || 3000, () => {
//     if (server) {
//         const address = server.address() as AddressInfo;
//         console.log(`Server is running in http://localhost:${address.port}`);
//     } else {
//         console.error(`Failure upon starting server.`);
//     }
// });