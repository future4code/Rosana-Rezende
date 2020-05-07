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
        database: process.env.DB_DATABASE_NAME,
    },
});

const app = express();
app.use(express.json());


// ====================================================================

// criar Tabela
    // não entendi bem... o que ela precisa ter????
const createTable = async (): Promise<void> => {
    await connection.raw(`
        CREATE TABLE ToDoList (
            
        )
    `)
}


// criar usuário ... e o Id?????
const createUser = async(
    name: string,
    nickname: string,
    email: string
):Promise<void> => {
    await connection("ToDoList")
    .insert({
        name,
        nickname,
        email
    })
    console.log("Usuário criado com sucesso")
}
// (async () => {
//   await createUser("Rosana Rezende", "rosana", "rosana@email.com");
// })();


// pegar usuário por Id
const getUserById = async(id: string): Promise<any> => {
    const result = await connection("ToDoList")
        .select("*")
        .where({
            id
        })
    return result[0]
}
// (async () => {
//   await getUserById("001");
// })();


// editar usuário ... acho q devia ser mais genérico
const editUser = async(name:string, nickname: string): Promise<void> => {
    await connection("ToDoList")
        .update({
            nickname
        })
        .where({
            name
        })
}
// (async () => {
//   await editUser("Rosana Rezende", "rosanarezende");
// })();


// criar tarefa
const createTask = async(
    title: string,
    description: string,
    limitDate: string, // ou seria Date?
    creatorUserId: string
):Promise<void> => {
    await connection
    .insert({
        title,
        description,
        limitDate,
        creatorUserId
    })
    .into("ToDoList")
    console.log("Tarefa criada com sucesso")
}
// (async () => {
//   await createTask("Levar Thor pra vacinar", "As vacinas estão atrasadas", "2020-05-20", "001");
// })();


// pegar tarefa por Id
const getTaskById = async(taskId: string): Promise<any> => {
    const result = await connection("ToDoList")
        .select("*")
        .where({
            taskId
        })
    return result[0]
}
// (async () => {
//   await getTaskById("001");
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
