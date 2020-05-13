import { Request, Response } from "express";
import { Authenticator } from "../services/Authenticator";
import { UserDatabase } from "../data/UserDatabase";
import { HashManager } from "../services/HashManager";
import { BaseDatabase } from "../data/BaseDatabase";

export const loginEndpoint = async(req: Request, res: Response) => {
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

    // 7
    await BaseDatabase.destroyConnection()
}