"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = __importDefault(require("express"));
const UserController_1 = require("../controller/UserController");
//linha responsável por criar um módulo de rotas no express
exports.userRouter = express_1.default.Router();
const userController = new UserController_1.UserController();
exports.userRouter.post("/signup/listening", userController.signupListeningUser);
exports.userRouter.post("/signup/administrator", userController.signupAdministratorUser);
exports.userRouter.post("/signup/band", userController.signupBandUser);
exports.userRouter.post("/login", userController.login);
