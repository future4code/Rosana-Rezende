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

    test("Should return throw new error 'User not found' when user is invalid.", async () => {
        expect.assertions(4)

        const verify = jest.fn((token: string) => ({
            id: "003",
            role: "NORMAL"
        }))
        tokenGenerator = { verify }

        const getUserById = jest.fn((id: string) => undefined);
        userDatabase = { getUserById }

        userBusiness = new UserBusiness(
            userDatabase as any,
            hashGenerator as any,
            tokenGenerator as any,
            idGenerator as any
        );

        try {
            await userBusiness.getProfile('token')
        }
        catch (err) {
            expect(err.errorCode).toBe(404)
            expect(err.message).toBe("User not found")

            expect(verify).toHaveBeenCalledWith('token')
            expect(getUserById).toHaveBeenCalledWith('003')
        }
    })

    test("Should return a user when no error occurs", async () => {
        const verify = jest.fn((token: string) => ({
            id: "002",
            role: "ADMIN"
        }))
        tokenGenerator = { verify }

        const getUserById = jest.fn((id: string) =>
            new User(
                "002",
                "Teste 2",
                "teste2@teste.com",
                "123456",
                stringToUserRole("ADMIN")
            )
        );
        userDatabase = { getUserById }

        userBusiness = new UserBusiness(
            userDatabase as any,
            hashGenerator as any,
            tokenGenerator as any,
            idGenerator as any
        );

        const user = await userBusiness.getProfile('token')

        expect(verify).toHaveBeenCalledWith('token')
        expect(getUserById).toHaveBeenCalledTimes(1)
        expect(getUserById).toHaveBeenCalledWith('002')
        expect(user).toEqual({
            id: "002",
            name: "Teste 2",
            email: "teste2@teste.com",
            role: UserRole.ADMIN
        })
    })

})