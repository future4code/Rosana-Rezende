import knex from "knex"
import Knex from "knex"

export abstract class BaseDatabase {
    private static KNEX_CONNECTION: Knex | null = null

    protected connection(): Knex{
        if(BaseDatabase.KNEX_CONNECTION === null){
            BaseDatabase.KNEX_CONNECTION = knex({
                client: "mysql",
                connection: {
                    host: process.env.DB_HOST,
                    port: Number(process.env.DB_PORT || "3306"),
                    user: process.env.DB_USER,
                    password: process.env.DB_PASSWORD,
                    database: process.env.DB_NAME,
                },
            });
        }
        return BaseDatabase.KNEX_CONNECTION
    }

    public static async destroyConnection(){
        if(BaseDatabase.KNEX_CONNECTION !== null){
            await BaseDatabase.KNEX_CONNECTION.destroy()
            BaseDatabase.KNEX_CONNECTION = null
        }
    }

}