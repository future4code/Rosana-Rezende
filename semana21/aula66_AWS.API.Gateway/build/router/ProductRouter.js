"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productRouter = void 0;
var express_1 = __importDefault(require("express"));
var ProductController_1 = require("../controller/ProductController");
exports.productRouter = express_1.default.Router();
var productController = new ProductController_1.ProductController();
exports.productRouter.post("/create", productController.createProduct);
