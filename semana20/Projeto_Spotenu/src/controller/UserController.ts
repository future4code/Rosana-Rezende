import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { UserDatabase } from "../data/UserDatabase";
import { HashManager } from "../services/HashManager";
import { Authenticator } from "../services/Authenticator";
import { IdGenerator } from "../services/IdGenerator";

export class UserController {
    private static UserBusiness = new UserBusiness(
        new UserDatabase(),
        new HashManager(),
        new Authenticator(),
        new IdGenerator()
      );

    // 1
    public async signupListeningUser(req: Request, res: Response){
        const { name, email, nickname, password, role } = req.body
        try{
            const result = await UserController.UserBusiness.signupListeningUser(name, email, nickname, password, role)
            res.status(200).send(result)
        } 
        catch(err){
            res.status(err.errorCode || 400).send({ message: err.message });
        }
    }

    public async signupAdministratorUser(req: Request, res: Response){
        const token = req.headers.authorization as string
        const { name, email, nickname, password } = req.body
        try{
            const result = await UserController.UserBusiness.signupAdministratorUser(name, email, nickname, password, token)
            res.status(200).send(result)
        } 
        catch(err){
            res.status(err.errorCode || 400).send({ message: err.message });
        }
    }


}