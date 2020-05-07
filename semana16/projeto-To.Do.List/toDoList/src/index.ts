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

// criar Tabela de Usuários
const createTableUser = async (): Promise<void> => {
    await connection.raw(`
        CREATE TABLE ToDoListUser (
            id VARCHAR(255) PRIMARY KEY,
            name VARCHAR(255),
            nickname VARCHAR(255) UNIQUE NOT NULL,
            email VARCHAR(255) UNIQUE NOT NULL
        )
    `)
}
// (async () => {
//     await createTableUser()
// })()



// title: string,
//     description: string,
//     limitDate: string, // ou seria Date?
//     creatorUserId: string

// criar Tabela de Tarefas
const createTableTask = async (): Promise<void> => {
    await connection.raw(`
        CREATE TABLE ToDoListTask (
            id VARCHAR(255) PRIMARY KEY,
            title VARCHAR(255),
            description TEXT,
                status VARCHAR(255) NOT NULL DEFAULT "to_do",
            limit_date DATE,
            
            creator_user_id VARCHAR(255),
            FOREIGN KEY (creator_user_id) REFERENCES TodoListUser(id)
        )
    `)
}
// (async () => {
//     await createTableTask()
// })()

// criar tabela de relação
    // pQ PRIMARY KEY(task_id, responsible_user_id) ???
const createTableUserTaskRelation = async(): Promise<void> => {
    await connection.raw(`
        CREATE TABLE ToDoListUserTaskRelation (
            task_id VARCHAR(255),
            responsible_user_id VARCHAR(255),
            PRIMARY KEY(task_id, responsible_user_id), 
            FOREIGN KEY (task_id) REFERENCES TodoListTask(id),
            FOREIGN KEY (responsible_user_id) REFERENCES TodoListUser(id)
        )
    `)
}
// (async () => {
//     await createTableUserTaskRelation()
// })()



//conferir conteúdo de tabela
const getTableContent = async(table_name: string): Promise<any> => {
    const result = connection(`${table_name}`)
        .select("*")
    return result
}
// (async () => {
//     console.log(await getTableContent("User"))
// })()

// (async () => {
//     console.log(await getTableContent("Task"))
// })()

// (async () => {
//     console.log(await getTableContent("UserTaskRelation"))
// })()


// ====================================================================
// ================================ 1 =================================
// ====================================================================


// criar usuário ... e o Id?????
const createUser = async(
    id: string,
    name: string,
    nickname: string,
    email: string
):Promise<void> => {
    await connection("ToDoList")
    .insert({
        id,
        name,
        nickname,
        email
    })
    console.log("Usuário criado com sucesso")
}
// (async () => {
//   await createUser("Rosana Rezende", "rosana", "rosana@email.com");
// })();


// ====================================================================
// ================================ 2 =================================
// ====================================================================


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


// ====================================================================
// ================================ 3 =================================
// ====================================================================


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



// ====================================================================
// ================================ 4 =================================
// ====================================================================


// criar tarefa
const createTask = async(
    title: string,
    description: string,
    limit_date: string, // ou seria Date?
    creator_user_id: string
):Promise<void> => {
    await connection
    .insert({
        title,
        description,
        limit_date,
        creator_user_id
    })
    .into("ToDoList")
    console.log("Tarefa criada com sucesso")
}
// (async () => {
//   await createTask("Levar Thor pra vacinar", "As vacinas estão atrasadas", "2020-05-20", "001");
// })();


// ====================================================================
// ================================ 5 =================================
// ====================================================================


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
