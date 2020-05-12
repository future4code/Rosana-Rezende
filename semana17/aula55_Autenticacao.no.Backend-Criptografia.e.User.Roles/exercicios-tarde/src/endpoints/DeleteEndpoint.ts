import { Request, Response } from "express";
import { Authenticator } from "../services/Authenticator";
import { UserDatabase } from "../data/UserDatabase";
import { BaseDatabase } from "../data/BaseDatabase";

export const deleteEndpoint = async(req: Request, res: Response) => {
    try{
        const token = req.headers.authorization as string

        const authenticator = new Authenticator()
        const userAuthData = authenticator.verify(token)

        if(userAuthData.role !== "admin"){
            throw new Error("Unauthorized")
        }

        const id = req.params.id

        const userDataBase = new UserDatabase()
        await userDataBase.deleteUser(id) 

        res.sendStatus(200)

    } catch(err){
        res.status(400).send({
            message: err.message
        })
    }

    await BaseDatabase.destroyConnection()
}