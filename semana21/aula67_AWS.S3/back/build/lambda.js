"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
var index_1 = __importDefault(require("./index"));
var lbn_lambda_express_1 = require("lbn-lambda-express");
exports.handler = lbn_lambda_express_1.createLambdaHandler(index_1.default);
