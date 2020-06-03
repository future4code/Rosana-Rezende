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

    test("Should return throw new error 'User not found' when id is invalid ", async () => {
        expect.assertions(2)

        const getUserById = jest.fn((id: string) => {});
        userDatabase = { getUserById }

        userBusiness = new UserBusiness(
            userDatabase as any,
            hashGenerator as any,
            tokenGenerator as any,
            idGenerator as any
        );

        try{
            await userBusiness.getUserById("12345")
        }
        catch(err){
            expect(err.errorCode).toBe(404)
            expect(err.message).toBe("User not found")
        }
    })

    test("Should return a user when no error occurs", async () => {
        const getUserById = jest.fn((id: string) => new User(
            "001",
            "Teste",
            "teste@teste.com",
            "123456",
            stringToUserRole("NORMAL")
        ));
        userDatabase = { getUserById }

        userBusiness = new UserBusiness(
            userDatabase as any,
            hashGenerator as any,
            tokenGenerator as any,
            idGenerator as any
        );

        const user = await userBusiness.getUserById("001")

        expect(getUserById).toHaveBeenCalledWith("001")
        expect(user).toEqual({
            id: "001",
            name: "Teste",
            email: "teste@teste.com",
            role: UserRole.NORMAL
        })
    })
})