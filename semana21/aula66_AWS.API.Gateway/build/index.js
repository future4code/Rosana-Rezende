"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var ProductRouter_1 = require("./router/ProductRouter");
var app = express_1.default();
app.use(express_1.default.json());
app.use("/product", ProductRouter_1.productRouter);
exports.default = app;
