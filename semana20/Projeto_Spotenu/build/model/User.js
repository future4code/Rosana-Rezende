"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stringToUserRole = exports.UserRole = exports.User = void 0;
const InvalidParameterError_1 = require("../errors/InvalidParameterError");
class User {
    constructor(id, name, email, nickname, password, role, description, isApproved) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.nickname = nickname;
        this.password = password;
        this.role = role;
        this.description = description;
        this.isApproved = isApproved;
    }
    getId() {
        return this.id;
    }
    getName() {
        return this.name;
    }
    getEmail() {
        return this.email;
    }
    getNickame() {
        return this.nickname;
    }
    getPassword() {
        return this.password;
    }
    getRole() {
        return this.role;
    }
    getDescription() {
        return this.description;
    }
    getIsApproved() {
        return this.isApproved;
    }
}
exports.User = User;
var UserRole;
(function (UserRole) {
    UserRole["BAND"] = "BAND";
    UserRole["PAYINGLISTENER"] = "PAYING-LISTENER";
    UserRole["NONPAYINGLISTENER"] = "NON-PAYING-LISTENER";
    UserRole["ADMINISTRATOR"] = "ADMINISTRATOR";
})(UserRole = exports.UserRole || (exports.UserRole = {}));
exports.stringToUserRole = (input) => {
    switch (input) {
        case "BAND":
            return UserRole.BAND;
        case "PAYING-LISTENER":
            return UserRole.PAYINGLISTENER;
        case "NON-PAYING-LISTENER":
            return UserRole.NONPAYINGLISTENER;
        case "ADMINISTRATOR":
            return UserRole.ADMINISTRATOR;
        default:
            throw new InvalidParameterError_1.InvalidParameterError("Invalid user role");
    }
};
