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
exports.UserDatabase = void 0;
const BaseDatabase_1 = require("./BaseDatabase");
const User_1 = require("../model/User");
let UserDatabase = /** @class */ (() => {
    class UserDatabase extends BaseDatabase_1.BaseDatabase {
        toModel(dbModel) {
            return (dbModel &&
                new User_1.User(dbModel.id, dbModel.name, dbModel.email, dbModel.nickname, dbModel.password, dbModel.role, dbModel.description, dbModel.isApproved));
        }
        //1
        createListeningUser(user) {
            const _super = Object.create(null, {
                connection: { get: () => super.connection }
            });
            return __awaiter(this, void 0, void 0, function* () {
                yield _super.connection.call(this)
                    .insert({
                    id: user.getId(),
                    name: user.getName(),
                    email: user.getEmail(),
                    nickname: user.getNickame(),
                    password: user.getPassword(),
                    role: user.getRole()
                })
                    .into(UserDatabase.TABLE_NAME);
            });
        }
        //2
        createAdministratorUser(user) {
            const _super = Object.create(null, {
                connection: { get: () => super.connection }
            });
            return __awaiter(this, void 0, void 0, function* () {
                yield _super.connection.call(this)
                    .insert({
                    id: user.getId(),
                    name: user.getName(),
                    email: user.getEmail(),
                    nickname: user.getNickame(),
                    password: user.getPassword(),
                    role: user.getRole()
                })
                    .into(UserDatabase.TABLE_NAME);
            });
        }
        getUserById(id) {
            const _super = Object.create(null, {
                connection: { get: () => super.connection }
            });
            return __awaiter(this, void 0, void 0, function* () {
                const result = yield _super.connection.call(this)
                    .select("*")
                    .from(UserDatabase.TABLE_NAME)
                    .where({ id });
                return this.toModel(result[0]);
            });
        }
        //3
        createBandUser(user) {
            const _super = Object.create(null, {
                connection: { get: () => super.connection },
                convertBooleanToTinyint: { get: () => super.convertBooleanToTinyint }
            });
            return __awaiter(this, void 0, void 0, function* () {
                yield _super.connection.call(this)
                    .insert({
                    id: user.getId(),
                    name: user.getName(),
                    email: user.getEmail(),
                    nickname: user.getNickame(),
                    password: user.getPassword(),
                    role: user.getRole(),
                    description: user.getDescription(),
                    is_approved: _super.convertBooleanToTinyint.call(this, false)
                })
                    .into(UserDatabase.TABLE_NAME);
            });
        }
        //4
        getAllBands() {
            const _super = Object.create(null, {
                connection: { get: () => super.connection }
            });
            return __awaiter(this, void 0, void 0, function* () {
                const result = yield _super.connection.call(this)
                    .select("*")
                    .from(UserDatabase.TABLE_NAME)
                    .where({ role: User_1.UserRole.BAND });
                const users = result[0].map((res) => this.toModel(res));
                return users;
            });
        }
        // 5
        aproveBand(id) {
            const _super = Object.create(null, {
                connection: { get: () => super.connection }
            });
            return __awaiter(this, void 0, void 0, function* () {
                yield _super.connection.call(this).raw(`
            UPDATE ${UserDatabase.TABLE_NAME}
            SET is_approved = 1 
            WHERE id = ${id}
        `);
            });
        }
        // 6
        getUserByEmail(email) {
            const _super = Object.create(null, {
                connection: { get: () => super.connection }
            });
            return __awaiter(this, void 0, void 0, function* () {
                const result = yield _super.connection.call(this)
                    .select("*")
                    .from(UserDatabase.TABLE_NAME)
                    .where({ email });
                return this.toModel(result[0]);
            });
        }
        getUserByNickname(nickname) {
            const _super = Object.create(null, {
                connection: { get: () => super.connection }
            });
            return __awaiter(this, void 0, void 0, function* () {
                const result = yield _super.connection.call(this)
                    .select("*")
                    .from(UserDatabase.TABLE_NAME)
                    .where({ nickname });
                return this.toModel(result[0]);
            });
        }
        getAllUsers() {
            const _super = Object.create(null, {
                connection: { get: () => super.connection }
            });
            return __awaiter(this, void 0, void 0, function* () {
                const result = yield _super.connection.call(this)
                    .select("*")
                    .from(UserDatabase.TABLE_NAME);
                const users = result[0].map((res) => this.toModel(res));
                return users;
            });
        }
    }
    UserDatabase.TABLE_NAME = "SpotenuUser";
    return UserDatabase;
})();
exports.UserDatabase = UserDatabase;
