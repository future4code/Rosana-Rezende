import express from "express";
import { UserController } from "../controller/UserController";
//linha responsável por criar um módulo de rotas no express
export const userRouter = express.Router();

userRouter.post("/signup", new UserController().signup);
userRouter.post("/login", new UserController().login);

userRouter.get("/all", new UserController().getAllUsers)
userRouter.get("/profile", new UserController().getProfile)
userRouter.get("/profile/:id", new UserController().getUserById)