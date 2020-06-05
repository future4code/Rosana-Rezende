import express from "express";
import { AddressInfo } from "net";
import { userRouter } from "./router/UserRouter";
import { genreRouter } from "./router/GenreRouter";
// import dotenv from "dotenv";
// dotenv.config();

const app = express();
app.use(express.json());

app.use("/", userRouter)
app.use("/genre", genreRouter)

const server = app.listen(process.env.PORT || 3000, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost:${address.port}`);
    } else {
        console.error(`Failure upon starting server.`);
    }
});