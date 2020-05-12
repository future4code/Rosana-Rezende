import { Request, Response } from "express";
import { Authenticator } from "../services/Authenticator";
import { UserDatabase } from "../data/UserDatabase";
import { BaseDatabase } from "../data/BaseDatabase";

export const getProfileEndpoint = async(req: Request, res: Response) => {
    try{
        const token = req.headers.authorization as string

        const authenticator = new Authenticator()
        const userAuthData = authenticator.verify(token)

        if(userAuthData.role !== "normal"){
            throw new Error("Unauthorized")
        }

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

    // 7
    await BaseDatabase.destroyConnection()
}