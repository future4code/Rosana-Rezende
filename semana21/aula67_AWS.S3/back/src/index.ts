import express from "express";
import fileUpload from "express-fileupload"
import cors from "cors"
import dotenv from "dotenv"

import { fileRouter } from "./router/FileRouter";

dotenv.config()

const app = express();

app.use(cors())
app.use(express.json());
app.use(fileUpload())

app.use("/files", fileRouter)

export default app;
