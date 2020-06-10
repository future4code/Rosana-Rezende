import dotenv from "dotenv";
import knex from 'knex'
import {v4} from "uuid";
dotenv.config();

export const handler = async (event: any) => {

    const connection = knex({
        client: "mysql",
        connection: {
            host: process.env.DB_HOST,
            port: Number(process.env.PORT || "3306"),
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME,
        },
    });

    if(!event.name){
        throw new Error("Invalid name")
    }

    if(!event.cartoonName){
        throw new Error("Invalid cartoon name")
    }

    if(!event.imageLink){
        throw new Error("Invalid image link")
    }

    await connection
        .insert({
            id: v4(), 
            name: event.name,
            cartoon_name: event.cartoonName,
            image_link: event.imageLink
        })
        .into("CartoonCharacter")

}

// // para testar
// const main = async () => {
//     await handler({ 
//         name: "Rosana",
//         cartoonName: "borboletinha",
//         imageLink: "https://imagensemoldes.com.br/wp-content/uploads/2019/11/Galinha-Pintadinha-Borboletinha-PNG-09.png"
//      })
// }

// main()