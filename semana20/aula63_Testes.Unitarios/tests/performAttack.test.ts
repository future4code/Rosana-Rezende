import { performAttack } from "../src/performAttack"

describe("Testing performAttack", () => {

    const mockValidateCharacterTrue = jest.fn(() => true)
    const mockValidateCharacterFalse = jest.fn(() => false)

    it("Should decrease the life of the defender when validate charater is true", () => {
        const attacker = {
            name: "Rosana",
            life: 1500,
            defense: 100,
            force: 700
        }
        const defender =  {
            name: "Cleiton",
            life: 1500,
            defense: 500,
            force: 100
        }
        performAttack(attacker, defender, mockValidateCharacterTrue)
        expect(attacker).toEqual({
            name: "Rosana",
            life: 1500,
            defense: 100,
            force: 700
        })
        expect(defender).toEqual({
            name: "Cleiton",
            life: 1300,
            defense: 500,
            force: 100
        })
        expect(mockValidateCharacterTrue).toHaveBeenCalled()
        expect(mockValidateCharacterTrue).toHaveBeenCalledTimes(2)
        expect(mockValidateCharacterTrue).toHaveReturnedTimes(2)
    })

    it("Should return an error message when validate charater is false", () => {
        expect.assertions(4)
        try{
            const attacker = {
                name: "Rosana",
                life: 1500,
                defense: 100,
                force: 400
            }
            const defender =  {
                name: "Cleiton",
                life: 1500,
                defense: 500,
                force: 100
            }
            performAttack(attacker, defender, mockValidateCharacterFalse)
        } catch(err) {
            expect(err.message).toBe("Invalid Character")
            expect(mockValidateCharacterFalse).toHaveBeenCalled()
            expect(mockValidateCharacterFalse).toHaveBeenCalledTimes(1)
            expect(mockValidateCharacterFalse).toHaveReturnedTimes(1)
        }
    })

})