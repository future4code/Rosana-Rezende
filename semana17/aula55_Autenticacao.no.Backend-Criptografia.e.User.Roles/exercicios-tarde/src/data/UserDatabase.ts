// import knex from "knex";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {

    // private connection() {
    //     return knex({
    //         client: "mysql",
    //         connection: {
    //             host: process.env.DB_HOST,
    //             port: Number(process.env.DB_PORT || "3306"),
    //             user: process.env.DB_USER,
    //             password: process.env.DB_PASSWORD,
    //             database: process.env.DB_NAME,
    //         },
    //     });
    // }

    //conferir conteúdo de tabelas já criadas
    public async getTableContent(table_name: string): Promise<any> {
        const result = await this.connection()(`${table_name}`)
            .select("*")
        return result
    }

    public async addColumRole(): Promise<void> {
        await this.connection().raw(`
            ALTER TABLE User
            ADD COLUMN role VARCHAR(255) DEFAULT "normal"
        `)
        console.log("Tabela alterada com sucesso")
    }

    private static TABLE_NAME: string = "User"

    public async createUser(
        id: string,
        email: string,
        password: string,
        role: string
    ): Promise<void> {
        await this.connection()
            .insert({
                id,
                email,
                password,
                role
            })
            .into(UserDatabase.TABLE_NAME)
    }


    public async getUserByEmail(email: string): Promise<any> {
        const result = await this.connection()
            .select("*")
            .from(UserDatabase.TABLE_NAME)
            .where({email})
        
        return result[0]
    }

    public async getUserById(id: string): Promise<any> {
        const result = await this.connection()
            .select("*")
            .from(UserDatabase.TABLE_NAME)
            .where({id})
        
        return result[0]
    }

    public async deleteUser(id: string): Promise<any>{
        await this.connection()
            .delete()
            .from(UserDatabase.TABLE_NAME)
            .where({id})
    }
    
}