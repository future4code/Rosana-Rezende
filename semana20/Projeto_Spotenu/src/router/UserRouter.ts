import express from "express";
import { UserController } from "../controller/UserController";
//linha responsável por criar um módulo de rotas no express
export const userRouter = express.Router();
const userController = new UserController()

userRouter.post("/signup/listening", userController.signupListeningUser);
