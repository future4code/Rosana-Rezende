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
exports.UserBusiness = void 0;
const InvalidParameterError_1 = require("../errors/InvalidParameterError");
const User_1 = require("../model/User");
class UserBusiness {
    constructor(userDatabase, hashManager, authenticator, idGenerator) {
        this.userDatabase = userDatabase;
        this.hashManager = hashManager;
        this.authenticator = authenticator;
        this.idGenerator = idGenerator;
    }
    //1 
    signupListeningUser(name, email, nickname, password, role) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!name || !email || !nickname || !password || !role) {
                throw new InvalidParameterError_1.InvalidParameterError("Missing input");
            }
            if (email.indexOf("@") === -1) {
                throw new InvalidParameterError_1.InvalidParameterError("Invalid email");
            }
            if (password.length < 6) {
                throw new InvalidParameterError_1.InvalidParameterError("Invalid password");
            }
            const id = this.idGenerator.generatorId();
            const cryptedPassword = yield this.hashManager.hash(password);
            const user = new User_1.User(id, name, email, nickname, cryptedPassword, User_1.stringToUserRole(role));
            yield this.userDatabase.createListeningUser(user);
            const accessToken = this.authenticator.generateToken({ id, role });
            return { accessToken };
        });
    }
}
exports.UserBusiness = UserBusiness;
