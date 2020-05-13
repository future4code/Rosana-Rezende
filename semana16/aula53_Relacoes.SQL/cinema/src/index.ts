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



const createRating = async (
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



const deleteRating = async (id: string): Promise<void> => {
    await connection("Rating")
        .delete()
        .where({
            id
        })
    console.log('Avaliação deletada com sucesso!')
}
// (async () => {
//     await deleteRating("006");
// })();


const deleteColum = async (table: string, column: string): Promise<void> => {
    await connection.raw(`
        ALTER TABLE ${table}
        DROP COLUMN ${column}
    `)
    console.log("Coluna", column, "deletada com sucesso da tabela", table)
}
// (async () => {
//     await deleteColum("Movie", "rating");
// })();

const deleteById = async (table: string, id: string): Promise<void> => {
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
const addColum = async (table: string, column: string): Promise<void> => {
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
const addRandomRate = async (): Promise<void> => {
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
// (async () => {
//     console.log(await getPersonalizedMoviesWithRatings())
// })()



// ============================== EXERCÍCIO 4 ==============================


// retorna tudo... até os que não tem comentários
const getPersonalizedMoviesWithRatings2 = async (): Promise<any> => {
    const result = await connection.raw(`
        SELECT m.title, m.id, r.rate, r.comment FROM Movie m
        JOIN Rating r ON m.id = r.movie_id;
    `)
    return result[0]
}
// (async () => {
//     console.log(await getPersonalizedMoviesWithRatings2())
// })()


// só queria que viesse só do MovieCast, sem necessariamente o filme existe
const getMoviesAndActors = async (): Promise<any> => {
    const result = await connection.raw(`
        SELECT m.id as movie_id, m.title, mc.actor_id FROM Movie m
        RIGHT JOIN MovieCast mc ON m.id = mc.movie_id
    `)
    return result[0]
}
// (async () => {
//     console.log(await getMoviesAndActors())
// })()


const avgRate = async (): Promise<any> => {
    const result = await connection.raw(`
        SELECT m.title, AVG(r.rate) as average_rating FROM Movie m
        LEFT JOIN Rating r ON m.id = r.movie_id
        GROUP BY (m.id)
    `)
    return result[0]
}
// (async () => {
//     console.log(await avgRate())
// })()




// ============================== EXERCÍCIO 5 ==============================


const getAllMoviesAndActors = async (): Promise<any> => {
    const result = await connection.raw(`
        SELECT * FROM Movie m
        LEFT JOIN MovieCast mc ON m.id = mc.movie_id
        JOIN Actor a ON a.id = mc.actor_id;
    `)
    return result[0]
}
// (async () => {
//     console.log(await getAllMoviesAndActors())
// })()


const getPersonalizedAllMoviesAndActors = async (): Promise<any> => {
    const result = await connection.raw(`
        SELECT m.id as movie_id, m.title, a.id as actor_id, a.name FROM Movie m
        LEFT JOIN MovieCast mc ON m.id = mc.movie_id
        JOIN Actor a ON a.id = mc.actor_id;
    `)
    return result[0]
}
// (async () => {
//     console.log(await getPersonalizedAllMoviesAndActors())
// })()


const getAllMoviesAndActors2 = async (): Promise<any> => {
    const result = await connection.raw(`
        SELECT * FROM Movie m
        JOIN MovieCast mc ON m.id = mc.movie_id
        JOIN Actor a ON a.id = mc.actor_id
        LEFT JOIN Rating r ON m.id = r.movie_id
    `)
    return result[0]
}
// (async () => {
//     console.log(await getAllMoviesAndActors2())
// })()



// ============================== EXERCÍCIO 6 ==============================

// criar a tabela Oscar
const createTableOscar = async (): Promise<void> => {
    await connection.raw(`
        CREATE TABLE Oscar (
            id VARCHAR(255) PRIMARY KEY,
            arward_name VARCHAR(255) NOT NULL
        )
    `)
    console.log('Tabela criada com sucesso')
}
// (async () => {
//     await createTableOscar();
// })();


// inserir Oscars
const insertOscar = async (id: string, arward_name: string): Promise<void> => {
    await connection("Oscar")
        .insert({
            id,
            arward_name
        })
    console.log("Sucesso")
}
// (async () => {
//     await insertOscar("005", "Melhor trilha sonora")
// })()

// pegar todos os Oscars
const getAllOscars = async (): Promise<any> => {
    const result = await connection("Oscar")
        .select("*")
    return result
}
// (async () => {
//     console.log(await getAllOscars())
// })()


// criar tabela de relação MoviesOscarsRelation
const createTableMovieOscarRelation = async (): Promise<void> => {
    await connection.raw(`
        CREATE TABLE MovieOscarRelation (
            movie_id VARCHAR(255),
            oscar_id VARCHAR(255),
            arward_year INT NOT NULL,
            FOREIGN KEY (movie_id) REFERENCES Movie(id),
            FOREIGN KEY (oscar_id) REFERENCES Oscar(id)
        )
    `)
    console.log('Tabela criada com sucesso')
}
// (async () => {
//     await createTableMovieOscarRelation();
// })();


const insertMovieOscar = async (
    movie_id: string, oscar_id: string, arward_year: number
): Promise<void> => {
    await connection("MovieOscarRelation")
        .insert({
            movie_id,
            oscar_id,
            arward_year
        })
    console.log("Filme recebeu Oscar")
}
// (async () => {
//     await insertMovieOscar("3", "003", 2019)
// })()

const getMovieOscarRelation = async (): Promise<any> => {
    const result = await connection("MovieOscarRelation")
        .select("*")
    return result
}
// (async () => {
//     console.log(await getMovieOscarRelation())
// })()


// deletando um Oscar inserido errado - não pode um mesmo filme ter Óscars de anos diferentes
    // mas como bloquear isso?
const deleteOscarToMovie = async (movie_id: string, oscar_id: string, arward_year: number): Promise<void> => {
    await connection.raw(`
            DELETE FROM MovieOscarRelation
            WHERE movie_id = "${movie_id}" AND oscar_id = "${oscar_id}" AND arward_year = "${arward_year}"
        `)
    console.log("Sucesso!")
}
// (async () => {
//     await deleteOscarToMovie("1", "002", 2019)
// })()


const getAllMoviesOscars = async(): Promise<void> => {
    const result = await connection.raw(`
        SELECT m.title, o.arward_name, mor.arward_year FROM Movie m
        JOIN MovieOscarRelation mor ON m.id = mor.movie_id
        JOIN Oscar o ON mor.oscar_id = o.id
    `)
    return result[0]
}
// (async () => {
//     console.log(await getAllMoviesOscars())
// })()


// ====================================================================


const server = app.listen(process.env.PORT || 3000, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost:${address.port}`);
    } else {
        console.error(`Failure upon starting server.`);
    }
});
