"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Authenticator = void 0;
var jwt = __importStar(require("jsonwebtoken"));
var Authenticator = /** @class */ (function () {
    function Authenticator() {
    }
    Authenticator.prototype.generateToken = function (data, expiresIn) {
        if (expiresIn === void 0) { expiresIn = process.env.ACCESS_TOKEN_EXPIRES_IN; }
        var token = jwt.sign(data, process.env.JWT_KEY, { expiresIn: expiresIn });
        return token;
    };
    Authenticator.prototype.verify = function (token) {
        var payload = jwt.verify(token, process.env.JWT_KEY);
        var result = {
            id: payload.id,
        };
        return result;
    };
    return Authenticator;
}());
exports.Authenticator = Authenticator;
