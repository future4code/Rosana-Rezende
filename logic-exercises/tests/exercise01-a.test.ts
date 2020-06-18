import { getInformationAboutArrayOfNumber } from "../exercise01-a"

describe("Exercise 01 - A", () => {

    it("Should return, when receiving an array of numbers, an object with information about its items: sum, quantity and multiplication", () => {
        const stringTest = [1, 2, 3, 4]
        const result = getInformationAboutArrayOfNumber(stringTest)
        expect(result).toEqual({
            sum: 10,
            quantity: 4,
            multiplication: 24
        })
    })

})