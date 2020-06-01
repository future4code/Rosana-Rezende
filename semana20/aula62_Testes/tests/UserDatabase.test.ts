import { UserDatabase } from '../src/data/UserDatabase'
import { BaseDatabase } from "../src/data/BaseDatabase";
import { User } from "../src/model/User"

const userDatabase = new UserDatabase()

describe("Testing UserDatabase", () => {

    it("Should insert an user into user table", async () => {
        const user = new User("001", "teste@teste.com", "Teste", "123456", "normal")
        await userDatabase.createUser(user)
        
        const user1 = await userDatabase.getUserById("001")

        expect(user1).not.toBe(undefined)
        // expect(user1.getId()).toBe("001")
        expect(user1).toEqual(user)
    })

    it("Should throw an error when user is duplicated", async () => {
        expect.assertions(3);
        try {
            const user = new User("002", "teste2@teste.com", "Teste2", "123456", "normal")

            await userDatabase.createUser(user);
            await userDatabase.createUser(user);
        } catch (err) {
            expect(err).not.toBe(undefined);
            expect(err.code).toBe("ER_DUP_ENTRY");
            expect(err.errno).toBe(1062);
        }
    });

    afterAll(async () => {
        await userDatabase.deleteUser("001")
        await userDatabase.deleteUser("002")

        await BaseDatabase.destroyConnection()
    })

})