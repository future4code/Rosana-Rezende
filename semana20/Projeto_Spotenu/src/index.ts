import express from "express";
import { AddressInfo } from "net";
import { userRouter } from "./router/UserRouter";
import { genreRouter } from "./router/GenreRouter";
import { albumRouter } from "./router/AlbumRouter";
import { musicRouter } from "./router/MusicRouter";

const app = express();
app.use(express.json());

app.use("/", userRouter)
app.use("/genre", genreRouter)
app.use("/album", albumRouter)
app.use("/music", musicRouter)

const server = app.listen(process.env.PORT || 3000, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost:${address.port}`);
    } else {
        console.error(`Failure upon starting server.`);
    }
});