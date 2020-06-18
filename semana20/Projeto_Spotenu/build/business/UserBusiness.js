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
const NotFoundError_1 = require("../errors/NotFoundError");
const UnauthorizedError_1 = require("../errors/UnauthorizedError");
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
    //2
    signupAdministratorUser(name, email, nickname, password, token) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!name || !email || !nickname || !password || !token) {
                throw new InvalidParameterError_1.InvalidParameterError("Missing input");
            }
            const userData = this.authenticator.verify(token);
            const user = yield this.userDatabase.getUserById(userData.id);
            if (!user) {
                throw new NotFoundError_1.NotFoundError("User not found");
            }
            if (user.getRole() !== User_1.UserRole.ADMINISTRATOR) {
                throw new UnauthorizedError_1.UnauthorizedError("You must be an admin to access this endpoint");
            }
            if (email.indexOf("@") === -1) {
                throw new InvalidParameterError_1.InvalidParameterError("Invalid email");
            }
            if (password.length < 10) {
                throw new InvalidParameterError_1.InvalidParameterError("Invalid password");
            }
            const role = User_1.UserRole.ADMINISTRATOR;
            const id = this.idGenerator.generatorId();
            const cryptedPassword = yield this.hashManager.hash(password);
            const newUser = new User_1.User(id, name, email, nickname, cryptedPassword, User_1.stringToUserRole(role));
            yield this.userDatabase.createListeningUser(newUser);
            const accessToken = this.authenticator.generateToken({ id, role });
            return { accessToken };
        });
    }
    //3
    signupBandUser(name, email, nickname, password, description) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!name || !email || !nickname || !password || !description) {
                throw new InvalidParameterError_1.InvalidParameterError("Missing input");
            }
            if (email.indexOf("@") === -1) {
                throw new InvalidParameterError_1.InvalidParameterError("Invalid email");
            }
            if (password.length < 6) {
                throw new InvalidParameterError_1.InvalidParameterError("Invalid password");
            }
            const id = this.idGenerator.generatorId();
            const role = User_1.UserRole.BAND;
            const cryptedPassword = yield this.hashManager.hash(password);
            const user = new User_1.User(id, name, email, nickname, cryptedPassword, User_1.stringToUserRole(role), description);
            yield this.userDatabase.createListeningUser(user);
            const accessToken = this.authenticator.generateToken({ id, role });
            return { accessToken };
        });
    }
    //4
    getAllBands(token) {
        return __awaiter(this, void 0, void 0, function* () {
            const userData = this.authenticator.verify(token);
            const user = yield this.userDatabase.getUserById(userData.id);
            if (!user) {
                throw new NotFoundError_1.NotFoundError("User not found");
            }
            if (user.getRole() !== User_1.UserRole.ADMINISTRATOR) {
                throw new UnauthorizedError_1.UnauthorizedError("You must be an admin to access this endpoint");
            }
            const bands = yield this.userDatabase.getAllBands();
            return bands.map(band => ({
                nome: band.getId(),
                email: band.getEmail(),
                nickname: band.getNickame(),
                isApproved: band.getIsApproved()
            }));
        });
    }
    //5
    //6
    login(input, password) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!input || !password) {
                throw new InvalidParameterError_1.InvalidParameterError("Missing input");
            }
            let user;
            if (input.indexOf("@") !== -1) {
                user = yield this.userDatabase.getUserByEmail(input);
            }
            else {
                user = yield this.userDatabase.getUserByNickname(input);
            }
            if (!user) {
                throw new NotFoundError_1.NotFoundError("User not found");
            }
            //   const isPasswordCorrect = await this.hashManager.compare(
            //     password,
            //     user.getPassword()
            //   );
            //   if (!isPasswordCorrect) {
            //     throw new InvalidParameterError("Invalid password");
            //   }
            const accessToken = this.authenticator.generateToken({
                id: user.getId(),
                role: user.getRole(),
            });
            return { accessToken };
        });
    }
}
exports.UserBusiness = UserBusiness;
