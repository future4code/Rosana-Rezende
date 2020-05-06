import knex from "knex";

import express, { Request, Response } from "express";
import { AddressInfo } from "net";
import dotenv from "dotenv";

const connection = knex({
  client: "mysql",
  connection: {
    host: process.env.DB_HOST,
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE_NAME,
  },
});

dotenv.config();

const app = express();


const getActorById = async (id: string): Promise<any> => {
  const result = await connection.raw(`
    SELECT * FROM Actor WHERE id = '${id}'
  `);
  return result[0][0]
};

// function getActorById(id: string) {}

// app.get("/actor/:id", async (req: Request, res: Response) => {
//   try {
//     const id = req.params.id;
//     const actor = await getActorById(id);

//     res.status(200).send(actor);
//   } catch (err) {
//     res.status(400).send({
//       message: err.message,
//     });
//   }
// });




// const createActor = async (
//   id: string,
//   name: string,
//   salary: number,
//   dateOfBirth: Date,
//   gender: string
// ): Promise<void> => {
//   await connection
//     .insert({
//       id: id,
//       name: name,
//       salary: salary,
//       birth_date: dateOfBirth,
//       gender: gender,
//     })
//     .into("Actor");
// };

// // createActor("002", "Tony Ramos", 4000000, new Date("2020-10-05"), "male");

// const searchActor = async (name: string): Promise<any> => {
//   const result = await connection.raw(`
//     SELECT * FROM Actor WHERE name = "${name}"
//   `);
//   return result;
// };

// const countActors = async (gender: string): Promise<any> => {
//   const result = await connection.raw(`
//     SELECT COUNT(*) as count FROM Actor WHERE gender = "${gender}"
//   `);

//   const count = result[0][0].count;
//   return count;
// };

// const updateSalary = async (id: string, salary: number): Promise<any> => {
//   await connection("Actor")
//     .update({
//       salary: salary,
//     })
//     .where("id", id);
// };

// const deleteActor = async (id: string): Promise<any> => {
//   await connection("Actor").delete().where("id", id);
// };

// const avgSalary = async (gender: string): Promise<any> => {
//   const result = await connection("Actor")
//     .avg("salary as average")
//     .where({ gender });

//   return result[0].average;
// };
// (async () => {
//   console.log(await avgSalary("female"));
// })();

// const createMovie = async (
//   id: string,
//   title: string,
//   synopsis: string,
//   releaseDate: Date,
//   playingLimitDate: Date
// ) => {
//   await connection
//     .insert({
//       id: id,
//       title: title,
//       synopsis: synopsis,
//       releas_date: releaseDate,
//       playing_limit_date: playingLimitDate,
//     })
//     .into("Movie");
// };

// const searchMovie = async (term: string): Promise<any> => {
//   const result = await connection.raw(`
//     SELECT * FROM Movie 
//     WHERE title LIKE '%${term}%' OR synposis LIKE '%${term}%'
//     ORDER BY release_date
//   `);

//   return result[0];
// };

// app.get("/movie/search", async (req: Request, res: Response) => {
//   try {
//     const movies = await searchMovie(req.query.query as string);

//     res.status(200).send({
//       movies: movies,
//     });
//   } catch (err) {
//     res.status(400).send({
//       message: err.message,
//     });
//   }
// });





app.use(express.json());

// const server = app.listen(process.env.PORT || 3003, () => {
//   if (server) {
//     const address = server.address() as AddressInfo;
//     console.log(`Server is running in http://localhost:${address.port}`);
//   } else {
//     console.error(`Failure upon starting server.`);
//   }
// });
