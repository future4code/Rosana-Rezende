import express from "express";
import { productRouter } from "./router/ProductRouter";

const app = express();

app.use(express.json());

app.use("/product", productRouter)

export default app;
