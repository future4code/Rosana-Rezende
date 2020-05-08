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
            name VARCHAR(255) NOT NULL,
            nickname VARCHAR(255) UNIQUE NOT NULL,
            email VARCHAR(255) UNIQUE NOT NULL
        )
    `)
    console.log('Tabela criada com sucesso!')
}
// (async () => {
//     await createTableUser()
// })()


// criar Tabela de Tarefas
const createTableTask = async (): Promise<void> => {
    await connection.raw(`
        CREATE TABLE ToDoListTask (
            id VARCHAR(255) PRIMARY KEY,
            title VARCHAR(255) NOT NULL,
            description TEXT NOT NULL,
            status VARCHAR(255) NOT NULL DEFAULT "to_do",
            limit_date DATE NOT NULL,
            creator_user_id VARCHAR(255) NOT NULL,

            FOREIGN KEY (creator_user_id) REFERENCES ToDoListUser(id)
        )
    `)
    console.log('Tabela criada com sucesso!')
}
// (async () => {
//     await createTableTask()
// })()



// criar tabela de relação
const createTableUserTaskRelation = async (): Promise<void> => {
    await connection.raw(`
        CREATE TABLE ToDoListUserTaskRelation (
            task_id VARCHAR(255),
            responsible_user_id VARCHAR(255),
            
            FOREIGN KEY (task_id) REFERENCES ToDoListTask(id),
            FOREIGN KEY (responsible_user_id) REFERENCES ToDoListUser(id)
        )
    `)
    console.log('Tabela criada com sucesso!')
}
// (async () => {
//     await createTableUserTaskRelation()
// })()


//conferir conteúdo de tabela
const getTableContent = async (table_name: string): Promise<any> => {
    const result = connection(`${table_name}`)
        .select("*")
    return result
}
(async () => {
    console.log(await getTableContent("ToDoListUser"))
})()

// (async () => {
//     console.log(await getTableContent("ToDoListTask"))
// })()

// (async () => {
//     console.log(await getTableContent("ToDoListUserTaskRelation"))
// })()



// ====================================================================
// ================================ 1 =================================
// ====================================================================


// criar usuário
const createUser = async (
    id: string,
    name: string,
    nickname: string,
    email: string
): Promise<void> => {
    await connection("ToDoListUser")
        .insert({
            id,
            name,
            nickname,
            email
        })
    // console.log("Usuário criado com sucesso")
}
// (async () => {
//   await createUser(new Date().getTime().toString(), "Rosana Rezende", "rosana", "rosana@email.com");
// })();

app.put("/user", async (req: Request, res: Response) => {
    try {
        await createUser(
            new Date().getTime().toString(),
            req.body.name,
            req.body.nickname,
            req.body.email
        )
        res.status(200).send({
            message: "Success!"
        })
    } catch (err) {
        res.status(400).send({
            message: err.message
        })
    }
})


// ====================================================================
// ================================ 2 =================================
// ====================================================================


// pegar usuário por Id
const getUserById = async (id: string): Promise<any> => {
    const result = await connection("ToDoListUser as t")
        .select("t.id", "t.nickname")
        .where({
            id
        })
    return result[0]
}
// (async () => {
//     console.log(await getUserById("001"));
// })();

app.get("/user/:id", async (req: Request, res: Response) => {
    try {
        const id = req.params.id
        const user = await getUserById(id)
        if (user) {
            res.status(200).send(user)
        } else {
            res.status(400).send({
                message: "Usuário não encontrado!"
            })
        }
    } catch (err) {
        res.status(400).send({
            message: err.message
        })
    }
})


// ====================================================================
// ================================ 3 =================================
// ====================================================================

const editUser = async (id: string, name?: string, nickname?: string, email?: string): Promise<void> => {
    if(name){
        await connection("ToDoListUser")
            .select("*")
            .where({id})
            .update({name})
    }
    if(nickname){
        await connection("ToDoListUser")
            .select("*")
            .where({id})
            .update({nickname})
    }
    if(email){
        await connection("ToDoListUser")
            .select("*")
            .where({id})
            .update({email})
    }
}

app.post("/user/edit", async (req: Request, res: Response) => {

    try{
        const id = req.body.id
        const name = req.body.name
        const nickname = req.body.nickname
        const email = req.body.email

        if(!id){
            res.status(400).send({
                message: "Informe um id"
            })
        }

        const user = await getUserById(id)
        if(!user){
            res.status(400).send({
                message: "Informe um id válido"
            })
        }
        
        if(name === "" || nickname === "" || email === ""){
            res.status(400).send({
                message: "Campo vazio não é aceito"
            })
        }

        await editUser(id, name, nickname, email)   
        res.status(200).send({
            message: "Success!"
        })
    } catch(err){
        res.status(400).send({
            message: err.message
        })
    }
})



// ====================================================================
// ================================ 4 =================================
// ====================================================================


// criar tarefa
const createTask = async (
    title: string,
    description: string,
    limit_date: string, // ou seria Date?
    creator_user_id: string
): Promise<void> => {
    await connection("ToDoListTask")
        .insert({
            title,
            description,
            limit_date,
            creator_user_id
        })
    console.log("Tarefa criada com sucesso")
}
// (async () => {
//   await createTask("Levar Thor pra vacinar", "As vacinas estão atrasadas", "2020-05-20", "001");
// })();


// ====================================================================
// ================================ 5 =================================
// ====================================================================


// pegar tarefa por Id
const getTaskById = async (taskId: string): Promise<any> => {
    const result = await connection("ToDoListTask")
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
