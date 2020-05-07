import knex from "knex";
import express, { Request, Response } from "express";
import { AddressInfo } from "net";
import dotenv from "dotenv";
dotenv.config();

const connection = knex({
    client: "mysql",
    connection: {
        host: process.env.DB_HOST,
        port: Number(process.env.DB_PORT || "3306"),
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
    },
});

const app = express();
app.use(express.json());


// ====================================================================

// relembrando o que tem na Tabela Actor
const getAllActors = async (): Promise<any> => {
    const result = await connection.raw(`
      SELECT * FROM Actor
    `)
    return result[0]
}
// (async () => {
//     console.log(await getAllActors());
// })();


// relembrando o que tem na Tabela Movie
const getAllMovies = async (): Promise<any> => {
    const result = await connection.raw(`
      SELECT * FROM Movie
    `)
    return result[0]
}
// (async () => {
//     console.log(await getAllMovies());
// })();


// ============================== EXERCÍCIO 1 ==============================

const createTableRating = async (): Promise<void> => {
    await connection.raw(`
        CREATE TABLE Rating (
            id VARCHAR(255) PRIMARY KEY,
            comment TEXT NOT NULL,
            movie_id VARCHAR(255),
            FOREIGN KEY (movie_id) REFERENCES Movie(id)
        )
    `)
    console.log('Tabela criada com sucesso')
}
// (async () => {
//     await createTableRating();
// })();



// o que tem na Tabela rating? 
const getAllRatings = async (): Promise<any> => {
    const result = await connection.raw(`
      SELECT * FROM Rating
    `)
    return result[0]
}
// (async () => {
//     console.log(await getAllRatings());
// })();



const createRating = async(
    id: string,
    comment: string,
    movie_id: string
): Promise<void> => {
    await connection("Rating")
        .insert({
            id,
            comment,
            movie_id
        })
    console.log('Avaliação criada com sucesso!')
}
// (async () => {
//     await createRating("006", "Quero mais!!!", "4");
// })();
// (async () => {
//     await createRating("007", "Tentativa", "5");
// })();



const deleteRating = async(id: string): Promise<void> => {
    await connection("Rating")
        .delete()
        .where({
            id
        })
    console.log('Avaliação deletada com sucesso!')
}
// (async () => {
//     await deleteRating("001");
// })();


const deleteColum = async(table: string, column: string): Promise<void> => {
    await connection.raw(`
        ALTER TABLE ${table}
        DROP COLUMN ${column}
    `)
    console.log("Coluna", column, "deletada com sucesso da tabela", table)
}
// (async () => {
//     await deleteColum("Movie", "rating");
// })();

const deleteById = async(table: string, id: string): Promise<void> => {
    await connection.raw(`
        DELETE FROM ${table}
        WHERE id = "${id}"
    `)
    console.log(id, "deletado com sucesso da tabela", table)
}
// (async () => {
//     await deleteById("Movie", "1");
// })();









// ====================================================================


const server = app.listen(process.env.PORT || 3000, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost:${address.port}`);
    } else {
        console.error(`Failure upon starting server.`);
    }
});
