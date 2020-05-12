import { Request, Response } from "express";
import { Authenticator } from "../services/Authenticator";
import { UserDatabase } from "../data/UserDatabase";
import { BaseDatabase } from "../data/BaseDatabase";

export const getUserByIdEndepoint = async(req: Request, res: Response) => {
    try{
        const token = req.headers.authorization as string

        const authenticator = new Authenticator()
        authenticator.verify(token)
        
        const id = req.params.id

        const userDataBase = new UserDatabase()
        const user = await userDataBase.getUserById(id)       

        res.status(200).send({
            id: user.id,
            email: user.email
        })
        
    } catch(err){
        res.status(400).send({
            message: err.message
        })
    }

    await BaseDatabase.destroyConnection()
}