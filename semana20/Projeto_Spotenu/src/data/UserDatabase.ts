import { BaseDatabase } from "./BaseDatabase";
import { User, UserRole } from "../model/User";

export class UserDatabase extends BaseDatabase {
    public static TABLE_NAME: string = "SpotenuUser";

    private toModel(dbModel?: any): User | undefined {
        return (
            dbModel &&
            new User(
                dbModel.id,
                dbModel.name,
                dbModel.email,
                dbModel.nickname,
                dbModel.password,
                dbModel.role,
                dbModel.isApproved,
                dbModel.description
            )
        );
    }

    //1
    public async createListeningUser(user: User): Promise<void> {
        await super.connection()
            .insert({
                id: user.getId(),
                name: user.getName(),
                email: user.getEmail(),
                nickname: user.getNickame(),
                password: user.getPassword(),
                role: user.getRole()
            })
            .into(UserDatabase.TABLE_NAME)
    }

    // mas pra criar esse precisamos limitar no business - com um token
    // createAdministratorUser(name, email, nickname, password, role, token)
    // nem sei se coloca o role recebendo, ou já passa direto q é usertole.adm...

    public async createAdministratorUser(user: User): Promise<void> {
        await super.connection()
            .insert({
                id: user.getId(),
                name: user.getName(),
                email: user.getEmail(),
                nickname: user.getNickame(),
                password: user.getPassword(),
                role: UserRole.ADMINISTRATOR // acho que aqui é colocar direto administrator
            })
            .into(UserDatabase.TABLE_NAME)
    }

    //

    public async createBandUser(user: User): Promise<void> {
        await super.connection()
            .insert({
                id: user.getId(),
                name: user.getName(),
                email: user.getEmail(),
                nickname: user.getNickame(),
                password: user.getPassword(),
                role: UserRole.BAND,

                description: user.getDescription(),
                is_approved: super.convertBooleanToTinyint(false) // ou já coloco logo false aqui?
            })
            .into(UserDatabase.TABLE_NAME)
    }


    public async getAllBands(): Promise<User[]> {
        const result = await super.connection()
            .select("*")
            .from(UserDatabase.TABLE_NAME)
            .where({ role: UserRole.BAND })
        const users = result[0].map((res: any) => this.toModel(res))
        return users
    }


    // não sei se 1 ou 0
    public async aproveBand(id: string): Promise<void> {
        await super.connection().raw(`
            UPDATE ${UserDatabase.TABLE_NAME}
            SET is_approved = 1 
            WHERE id = ${id}
        `)
    }









    public async getUserByEmail(email: string): Promise<User | undefined> {
        const result = await super.connection()
            .select("*")
            .from(UserDatabase.TABLE_NAME)
            .where({ email })
        return this.toModel(result[0])
    }

    public async getUserById(id: string): Promise<User | undefined> {
        const result = await super.connection()
            .select("*")
            .from(UserDatabase.TABLE_NAME)
            .where({ id })
        return this.toModel(result[0])
    }

    public async getAllUsers(): Promise<User[]> {
        const result = await super.connection()
            .select("*")
            .from(UserDatabase.TABLE_NAME)
        const users = result[0].map((res: any) => this.toModel(res))
        return users
    }

}
