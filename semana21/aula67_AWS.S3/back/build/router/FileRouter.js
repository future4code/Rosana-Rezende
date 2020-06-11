"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fileRouter = void 0;
var express_1 = __importDefault(require("express"));
var FileController_1 = require("../controller/FileController");
exports.fileRouter = express_1.default.Router();
var fileController = new FileController_1.FileController();
exports.fileRouter.put("/upload", fileController.fileUpload);
