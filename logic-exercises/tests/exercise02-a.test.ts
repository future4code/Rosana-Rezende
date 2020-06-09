import { stringToObject } from "../exercise02-a"

describe("Exercise 02 - A", () => {

    it("Should return, when receiving a string, an object with information about it: number of characters, its first character and its last character", () => {
        const stringTest = "escola"
        const result = stringToObject(stringTest)
        expect(result).toEqual({
            numberOfCharacters: 6,
            firstCharacter: "e",
            lastCharacter: "a"
        })
    })

})