import { getInformationAboutArrayOfNumber2 } from "../exercise01-b"

describe("Exercise 01 - B", () => {

    it("Should return, when receiving an array of numbers, an object with information about its items: highest number and lowest number", () => {
        const stringTest = [10, 2, 1, 5, -3]
        const result = getInformationAboutArrayOfNumber2(stringTest)

        expect(result).toEqual({
            highest: 10,
            lowest: -3
        })
    })

})