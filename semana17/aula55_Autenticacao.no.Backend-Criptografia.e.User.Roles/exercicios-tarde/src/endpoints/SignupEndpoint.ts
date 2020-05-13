import { Request, Response } from "express";
import { Authenticator } from "../services/Authenticator";
import { UserDatabase } from "../data/UserDatabase";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/IdGenerator";
import { BaseDatabase } from "../data/BaseDatabase";


export const signupEndpoint = async(req: Request, res: Response) => {
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

    await BaseDatabase.destroyConnection()
}