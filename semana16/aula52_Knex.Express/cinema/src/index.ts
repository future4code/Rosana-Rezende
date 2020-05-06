import knex from "knex";
import express, { Request, Response } from "express";
import { AddressInfo } from "net";
import dotenv from "dotenv";
dotenv.config();

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

const app = express();
app.use(express.json());

// relembrando o que tem no banco
const getAllActors = async (): Promise<any> => {
  const result = await connection.raw(`
    SELECT * FROM Actor
  `)
  return result[0]
}
// (async () => {
//   console.log(await await getAllActors());
// })();



// ============================== EXERCÍCIO 1 ==============================

const getActorById = async (id: string): Promise<any> => {
  const result = await connection.raw(`
    SELECT * FROM Actor WHERE id = '${id}'
  `);
  return result[0][0]
};
// (async () => {
//   console.log(await await getActorById("004"));
// })();

const getActorByName = async (name: string): Promise<any> => {
  const result = await connection.raw(`
    SELECT * FROM Actor WHERE name = "${name}"
  `)
  return result[0][0]
}
// (async () => {
//   console.log(await getActorByName("Tony Ramos"));
// })();

const countByGender = async (gender: string): Promise<any> => {
  const result = await connection.raw(`
      SELECT COUNT(*) as count
      FROM Actor 
      WHERE gender = "${gender}"
    `)
  return result[0][0].count // se eu não coloco isso vem o objeto
}
// (async () => {
//   console.log(await await countByGender("male"));
// })();


// ============================== EXERCÍCIO 2 ==============================

const createActor = async (
  id: string,
  name: string,
  salary: number,
  dateOfBirth: Date,
  gender: string
): Promise<void> => {
  await connection
    .insert({
      id: id,
      name: name,
      salary: salary,
      birth_date: dateOfBirth,
      gender: gender,
    })
    .into("Actor");
  console.log("Ator/atriz adicionado com sucesso")
};
// (async () => {
//   await createActor("006", "Fernanda Souza", 15000000, new Date("1984-06-18"), "female");
// })();

const updateSalary = async (salary: number, id: string): Promise<void> => {
  await connection("Actor")
    .update({
      salary: salary
    })
    .where({
      id: id
    })
  console.log('Salário atualizado com sucesso')
}
// (async () => {
//   await updateSalary(20000000, "005");
// })();

const deleteActor = async (id: string): Promise<void> => {
  await connection("Actor")
    .delete()
    .where({
      id: id
    })
  console.log('Ator/atriz deletado com sucesso')
}
// (async () => {
//   await deleteActor('002');
// })();

const avgSalaryByGender = async (gender: string): Promise<any> => {
  const result = await connection("Actor")
    .avg("salary as average")
    .where({
      gender: gender
    })
  return result[0].average
}

// (async () => {
//   console.log(await avgSalaryByGender("female"));
// })();


// ============================== EXERCÍCIO 3 ==============================


// a requisição fica
  // http://localhost:3000/actor/001
app.get("/actor/:id", async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const actor = await getActorById(id); // a função tá lá em cima
    res.status(200).send(actor);
  }
  catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});


// a requisição fica 
  // http://localhost:3000/actor?gender=female
app.get("/actor", async (req: Request, res: Response) => {
  try {
    const gender = req.query.gender;
    const count = await countByGender(gender as string); // lembrar desse detalhe
    res.status(200).send({
      quantity: count // dei um nome pra não trazer um número simplesmente
    });
  }
  catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
})








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







const server = app.listen(process.env.PORT || 3000, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});
