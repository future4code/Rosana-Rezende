import { UserBusiness } from "../../src/business/UserBusiness";
import { User, UserRole, stringToUserRole } from "../../src/model/User";

describe("Testing UserBusiness.getUserById", () => {
    let userDatabase = {};
    let hashGenerator = {};
    let tokenGenerator = {};
    let idGenerator = {};

    let userBusiness = new UserBusiness(
        userDatabase as any,
        hashGenerator as any,
        tokenGenerator as any,
        idGenerator as any
    );

    test("Should return throw new error 'You must be an admin to access this endpoint' when role is not 'ADMIN'.", async () => {
        expect.assertions(2)

        const verify = jest.fn((token: string) => ({
            id: "001",
            role: "NORMAL"
        }))
        tokenGenerator = { verify }

        userBusiness = new UserBusiness(
            userDatabase as any,
            hashGenerator as any,
            tokenGenerator as any,
            idGenerator as any
        );

        try{
            await userBusiness.getAllUsers('token')
        }
        catch(err){
            expect(err.errorCode).toBe(401)
            expect(err.message).toBe("You must be an admin to access this endpoint")
        }
    })

    test("Should return a user when no error occurs", async () => {
        const getAllUsers = jest.fn((token: string) => [
            new User(
                "002",
                "Teste 2",
                "teste2@teste.com",
                "123456",
                stringToUserRole("ADMIN")
            )
        ]);
        userDatabase = { getAllUsers }

        const verify = jest.fn((token: string) => ({
            id: "002",
            role: "ADMIN"
        }))
        tokenGenerator = { verify }

        userBusiness = new UserBusiness(
            userDatabase as any,
            hashGenerator as any,
            tokenGenerator as any,
            idGenerator as any
        );

        const users = await userBusiness.getAllUsers('token')

        expect(getAllUsers).toHaveBeenCalledTimes(1)
        expect(users).toContainEqual({
            id: "002",
            name: "Teste 2",
            email: "teste2@teste.com",
            role: UserRole.ADMIN
        })
    })

})