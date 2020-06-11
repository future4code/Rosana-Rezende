import express from "express";
import { FileController } from "../controller/FileController";

export const fileRouter = express.Router()
const fileController = new FileController()

fileRouter.put("/upload", fileController.fileUpload)