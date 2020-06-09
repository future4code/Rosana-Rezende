import { stringToArray } from "../exercise02-b"

describe("Exercise 02 - B", () => {

    it("Should return, when receiving a string, an object with information about it: number of characters, its first character and its last character", () => {
        const stringTest = "escola"
        const result = stringToArray(stringTest)
        expect(result).toEqual(["e", "s", "c", "o", "l", "a"])
    })

})