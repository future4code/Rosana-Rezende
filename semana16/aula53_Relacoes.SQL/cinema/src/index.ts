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
// (async () => {
//     await deleteById("Actor", "004");
// })();



// ============================== EXERCÍCIO 2 ==============================

const createTableMovieCast = async (): Promise<void> => {
    await connection.raw(`
        CREATE TABLE MovieCast (
            movie_id VARCHAR(255),
            actor_id VARCHAR(255),
            FOREIGN KEY (movie_id) REFERENCES Movie(id),
            FOREIGN KEY (actor_id) REFERENCES Actor(id)
        )
    `)
    console.log('Tabela criada com sucesso')
}
// (async () => {
//     await createTableMovieCast();
// })();

const insertMovieCast = async (movie_id: string, actor_id: string): Promise<void> => {
    await connection("MovieCast")
        .insert({
            movie_id,
            actor_id
        })       
    console.log('Sucesso')
}
// (async () => {
//     await insertMovieCast("4", "006");
// })();
// (async () => {
//     await insertMovieCast("5", "006");
// })();


const getAllMovieCast = async (): Promise<any> => {
    const result = await connection.raw(`
      SELECT * FROM MovieCast
    `)
    return result[0]
}
// (async () => {
//     console.log(await getAllMovieCast());
// })();



// ============================== EXERCÍCIO 3 ==============================

const getMoviesWithRatings = async (): Promise<any> => {
    const result = await connection.raw(`
        SELECT * FROM Movie 
        INNER JOIN Rating ON Movie.id = Rating.movie_id;
    `)
    return result[0]
}
// (async () => {
//     console.log(await getMoviesWithRatings())
// })()



/// consertando erro na criação do Rating

// inserir coluna rate
const addColum = async(table: string, column: string): Promise<void> => {
    await connection.raw(`
        ALTER TABLE ${table}
        ADD COLUMN ${column} FLOAT NOT NULL
    `)
    console.log("Coluna", column, "criada com sucesso da tabela", table)
}
// (async () => {
//     await addColum("Rating", "rate");
// })();

// depois inserir nota em cada avaliação
const addRandomRate = async(): Promise<void> => {
    await connection.raw(`
        UPDATE Rating
        SET rate = FLOOR( RAND()*(10-5+1)+5 )
    `)
    console.log('Nota adicionada com sucesso!')
}
// (async () => {
//     await addRandomRate()
// })()



const getPersonalizedMoviesWithRatings = async (): Promise<any> => {
    const result = await connection.raw(`
        SELECT m.title, m.id, r.rate FROM Movie m
        INNER JOIN Rating r ON m.id = r.movie_id;
    `)
    return result[0]
}
(async () => {
    console.log(await getPersonalizedMoviesWithRatings())
})()


// ====================================================================


const server = app.listen(process.env.PORT || 3000, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost:${address.port}`);
    } else {
        console.error(`Failure upon starting server.`);
    }
});
