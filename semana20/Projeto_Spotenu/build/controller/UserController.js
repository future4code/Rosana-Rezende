"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const UserBusiness_1 = require("../business/UserBusiness");
const UserDatabase_1 = require("../data/UserDatabase");
const HashManager_1 = require("../services/HashManager");
const Authenticator_1 = require("../services/Authenticator");
const IdGenerator_1 = require("../services/IdGenerator");
let UserController = /** @class */ (() => {
    class UserController {
        // 1
        signupListeningUser(req, res) {
            return __awaiter(this, void 0, void 0, function* () {
                const { name, email, nickname, password, role } = req.body;
                try {
                    const result = yield UserController.UserBusiness.signupListeningUser(name, email, nickname, password, role);
                    res.status(200).send(result);
                }
                catch (err) {
                    res.status(err.errorCode || 400).send({ message: err.message });
                }
            });
        }
        //2
        signupAdministratorUser(req, res) {
            return __awaiter(this, void 0, void 0, function* () {
                const token = req.headers.authorization;
                const { name, email, nickname, password } = req.body;
                try {
                    const result = yield UserController.UserBusiness.signupAdministratorUser(name, email, nickname, password, token);
                    res.status(200).send(result);
                }
                catch (err) {
                    res.status(err.errorCode || 400).send({ message: err.message });
                }
            });
        }
        //3
        signupBandUser(req, res) {
            return __awaiter(this, void 0, void 0, function* () {
                const { name, email, nickname, password, description } = req.body;
                try {
                    const result = yield UserController.UserBusiness.signupBandUser(name, email, nickname, password, description);
                    res.status(200).send(result);
                }
                catch (err) {
                    res.status(err.errorCode || 400).send({ message: err.message });
                }
            });
        }
        //6
        login(req, res) {
            return __awaiter(this, void 0, void 0, function* () {
                const { email, nickname, password } = req.body;
                try {
                    let result;
                    if (email) {
                        result = yield UserController.UserBusiness.login(email, password);
                    }
                    if (nickname) {
                        result = yield UserController.UserBusiness.login(email, password);
                    }
                    res.status(200).send(result);
                }
                catch (err) {
                    res.status(err.errorCode || 400).send({ message: err.message });
                }
            });
        }
    }
    UserController.UserBusiness = new UserBusiness_1.UserBusiness(new UserDatabase_1.UserDatabase(), new HashManager_1.HashManager(), new Authenticator_1.Authenticator(), new IdGenerator_1.IdGenerator());
    return UserController;
})();
exports.UserController = UserController;
